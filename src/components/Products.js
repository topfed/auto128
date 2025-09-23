import React from "react";
import { useGlobal } from "../data/useContext";

const Products = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Products"
  );
  return (
    <section className="bg-light">
      <div className="container cont-space">
        <p className="subtitle">{options?.subTitle}</p>
        <h2>{options?.title}</h2>
        {options?.content && (
          <p>
            {options?.content
              ?.replace("###", context?.brand)
              ?.replace("###", context?.brand)
              ?.replace("###", context?.brand)}
          </p>
        )}
        <div className="d-flex flex-wrap mt-5 gap-2">
          {settings?.catalog?.codesData?.slice(0, 100).map((e, i) => {
            return (
              <a className="btx-no" key={i} href={`/${e?.code}/`}>
                {e?.code}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
