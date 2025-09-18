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
    .normalize("NFKD")
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
      .where("rapid", "==", 1)
      .orderBy("update", "desc")
      .limit(200);
    const snap = await ref.get();
    const arr = [];
    snap.forEach((d) => {
      const data = d.data() || {};
      const code = d.id || data.code || "";
      if (code) arr.push(code);
    });
    return arr;
  }

  async function fetchBrandNamesType0() {
    let ref = db.collection("A_brand").where("type", "==", 0);
    const docs = await fetchAllBatches(ref, 300);
    const names = [];
    for (const d of docs) {
      const data = d.data() || {};
      if (data.brand) names.push(String(data.brand));
    }
    return Array.from(new Set(names)).sort((a, b) => a.localeCompare(b));
  }

  let latestRapid200 = [];
  let brandListType0 = [];
  try {
    [latestRapid200, brandListType0] = await Promise.all([
      fetchLatest200RapidCodes(),
      fetchBrandNamesType0(),
    ]);
  } catch (e) {
    reporter.warn(
      `Failed to prefetch homepage context data: ${e.message || e}`
    );
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
    let ref = db.collection("A_brand").where("type", "==", 0);
    const brandDocs = await fetchAllBatches(ref, 300);
    for (const d of brandDocs) {
      const data = d.data() || {};
      const brand = String(data.brand || "").trim();
      if (!brand) continue;
      const brandSlug = slugify(brand);
      createPage({
        path: `/${brandSlug}/`,
        component: template,
        context: {
          type: "brand",
          brand,
          brandSlug,
          update:
            data.update && data.update.toMillis ? data.update.toMillis() : null,
          models: Array.isArray(data.models) ? data.models : [],
        },
      });
    }
    ref = db.collection("A_brand").where("type", "==", 1);
    const modelDocs = await fetchAllBatches(ref, 300);
    for (const d of modelDocs) {
      const data = d.data() || {};
      const brand = String(data.brand || "").trim();
      const name = String(data.name || "").trim();
      if (!brand || !name) continue;
      const brandSlug = slugify(brand);
      const modelSlug = slugify(name);
      createPage({
        path: `/${brandSlug}/${modelSlug}/`,
        component: template,
        context: {
          type: "model",
          brand,
          brandSlug,
          name,
          modelSlug,
          update:
            data.update && data.update.toMillis ? data.update.toMillis() : null,
          codes: Array.isArray(data.codes) ? data.codes : [],
        },
      });
    }
  } catch (e) {
    reporter.warn(`A_brand build error: ${e.message || e}`);
  }

  try {
    let ref = db
      .collection("A_oem")
      .where("rapid", "==", 1)
      .orderBy("update", "desc");
    const docs = await fetchAllBatches(ref, 300);
    let c3 = 0;
    for (const d of docs) {
      const data = d.data() || {};
      const code = d.id || data.code || "";
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
          image: data.image || null,
          manufacture: data.manufacture || data.manufacturer || "",
          productName: data.productName || "",
          volume: data.volume || "",
        },
      });
    }
  } catch (e) {
    reporter.warn(`A_oem build error: ${e.message || e}`);
  }
};

// exports.onPostBuild = async () => {
//   try {
//     const outDir = path.join(__dirname, "public", "search-codes");
//     fs.mkdirSync(outDir, { recursive: true });

//     const codes = Array.from(SEARCH_CODES);
//     const alnumLower = (s) =>
//       String(s || "")
//         .toLowerCase()
//         .replace(/[^a-z0-9]/g, "");

//     const shardMap = new Map();
//     const samplesMap = new Map();

//     for (const code of codes) {
//       const norm = alnumLower(code);
//       const first = norm[0] || "z";
//       const second = norm[1] || "z";
//       const prefix = `${first}${second}`;

//       if (!shardMap.has(prefix)) shardMap.set(prefix, []);
//       shardMap.get(prefix).push(code);

//       if (!samplesMap.has(first)) samplesMap.set(first, []);
//       const bucket = samplesMap.get(first);
//       if (bucket.length < 20) bucket.push(code);
//     }

//     const prefixes = [];
//     for (const [pre, arr] of shardMap.entries()) {
//       fs.writeFileSync(
//         path.join(outDir, `${pre}.json`),
//         JSON.stringify(arr),
//         "utf8"
//       );
//       prefixes.push({ prefix: pre, count: arr.length });
//     }

//     const CHARS = [..."abcdefghijklmnopqrstuvwxyz", ..."0123456789"];
//     const samplesByChar = CHARS.map((ch) => ({
//       char: ch,
//       list: (samplesMap.get(ch) || []).slice(0, 20),
//     }));

//     const master = { prefixes, samplesByChar };
//     fs.writeFileSync(
//       path.join(__dirname, "public", "search-index.json"),
//       JSON.stringify(master),
//       "utf8"
//     );
//   } catch (e) {
//     console.error("onPostBuild search index error:", e.message || e);
//     fs.writeFileSync(
//       path.join(__dirname, "public", "search-index.json"),
//       JSON.stringify({ prefixes: [], samplesByChar: [] }),
//       "utf8"
//     );
//   }
// };
