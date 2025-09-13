const fs = require("fs");
const path = require("path");

const admin = require("firebase-admin");
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}
const db = admin.firestore();

function normalize(str) {
  if (!str) return "";
  // Normalize dash variants → "-"
  str = str.replace(/[\u2010-\u2015\u2212]/g, "-");
  // Remove spaces around hyphens: "E - Class" → "E-Class", "2003 - 2009" → "2003-2009"
  str = str.replace(/\s*-\s*/g, "-");
  // Collapse spaces, trim, drop trailing commas
  str = str.replace(/\s+/g, " ").trim().replace(/,+$/, "");
  return str;
}

function parseComp(entry) {
  const s = normalize(entry);
  const i = s.indexOf(" ");
  if (i <= 0) return null;
  const brand = s.slice(0, i).trim();
  const model = s.slice(i + 1).trim();
  if (!brand || !model) return null;
  return { brand, model };
}

function slugify(segment) {
  return encodeURI(
    String(segment)
      .toLowerCase()
      .replace(/[()]/g, "") // drop parentheses
      .replace(/[^\w\- ]+/g, "") // keep word chars, dash, space
      .replace(/\s+/g, "-") // spaces -> dashes
      .replace(/-+/g, "-") // collapse dashes
      .replace(/^-|-$/g, "") // trim ends
  );
}

let codesAndCatalogPromise;

async function getCodesAndCatalog() {
  if (codesAndCatalogPromise) return codesAndCatalogPromise;

  codesAndCatalogPromise = (async () => {
    const brandMap = {};
    const modelMap = {};
    const codesData = [];

    const snapshot = await db.collection("A_codes").get();

    snapshot.forEach((doc) => {
      const data = doc.data() || {};
      const code = String(data.code || data.cod || doc.id).trim();
      if (!code) return;

      const comp = Array.isArray(data.comp) ? data.comp : [];
      const products = Array.isArray(data.products) ? data.products : [];
      const content = data?.content ?? null;
      const update =
        data?.update?.toDate?.()?.getTime?.() ??
        data?.updatedAt?.toDate?.()?.getTime?.() ??
        null;

      codesData.push({ code, comp, products, content, update });

      comp.forEach((entry) => {
        const parsed = parseComp(entry);
        if (!parsed) return;
        const { brand, model } = parsed;

        if (!brandMap[brand]) {
          brandMap[brand] = {
            name: brand,
            codes: new Set(),
            models: new Set(),
          };
        }
        brandMap[brand].codes.add(code);
        brandMap[brand].models.add(model);

        const key = `${brand}::${model}`;
        if (!modelMap[key]) {
          modelMap[key] = { name: model, brand, codes: new Set() };
        }
        modelMap[key].codes.add(code);
      });
    });

    const brands = Object.values(brandMap).map((b) => ({
      name: b.name,
      codes: Array.from(b.codes).sort(),
      models: Array.from(b.models).sort(),
    }));
    const models = Object.values(modelMap).map((m) => ({
      name: m.name,
      brand: m.brand,
      codes: Array.from(m.codes).sort(),
    }));

    return { codesData, brands, models };
  })();

  return codesAndCatalogPromise;
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  // Build once here so we can put catalog into settings
  const { codesData, brands, models } = await getCodesAndCatalog();
  const catalog = { brands, models, codesData };

  const collections = process.env.COLLECTIONS_NODE.split(",");
  for (const collection of collections) {
    try {
      const snapshot = await db
        .collection(collection)
        .where("s", "==", parseInt(process.env.SUBID))
        .get();

      snapshot.forEach((doc) => {
        const data = doc.data() || {};

        // For settings collections, inject catalog into settings before stringifying
        if (collection.endsWith("settings") && data.settings) {
          if (typeof data.settings === "string") {
            try {
              data.settings = JSON.parse(data.settings);
            } catch (_) {
              data.settings = { raw: String(data.settings) };
            }
          }
          if (typeof data.settings === "object" && data.settings) {
            data.settings.catalog = catalog;
          }
          data.settings = JSON.stringify(data.settings); // keep your original behavior
        }

        createNode({
          ...data,
          id: createNodeId(`${collection}-${doc.id}`),
          parent: null,
          children: [],
          internal: {
            type: collection.replace("A_", "A"),
            contentDigest: createContentDigest(data),
          },
        });
      });
    } catch (error) {
      console.error(
        `Error fetching from '${collection}':`,
        error.message || error
      );
    }
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const template = path.resolve(`./src/templates/index.js`);

  // Build codes + catalog (no cache)
  const { codesData, brands, models } = await getCodesAndCatalog();

  // 1) CMS pages
  const result = await graphql(`
    {
      allApages {
        nodes {
          slug
          type
        }
      }
    }
  `);
  if (result.errors) throw result.errors;

  const pages = result.data?.allApages?.nodes || [];

  // Other CMS pages
  pages.forEach((p) => {
    if (p.slug !== "/" && p.slug !== "404") {
      createPage({
        path: `/${p.slug}/`,
        component: template,
        context: {
          slug: p.slug,
          type: p.type,
          // If you want catalog everywhere, you can also pass it here.
        },
      });
    }
  });

  // 2) Code pages
  codesData.forEach(({ code, comp, products, content, update }) => {
    createPage({
      path: `/${slugify(code)}/`,
      component: template,
      context: {
        type: "code",
        code,
        comp,
        products,
        content,
        update,
      },
    });
  });

  // 3) Brand pages (optional but handy)
  brands.forEach((b) => {
    createPage({
      path: `/${slugify(b.name)}/`,
      component: template,
      context: {
        type: "brand",
        brand: b.name,
        codes: b.codes,
        models: b.models,
      },
    });
  });

  // 4) Brand + Model pages
  models.forEach((m) => {
    const brandSlug = slugify(m.brand);
    const modelSlug = slugify(m.name);
    createPage({
      path: `/${brandSlug}/${modelSlug}/`,
      component: template,
      context: {
        type: "model",
        brand: m.brand,
        model: m.name,
        codes: m.codes,
      },
    });
  });

  reporter.info(
    `Created: ${codesData.length} code pages, ${brands.length} brand pages, ${models.length} brand-model pages.`
  );
};

exports.onPostBuild = async ({ graphql }) => {
  const { codesData } = await getCodesAndCatalog();

  const index = codesData?.map((node) => slugify(node.code));

  fs.writeFileSync(
    path.join(__dirname, "public/search-index.json"),
    JSON.stringify(index)
  );
};
