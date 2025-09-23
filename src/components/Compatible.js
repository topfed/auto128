import React from "react";
import { useGlobal } from "../data/useContext";
import {
  groupBrandsAlphabetically,
  slugify,
  formatBrandName,
  formatManufacturersList,
} from "../data/functions";

const Compatible = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Compatible"
  );
  const brands = groupBrandsAlphabetically(
    settings?.catalog?.brands?.map((e) => e?.name)
  );

  return (
    <section className="bg-light">
      <div className="container cont-space">
        <p className="subtitle">{options?.subTitle}</p>
        <h2>
          {options?.title?.replace("###", formatBrandName(context?.code))}
        </h2>
        {options?.content && (
          <p>
            {options?.content
              ?.replace("###", context?.code)
              ?.replace("###", context?.code)
              ?.replace("##", formatManufacturersList(context?.manufacture))}
          </p>
        )}
        <div className="d-flex flex-wrap mt-3 mb-3 gap-2">
          {context?.cars?.map((e, i) => {
            return (
              <a key={i} href={`/${e}/`}>
                {formatBrandName(e?.replace("###", " "))}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Compatible;
