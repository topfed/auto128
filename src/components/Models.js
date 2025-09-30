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
    list = settings?.brandListType0
      ?.filter((e) => e?.name === context?.name)[0]
      ?.models?.slice() // make a shallow copy so you don’t mutate original
      ?.sort((a, b) => a.localeCompare(b));
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
        let model = compatible[1];
        if (
          brand === "alfa-romeo" ||
          brand === "aston-martin" ||
          brand === "land-rover"
        )
          return null;
        return {
          brand: brand,
          name: `${brand} ${model}`,
          slug: slug,
        };
      })
      ?.filter((e) => e)
      ?.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (list?.length === 0) return null;
  return (
    <section
      className={
        context?.type === "code" || context?.type === "model"
          ? "bg-light"
          : context?.type === "code"
      }
    >
      <div className="container cont-space">
        <p className="subtitle text-center">{shortTitle}</p>
        <h2 className="text-center">{title}</h2>
        {content && (
          <p
            className="text-center"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        )}

        <div className="col-12 clip">
          <input id="t" type="checkbox" />

          <div
            className={`d-flex ${
              context?.type === "code" ? `flex-col` : `flex-wrap`
            } mb-3 mt-5 ${context?.type === "code" ? `` : `gap-2`} ${
              context?.type === "code" ? `` : `a-flex-2`
            } ${list?.length > 20 ? `contentClip` : ``} ${
              context?.type === "model" ? `endGrad2` : ``
            } ${context?.type === "code" ? `endGrad2` : ``}`}
          >
            {list?.map((e, i) => {
              return (
                <a
                  className={`btx-no ${context?.type === "code" ? "bb" : ``}`}
                  key={i}
                  href={
                    context?.type === "code"
                      ? `/${e?.brand}/${e?.slug}/`
                      : `/${slugify(brandSlug)}/${slugify(e)}/`
                  }
                >
                  {formatBrandName(context?.type === "code" ? e?.name : e)}
                </a>
              );
            })}
          </div>
          {list?.length > 20 && (
            <label htmlFor="t" className="italic">
              {options?.buttonText}
            </label>
          )}
        </div>
      </div>
    </section>
  );
};

export default Models;
