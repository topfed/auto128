import React from "react";
import { useGlobal } from "../data/useContext";
import { formatBrandName, slugify } from "../data/functions";

const Brands = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Brands"
  );
  let brands =
    context?.type === "brand"
      ? context?.models?.map((e) => e)
      : settings?.brandListType0;

  return (
    <section className="bg-white">
      <div className="container cont-space">
        <p className="subtitle">{options?.subTitle}</p>
        <h2>
          {options?.title?.replace("###", formatBrandName(context?.brand))}
        </h2>
        {options?.content && (
          <p>
            {options?.content
              ?.replace("###", formatBrandName(context?.brand))
              ?.replace("###", formatBrandName(context?.brand))
              ?.replace("###", formatBrandName(context?.brand))}
          </p>
        )}
        <input
          type="text"
          id="searchInput"
          placeholder={options?.filterText}
          className="mobile-only w-100"
        />
        <div className="overflow-scroll col-12">
          <div
            className="d-flex flex-wrap mt-3 mb-3 gap-2"
            style={{ width: "3000px" }}
          >
            {brands?.map((e, i) => {
              return (
                <a
                  className="btx-no"
                  key={i}
                  href={
                    context?.type === "brand"
                      ? `/${context?.brandSlug}/${slugify(e)}/`
                      : `/${slugify(e)}/`
                  }
                >
                  {formatBrandName(e)}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
