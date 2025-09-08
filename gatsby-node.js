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

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  const places = await db.collection("S_places").get();
  const placesSort = places?.docs?.map((e) => {
    const data = e?.data();
    return {
      id: e.id,
      count: data?.places?.length,
    };
  });
  const groupedByCity = placesSort
    ?.filter((a) => a.count > 9)
    ?.reduce((acc, item) => {
      const parts = item.id.split("-");
      const city = parts.pop();
      const service = parts.join("-");
      if (!acc[city]) {
        acc[city] = [];
      }
      acc[city].push(service);
      return acc;
    }, {});
  const collections = process.env.COLLECTIONS_NODE.split(",");
  for (const collection of collections) {
    try {
      const snapshot = await db
        .collection(collection)
        .where("s", "==", parseInt(process.env.SUBID))
        .get();

      snapshot.forEach((doc) => {
        const data = doc.data();
        if (collection.endsWith("settings") && data.settings) {
          data.settings.groupedByCity = groupedByCity;
          data.settings = JSON.stringify(data.settings);
        }
        createNode({
          ...data,
          id: createNodeId(`${collection}-${doc.id}`),
          parent: null,
          children: [],
          internal: {
            type: collection.replace("S_", "S"),
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

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSpages {
        nodes {
          slug
          type
          category
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const template = path.resolve(`./src/templates/index.js`);
  const pages = result.data.allSpages.nodes;
  const keywords = pages?.filter(
    (e) => e?.type === "keyword" && e?.category !== null
  );
  const cities = pages?.filter((e) => e?.type === "city");
  const categories = pages?.filter((e) => e?.type === "category");

  pages.forEach((content) => {
    if (content.slug !== "/" && content.slug !== "404") {
      if (!(content?.type === "keyword" && content?.category === null)) {
        createPage({
          path: `/${content.slug}/`,
          component: template,
          context: {
            slug: content.slug,
            type: content.type,
          },
        });
      }
    }
  });

  for (const category of categories) {
    for (const city of cities) {
      createPage({
        path: `/${category.slug}/${city.slug}/`,
        component: template,
        context: {
          category: category.slug,
          city: city.slug,
          type: "categoryPlace",
        },
      });
    }
  }

  const places = await db.collection("S_places").get();
  const placesSort = places?.docs
    ?.map((e, i) => {
      const data = e?.data();
      return {
        id: e.id,
        count: data?.places?.length,
        places: data?.places,
        update: data?.update,
      };
    })
    .sort((a, b) => b.count - a.count);
  let c = 0;
  for (const doc of placesSort) {
    c++;
    if (doc?.count > 9) {
      const parts = doc.id.split("-");
      const city = parts.pop();
      const service = parts.join("-");
      createPage({
        path: `/${service}/${city}/`,
        component: template,
        context: {
          keyword: service,
          city: city,
          type: "place",
          update: doc?.update?.toDate?.().getTime?.(),
          places:
            [
              ...doc?.places?.filter((e) => e?.status === 1),
              ...doc?.places?.filter((e) => e?.status === 2),
            ] || [],
        },
      });
    }
  }
};

exports.onPostBuild = async ({ graphql }) => {
  const result = await graphql(`
    {
      allSpages {
        nodes {
          slug
          type
          name
          category
        }
      }
    }
  `);

  const pages = result.data.allSpages.nodes;
  const keywords = pages?.filter(
    (e) => e?.type === "keyword" && e?.category !== null
  );

  const index = keywords?.map((node) => ({
    name: node.name,
    slug: node.slug,
  }));

  fs.writeFileSync(
    path.join(__dirname, "public/search-index.json"),
    JSON.stringify(index)
  );
};
