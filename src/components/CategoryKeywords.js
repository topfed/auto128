import React from "react";
import { useGlobal } from "../data/useContext";
import Svg from "./Svg";

const CategoryKeywords = () => {
  const { settings, context, slugData } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "CategoryKeywords"
  );
  const single = slugData?.find(
    (e) => e?.slug === context?.slug && e?.type === "category"
  );
  const list = slugData?.filter(
    (e) => e?.category === context?.slug && e?.type === "keyword"
  );
  return (
    <section className="bg-white">
      <div className="container cont-space">
        <p className="subtitle">{options?.subTitle}</p>
        <h2>{options?.title?.replace("###", single?.name)}</h2>
        {single?.content?.split("###")[0] && (
          <p>{single?.content?.split("###")[0]}</p>
        )}
        {single?.content?.split("###")[1] && (
          <p>{single?.content?.split("###")[1]}</p>
        )}
        <div className="d-grid gap-4 mt-5">
          <div className="box-border p-0">
            <div className="d-flex justify-between items-center gap-3 p-3 h-32">
              <div className="d-flex items-center gap-3">
                <Svg name={single?.slug} width="40px" height="40px" />
                <h3 className="m-0 pr-3">{single?.name}</h3>
              </div>
            </div>
            <div className="ph-3 mb-3">
              <ul className="d-grid grid-3">
                {list
                  ?.sort((a, b) => b.volume - a.volume)
                  ?.map((h, u) => {
                    return (
                      <li key={u}>
                        <a href={`/${h?.slug}/`} className="pv-1 block">
                          {h?.name}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryKeywords;
