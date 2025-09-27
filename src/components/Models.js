import React from "react";
import { useGlobal } from "../data/useContext";
import {
  formatBrandName,
  slugify,
  cleanModelNames,
  formatManufacturersList,
} from "../data/functions";

const Models = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Models"
  );
  let title = "";
  let shortTitle = "";
  let content = "";
  let list = [];
  let brandSlug = "";
  if (context?.type === "brand") {
    title = options?.title
      ?.replace("###", formatBrandName(context?.name))
      ?.replace("###", formatBrandName(context?.name));
    shortTitle = options?.subTitle;
    content = options?.content
      ?.replace("###", formatBrandName(context?.name))
      ?.replace("###", formatBrandName(context?.name))
      ?.replace("###", formatBrandName(context?.name));
    list = settings?.brandListType0?.filter((e) => e?.name === context?.name)[0]
      ?.models;
    brandSlug = context?.name;
  }
  if (context?.type === "model") {
    title = options?.title?.replace("###", formatBrandName(context?.brand));
    shortTitle = options?.subTitle?.replace(
      "###",
      formatBrandName(context?.brand)
    );
    content = options?.content
      ?.replace("###", formatBrandName(context?.brand))
      ?.replace("###", formatBrandName(context?.brand));
    list = settings?.brandListType0
      ?.filter((e) => e?.name === context?.brand)[0]
      ?.models?.filter((e) => slugify(e) !== slugify(context?.name));
    brandSlug = context?.brand;
  }
  if (context?.type === "code") {
    title = options?.title;
    shortTitle = options?.subTitle?.replace(
      "###",
      formatBrandName(context?.code)
    );
    content = options?.content
      ?.replace("###", context?.code)
      ?.replace("###", context?.code)
      ?.replace("##", formatManufacturersList(context?.manufacture));

    list = context?.cars
      ?.map((e) => {
        let compatible = e.split("###");
        let brand = slugify(compatible[0]);
        let slug = slugify(cleanModelNames(compatible[1]));
        let model = cleanModelNames(compatible[1]);
        if (brand === "alfa-romeo" || brand === "aston-martin") return null;
        return {
          brand: brand,
          name: formatBrandName(model),
          slug: slug,
        };
      })
      ?.filter((e) => e);
    brandSlug = context?.brand;
  }
  return (
    <section
      className={
        context?.type === "code" ? "bg-light" : context?.type === "code"
      }
    >
      <div className="container cont-space">
        <p className="subtitle">{shortTitle}</p>
        <h2>{title}</h2>
        {content && <p>{content}</p>}
        {list?.length > 40 && (
          <input
            type="text"
            id="searchInput"
            data-target="#search"
            placeholder={options?.filterText}
            className="w-100 mb-3"
          />
        )}
        <div className={`${list?.length > 40 ? "overflow-shell" : ""}`}>
          <div
            className={`overflow-scroll col-12${
              list?.length > 40 ? " h-350" : ""
            }`}
          >
            <div className="d-flex flex-wrap mb-3 gap-2 a-flex-2 pr-2 search">
              {list?.map((e, i) => {
                return (
                  <a
                    className="btx-no"
                    key={i}
                    href={
                      context?.type === "code"
                        ? `/${e?.brand}/${e?.slug}/`
                        : `/${slugify(brandSlug)}/${slugify(e)}/`
                    }
                  >
                    {context?.type === "code" ? e?.name : e}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
