import React from "react";
import { useGlobal } from "../data/useContext";

const Models = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Models"
  );
  return (
    <section className="bg-white">
      <div className="container cont-space">
        <p className="subtitle">{options?.subTitle}</p>
        <h2>
          {options?.title
            ?.replace("###", context?.brand)
            ?.replace("##", context?.name)}
        </h2>
        {options?.content && (
          <p>
            {options?.content
              ?.replace("###", context?.brand)
              ?.replace("###", context?.brand)
              ?.replace("##", context?.name)
              ?.replace("##", context?.name)}
          </p>
        )}
        <div className="overflow-scroll col-12">
          <div
            className="d-flex flex-wrap  mt-3 mb-3 gap-2"
            style={{ width: "6000px" }}
          >
            {context?.codes?.map((e, i) => {
              return (
                <a className="btx-no" key={i} href={`/${e}/`}>
                  {e}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
