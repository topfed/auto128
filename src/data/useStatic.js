import { graphql, useStaticQuery } from "gatsby";
import { useMemo } from "react";

export default function useStatic(pageContext = {}) {
  const rawData = useStaticQuery(graphql`
    {
      allSsettings {
        nodes {
          settings
        }
      }
      allSpages {
        nodes {
          slug
          type
          name
          content
          display
          faq {
            title
            content
          }
          seoDesc
          seoTitle
          title
          shortContent
          category
          volume
          single
        }
      }
    }
  `);

  const allData = useMemo(() => {
    const settingsRaw = rawData?.allSsettings?.nodes?.[0]?.settings || "{}";
    let settingsParsed = {};

    try {
      settingsParsed = JSON.parse(settingsRaw);
    } catch (e) {
      console.error("Failed to parse settings JSON", e);
    }

    const allData = {
      settings: settingsParsed,
      context: pageContext,
      categories: rawData?.allSpages?.nodes?.filter(
        (e) => e?.type === "category"
      ),
      keywords: rawData?.allSpages?.nodes?.filter((e) => e?.type === "keyword"),
      cities: rawData?.allSpages?.nodes?.filter((e) => e?.type === "city"),
      posts: rawData?.allSpages?.nodes?.filter((e) => e?.type === "post"),
      pages: rawData?.allSpages?.nodes?.filter(
        (e) =>
          e?.type !== "post" &&
          e?.type !== "city" &&
          e?.type !== "category" &&
          e?.type !== "keyword"
      ),
    };
    return {
      ...allData,
      slugData: [
        ...allData?.categories,
        ...allData?.keywords,
        ...allData?.cities,
        ...allData?.posts,
        ...allData?.pages,
      ],
    };
  }, [rawData, pageContext]);

  return { raw: rawData, allData };
}
