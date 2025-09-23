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
  let placeData = {};
  const brandData = {};
  const modelData = {};
  const codeData = {};

  if (type === "brand") {
    brandData.titleSEO = data?.settings["brand"][0]?.titleSEO?.replace(
      "###",
      formatBrandName(context?.brand)
    );
    brandData.descSEO = data?.settings["brand"][0]?.descSEO
      ?.replace("###", formatBrandName(context?.brand))
      ?.replace("###", formatBrandName(context?.brand));
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

  if (type === "place") {
    const optionsPlace = (data?.settings[context?.type] || [])?.find(
      (e) => e?.id === "Places"
    );
    placeData.keyword = data?.slugData?.find(
      (e) => e?.slug === context?.keyword
    );
    placeData.city = data?.slugData?.find((e) => e?.slug === context?.city);
    placeData.category = data?.slugData?.find(
      (e) => e?.slug === placeData?.keyword?.category
    );
    placeData.title = optionsPlace?.titleSEO
      ?.replace("####", placeData?.keyword?.name)
      ?.replace("###", placeData?.city?.name)
      ?.replace("##", context?.places?.length)
      ?.replace(
        "#",
        new Date(context?.update).toLocaleString("en-GB", {
          month: "long",
          year: "numeric",
        })
      );
    placeData.description = optionsPlace?.descSEO
      ?.replace("###", placeData?.keyword?.name?.toLowerCase())
      ?.replace("##", placeData?.city?.name)
      ?.replace("#", placeData?.keyword?.single?.toLowerCase());
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

  // const shortTitle = slugData?.title.replace(/<[^>]*>/g, "");
  // const publisher = {
  //   "@type": "Organization",
  //   name: siteName,
  //   url: ogUrl,
  //   logo: {
  //     "@type": "ImageObject",
  //     url: logoUrl,
  //     width: 512,
  //     height: 512,
  //   },
  //   contactPoint: {
  //     "@type": "ContactPoint",
  //     telephone: "+44-20-3807-8434",
  //     email: "info@auto128.uk",
  //     contactType: "Customer Support",
  //     areaServed: "GB",
  //     availableLanguage: ["English"],
  //   },
  // };

  // if (type === "index") {
  //   pageSchema = {
  //     "@context": "https://schema.org",
  //     "@type": "WebSite",
  //     name: siteName,
  //     url: ogUrl,
  //     publisher: publisher,
  //     inLanguage: language,
  //   };
  // }
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
      {pageSchema && (
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
      )}
    </>
  );
};

export default Seo;
