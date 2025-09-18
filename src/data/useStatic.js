import { graphql, useStaticQuery } from "gatsby";
import { useMemo } from "react";

export default function useStatic(pageContext = {}) {
  const rawData = useStaticQuery(graphql`
    {
      allAsettings {
        nodes {
          settings
        }
      }
      allApages {
        nodes {
          slug
          type
          name
          content
          display
          seoDesc
          seoTitle
          title
          shortContent
        }
      }
    }
  `);

  const allData = useMemo(() => {
    const settingsRaw = rawData?.allAsettings?.nodes?.[0]?.settings || "{}";
    let settingsParsed = {};

    try {
      settingsParsed = JSON.parse(settingsRaw);
    } catch (e) {
      console.error("Failed to parse settings JSON", e);
    }

    const allData = {
      settings: settingsParsed,
      context: pageContext,
      pages: rawData?.allApages?.nodes,
    };
    return {
      ...allData,
    };
  }, [rawData, pageContext]);

  return { raw: rawData, allData };
}
