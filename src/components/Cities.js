import React from "react";
import { useGlobal } from "../data/useContext";

const Cities = () => {
  const { settings, context, cities } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Cities"
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
          {cities
            ?.sort((a, b) => a.volume - b.volume)
            ?.map((e, i) => {
              return (
                <a className="btx-no" key={i} href={`/${e?.slug}/`}>
                  {e?.name}
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Cities;
