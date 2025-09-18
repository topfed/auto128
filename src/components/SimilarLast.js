import React from "react";
import { useGlobal } from "../data/useContext";

const SimilarLast = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "SimilarLast"
  );
  return (
    <section className="bg-light">
      <div className="container cont-space">
        <p className="subtitle">{options?.subTitle}</p>
        <h2>{options?.title}</h2>
        {options?.content?.split("###")[0] && (
          <p>{options?.content?.split("###")[0]}</p>
        )}
        {options?.content?.split("###")[1] && (
          <p>{options?.content?.split("###")[1]}</p>
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

export default SimilarLast;
