import React from "react";
import { useGlobal } from "../data/useContext";
import { formatBrandName, slugify } from "../data/functions";

const Brands = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Brands"
  );
  let brands = settings?.brandListType0;
  if (context?.type === "brand") {
    brands = brands?.filter((e) => e.name !== context?.name);
  }
  return (
    <section
      className={`${context?.type === "index" ? "bg-white" : "bg-light"}`}
    >
      <div className="container cont-space">
        <p className="subtitle">{options?.subTitle}</p>
        <h2>
          {options?.title?.replace("###", formatBrandName(context?.brand))}
        </h2>
        {options?.content && (
          <p>
            {options?.content
              ?.replace("###", formatBrandName(context?.name))
              ?.replace("###", formatBrandName(context?.name))
              ?.replace("###", formatBrandName(context?.name))}
          </p>
        )}
        <div className="col-12">
          <div className="d-flex flex-wrap mb-3 gap-2 a-flex search">
            {brands?.map((e, i) => {
              return (
                <a className="btx-no" key={i} href={`/${slugify(e?.name)}/`}>
                  {formatBrandName(e?.name)}
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
