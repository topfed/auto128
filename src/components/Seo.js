import React from "react";
import { formatBrandName, formatManufacturersList } from "../data/functions";

const Seo = ({ data, context }) => {
  let ogUrl = process.env.PUBLIC_URL;
  const type = context?.type || "index";
  const slug = context?.slug || "/";
  const slugData = data?.pages?.find((e) => e?.slug === slug);
  const siteName = process.env.NAME;
  const language = process.env.LANGUAGE;
  const logoUrl = `${process.env.PUBLIC_URL}/logo.png`;
  let pageSchema = null;
  const brandData = {};
  const modelData = {};
  const codeData = {};

  if (type === "brand") {
    brandData.titleSEO = data?.settings["brand"][0]?.titleSEO?.replace(
      "###",
      formatBrandName(context?.name)
    );
    brandData.descSEO = data?.settings["brand"][0]?.descSEO
      ?.replace("###", formatBrandName(context?.name))
      ?.replace("###", formatBrandName(context?.name));
  }

  if (type === "model") {
    modelData.titleSEO = data?.settings["model"][0]?.titleSEO
      ?.replace("###", formatBrandName(context?.brand))
      ?.replace("##", formatBrandName(context?.name));
    modelData.descSEO = data?.settings["model"][0]?.descSEO
      ?.replace("###", formatBrandName(context?.brand))
      ?.replace("##", formatBrandName(context?.name))
      ?.replace("##", formatBrandName(context?.name));
  }

  if (type === "code") {
    codeData.titleSEO = data?.settings["code"][0]?.titleSEO
      ?.replace("###", context?.code)
      ?.replace("##", formatManufacturersList(context?.manufacture));
    codeData.descSEO = data?.settings["code"][0]?.descSEO
      ?.replace("###", context?.code)
      ?.replace("###", context?.code)
      ?.replace("##", formatManufacturersList(context?.manufacture));
  }

  const title =
    codeData.titleSEO ||
    modelData.titleSEO ||
    brandData.titleSEO ||
    slugData?.seoTitle;
  const description =
    codeData.descSEO ||
    modelData.descSEO ||
    brandData.descSEO ||
    slugData?.seoDesc;

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.auto128.com/#org",
        name: "Auto128",
        url: "https://www.auto128.com/",
        logo: "https://www.auto128.com/static/logo.png",
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          "@id": "http://localhost:8000/refunds-and-returns/#policy",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.auto128.com/#website",
        url: "https://www.auto128.com/",
        name: "Auto128",
        publisher: { "@id": "https://www.auto128.com/#org" },
        inLanguage: "en",
        potentialAction: {
          "@type": "RegisterAction",
          name: "Become a Seller",
          target: "https://www.auto128.com/become-a-seller/",
        },
      },
      {
        "@type": "MerchantReturnPolicy",
        "@id": "http://localhost:8000/refunds-and-returns/#returns",
        name: "Refunds and Returns",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 14,
        returnFees: "https://schema.org/ReturnShippingFees",
        returnMethod: "https://schema.org/ReturnByMail",
        applicableCountry: "EUR",
      },
    ],
  };

  if (type === "index") {
    // pageSchema = {
    //   "@context": "https://schema.org",
    //   "@type": "WebSite",
    //   name: siteName,
    //   url: ogUrl,
    //   publisher: publisher,
    //   inLanguage: language,
    // };
  }
  // if (type === "category") {
  //   ogUrl = `${ogUrl}/${context?.slug}/`;
  //   pageSchema = {
  //     "@context": "https://schema.org",
  //     "@type": "CollectionPage",
  //     name: shortTitle,
  //     description: description,
  //     url: ogUrl,
  //     mainEntity: {
  //       "@type": "ItemList",
  //       itemListElement: data?.slugData
  //         ?.filter(
  //           (e) => e?.category === context?.slug && e?.type === "keyword"
  //         )
  //         ?.sort((a, b) => b.volume - a.volume)
  //         ?.map((e, i) => {
  //           return {
  //             "@type": "ListItem",
  //             position: i + 1,
  //             url: `${process.env.PUBLIC_URL}/${e?.slug}/`,
  //           };
  //         }),
  //     },
  //     breadcrumb: {
  //       "@type": "BreadcrumbList",
  //       itemListElement: [
  //         {
  //           "@type": "ListItem",
  //           position: 1,
  //           name: "Home",
  //           item: process.env.PUBLIC_URL,
  //         },
  //         {
  //           "@type": "ListItem",
  //           position: 2,
  //           name: title,
  //           item: ogUrl,
  //         },
  //       ],
  //     },
  //     publisher: publisher,
  //     inLanguage: language,
  //   };
  // }
  // if (type === "keyword") {
  //   ogUrl = `${ogUrl}/${context?.slug}/`;
  //   pageSchema = {
  //     "@context": "https://schema.org",
  //     "@type": "CollectionPage",
  //     name: shortTitle,
  //     description: description,
  //     url: ogUrl,
  //     mainEntity: {
  //       "@type": "ItemList",
  //       itemListElement: data?.slugData
  //         ?.filter((e) => e?.type === "city")
  //         ?.sort((a, b) => a.volume - b.volume)
  //         ?.map((e, i) => {
  //           return {
  //             "@type": "ListItem",
  //             position: i + 1,
  //             url: `${process.env.PUBLIC_URL}/${e?.slug}/`,
  //           };
  //         }),
  //     },
  //     breadcrumb: {
  //       "@type": "BreadcrumbList",
  //       itemListElement: [
  //         {
  //           "@type": "ListItem",
  //           position: 1,
  //           name: "Home",
  //           item: process.env.PUBLIC_URL,
  //         },
  //         {
  //           "@type": "ListItem",
  //           position: 2,
  //           name: shortTitle,
  //           item: ogUrl,
  //         },
  //       ],
  //     },
  //     publisher: publisher,
  //     inLanguage: language,
  //   };
  // }
  // if (type === "city") {
  //   ogUrl = `${ogUrl}/${context?.slug}/`;
  //   pageSchema = {
  //     "@context": "https://schema.org",
  //     "@type": "CollectionPage",
  //     name: shortTitle,
  //     description: description,
  //     url: ogUrl,
  //     mainEntity: {
  //       "@type": "ItemList",
  //       itemListElement: data?.slugData
  //         ?.filter((e) => e?.type === "category")
  //         ?.sort((a, b) => a.volume - b.volume)
  //         ?.map((e, i) => {
  //           return {
  //             "@type": "ListItem",
  //             position: i + 1,
  //             url: `${process.env.PUBLIC_URL}/${e?.slug}/${context?.slug}/`,
  //           };
  //         }),
  //     },
  //     breadcrumb: {
  //       "@type": "BreadcrumbList",
  //       itemListElement: [
  //         {
  //           "@type": "ListItem",
  //           position: 1,
  //           name: "Home",
  //           item: process.env.PUBLIC_URL,
  //         },
  //         {
  //           "@type": "ListItem",
  //           position: 2,
  //           name: shortTitle,
  //           item: ogUrl,
  //         },
  //       ],
  //     },
  //     publisher: publisher,
  //     inLanguage: language,
  //   };
  // }
  // if (type === "categoryPlace") {
  //   ogUrl = `${ogUrl}/${categoryPlaceData?.category?.slug}/${categoryPlaceData?.city?.slug}/`;
  //   pageSchema = {
  //     "@context": "https://schema.org",
  //     "@type": "CollectionPage",
  //     name: title,
  //     description: description,
  //     url: ogUrl,
  //     mainEntity: {
  //       "@type": "ItemList",
  //       itemListElement: data?.slugData
  //         ?.filter(
  //           (e) =>
  //             e?.category === categoryPlaceData?.category?.slug &&
  //             e?.type === "keyword"
  //         )
  //         ?.sort((a, b) => b.volume - a.volume)
  //         ?.map((e, i) => {
  //           return {
  //             "@type": "ListItem",
  //             position: i + 1,
  //             url: `${process.env.PUBLIC_URL}/${e?.slug}/${categoryPlaceData?.city?.slug}/`,
  //           };
  //         }),
  //     },
  //     breadcrumb: {
  //       "@type": "BreadcrumbList",
  //       itemListElement: [
  //         {
  //           "@type": "ListItem",
  //           position: 1,
  //           name: "Home",
  //           item: process.env.PUBLIC_URL,
  //         },
  //         {
  //           "@type": "ListItem",
  //           position: 2,
  //           name: `${categoryPlaceData?.category?.name}`,
  //           item: `${process.env.PUBLIC_URL}/${categoryPlaceData?.category?.slug}/`,
  //         },
  //         {
  //           "@type": "ListItem",
  //           position: 3,
  //           name: title,
  //           item: ogUrl,
  //         },
  //       ],
  //     },
  //     publisher: publisher,
  //     inLanguage: language,
  //   };
  // }
  // if (type === "place") {
  //   ogUrl = `${ogUrl}/${placeData?.keyword?.slug}/${placeData?.city?.slug}/`;
  //   pageSchema = {
  //     "@context": "https://schema.org",
  //     "@type": "WebPage",
  //     name: title,
  //     description: description,
  //     url: ogUrl,
  //     breadcrumb: {
  //       "@type": "BreadcrumbList",
  //       itemListElement: [
  //         {
  //           "@type": "ListItem",
  //           position: 1,
  //           name: "Home",
  //           item: process.env.PUBLIC_URL,
  //         },
  //         {
  //           "@type": "ListItem",
  //           position: 2,
  //           name: `${placeData?.category?.name}`,
  //           item: `${process.env.PUBLIC_URL}/${placeData?.category?.slug}/`,
  //         },
  //         {
  //           "@type": "ListItem",
  //           position: 3,
  //           name: `${placeData?.keyword?.name}`,
  //           item: `${process.env.PUBLIC_URL}/${placeData?.keyword?.slug}/`,
  //         },
  //         {
  //           "@type": "ListItem",
  //           position: 4,
  //           name: `${placeData?.city?.name}`,
  //           item: `${process.env.PUBLIC_URL}/${placeData?.city?.slug}/`,
  //         },
  //         {
  //           "@type": "ListItem",
  //           position: 5,
  //           name: title,
  //           item: ogUrl,
  //         },
  //       ],
  //     },
  //     language: language,
  //   };
  // }
  // if (type === "selection" || type === "form" || type === "content") {
  //   ogUrl = `${ogUrl}/${context?.slug}/`;
  //   pageSchema = {
  //     "@context": "https://schema.org",
  //     "@type": "WebPage",
  //     headline: title,
  //     description: description,
  //     url: ogUrl,
  //     publisher: publisher,
  //     inLanguage: language,
  //   };
  // }
  return (
    <>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={logoUrl} />
      <meta property="og:locale" content={language} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />

      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </>
  );
};

export default Seo;
