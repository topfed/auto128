import React from "react";
import { useGlobal } from "../data/useContext";

const CodesLast = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "CodesLast"
  );
  return (
    <section className="bg-light">
      <div className="container cont-space">
        <p className="subtitle">{options?.subTitle}</p>
        <h2>{options?.title?.replace("###", context?.brand)}</h2>
        {options?.content && (
          <p>
            {options?.content
              ?.replace("###", context?.brand)
              ?.replace("###", context?.brand)
              ?.replace("###", context?.brand)}
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
            style={{ width: "1200px" }}
          >
            {settings?.latestRapid200?.slice(0, 100).map((e, i) => {
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

export default CodesLast;
