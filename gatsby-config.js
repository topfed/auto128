let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

require("dotenv").config({ path: `.env.${activeEnv}` });

const config = {
  siteMetadata: {
    title: process.env.NAME,
    siteUrl: process.env.PUBLIC_URL,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-minify`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.PUBLIC_URL,
        sitemap: process.env.PUBLIC_URL + "/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `src/data/logo.png`,
        name: process.env.NAME,
        short_name: process.env.NAME,
        start_url: process.env.PUBLIC_URL,
        background_color: `#ffffff`,
        theme_color: `#b10216`,
        display: `standalone`,
        include_favicon: false,
        icons: [
          {
            src: `src/data/logo.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: process.env.PUBLIC_URL,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /data\/svg/,
        },
      },
    },
  ],
};

module.exports = config;
