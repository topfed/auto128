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

const slugify = (s) =>
  String(s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
async function fetchAllBatches(q, batchSize = 300) {
  let results = [];
  let lastDoc = null;
  let query = q;
  if (
    !(
      q._queryOptions &&
      q._queryOptions.orderBy &&
      q._queryOptions.orderBy.length
    )
  ) {
    query = q.orderBy(admin.firestore.FieldPath.documentId());
  }
  while (true) {
    let page = query.limit(batchSize);
    if (lastDoc) page = page.startAfter(lastDoc);
    const snap = await page.get();
    if (snap.empty) break;
    snap.forEach((d) => results.push(d));
    lastDoc = snap.docs[snap.docs.length - 1];
    if (snap.size < batchSize) break;
  }
  return results;
}

const SEARCH_CODES = new Set();

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;
  const collections = (process.env.COLLECTIONS_NODE || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  async function fetchLatest200RapidCodes() {
    let ref = db
      .collection("A_oem")
      .where("rapid", "==", 4)
      .orderBy("update", "desc")
      .limit(200);

    const snap = await ref.get();
    const arr = [];

    snap.forEach((d) => {
      const data = d.data() || {};
      const code = d.id || data.code || "";
      if (code) arr.push(code);
    });

    // // Fisher–Yates shuffle
    // for (let i = arr.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   const temp = arr[i];
    //   arr[i] = arr[j];
    //   arr[j] = temp;
    // }

    return arr;
  }

  async function fetchBrandNamesType0() {
    const ref = db.collection("A_cars").where("type", "==", 0);
    const docs = await fetchAllBatches(ref, 300);

    const brands = [];

    for (const d of docs) {
      const data = d.data() || {};
      const name = (data.brand || data.name || d.id || "").trim();
      if (!name) continue;

      const models = Array.isArray(data.models) ? data.models : [];
      const codes = Array.isArray(data.codes) ? data.codes : [];

      const uniqueModels = Array.from(
        new Set(models.filter(Boolean).map(String))
      );
      const uniqueCodes = Array.from(
        new Set(codes.filter(Boolean).map(String))
      );
      if (uniqueModels?.length > 0) {
        brands.push({
          name,
          models: uniqueModels,
          codes: uniqueCodes,
          group: data?.group,
        });
      }
    }

    // Sort by number of models (descending)
    brands.sort((a, b) => b.models.length - a.models.length);
    return brands;
  }

  let latestRapid200 = [];
  let brandListType0 = [];
  try {
    [latestRapid200, brandListType0] = await Promise.all([
      fetchLatest200RapidCodes(),
      fetchBrandNamesType0(),
    ]);
  } catch (e) {
    console.log(`Failed to prefetch homepage context data: ${e.message || e}`);
  }

  for (const collection of collections) {
    try {
      let ref = db.collection(collection);
      const snapshot = await ref.get();

      snapshot.forEach((doc) => {
        const data = doc.data() || {};
        if (collection.endsWith("settings") && data.settings) {
          if (typeof data.settings === "string") {
            try {
              data.settings = JSON.parse(data.settings);
            } catch (_) {
              data.settings = { raw: String(data.settings) };
            }
          }
          data.settings.latestRapid200 = latestRapid200;
          data.settings.brandListType0 = brandListType0;
          data.settings = JSON.stringify(data.settings);
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

  pages.forEach((p) => {
    if (p.slug !== "/" && p.slug !== "404") {
      createPage({
        path: `/${p.slug}/`,
        component: template,
        context: {
          slug: p.slug,
          type: p.type,
        },
      });
    }
  });

  try {
    let ref = db.collection("A_cars").where("type", "==", 0);
    const brandDocs = await fetchAllBatches(ref, 300);
    for (const d of brandDocs) {
      const data = d.data() || {};
      const name = String(data.name || "").trim();
      if (!name) continue;
      const brandSlug = slugify(name);
      if (data.models.length > 0) {
        createPage({
          path: `/${brandSlug}/`,
          component: template,
          context: {
            type: "brand",
            name,
          },
        });
      }
    }
    ref = db.collection("A_cars").where("type", "==", 1);
    const modelDocs = await fetchAllBatches(ref, 300);
    for (const d of modelDocs) {
      const data = d.data() || {};
      const name = String(data.name || "").trim();
      const brand = String(data.brand || "").trim();
      if (!brand || !name) continue;
      const brandSlug = slugify(brand);
      const modelSlug = slugify(name);
      if (data.codes.length > 0) {
        createPage({
          path: `/${brandSlug}/${modelSlug}/`,
          component: template,
          context: {
            type: "model",
            brand,
            name,
            codes: Array.isArray(data.codes) ? data.codes : [],
          },
        });
      }
    }
  } catch (e) {
    reporter.warn(`A_brand build error: ${e.message || e}`);
  }

  try {
    let ref = db
      .collection("A_oem")
      .where("rapid", "==", 4)
      .orderBy("update", "desc")
      .limit(100);
    const docs = await fetchAllBatches(ref, 300);
    let c3 = 0;
    for (const d of docs) {
      const data = d.data() || {};
      const code = d.id || "";
      if (!code) continue;

      SEARCH_CODES.add(code);
      createPage({
        path: `/${code}/`,
        component: template,
        context: {
          type: "code",
          code,
          update:
            data.update && data.update.toMillis ? data.update.toMillis() : null,
          cars: Array.isArray(data.cars) ? data.cars : [],
          manufacture: data.manufacture || data.manufacturer || "",
          content: data.content || "",
          products: data.products || "",
        },
      });
    }
  } catch (e) {
    reporter.warn(`A_oem build error: ${e.message || e}`);
  }
};

// exports.onPostBuild = async ({ graphql }) => {
//   fs.writeFileSync(
//     path.join(__dirname, "public/search-index.json"),
//     JSON.stringify(SEARCH_CODES)
//   );
// };
