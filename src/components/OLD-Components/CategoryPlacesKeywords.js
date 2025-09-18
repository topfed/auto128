import React from "react";
import { useGlobal } from "../data/useContext";
import Svg from "./Svg";

const CategoryPlacesKeywords = () => {
  const { settings, context, slugData } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "CategoryPlacesKeywords"
  );
  const category = slugData?.find(
    (e) => e?.slug === context?.category && e?.type === "category"
  );
  const city = slugData?.find(
    (e) => e?.slug === context?.city && e?.type === "city"
  );
  const keywords = slugData?.filter(
    (e) => e?.category === context?.category && e?.type === "keyword"
  );
  return (
    <section className="bg-white">
      <div className="container cont-space">
        <p className="subtitle">{options?.subTitle}</p>
        <h2>
          {options?.title
            ?.replace("###", category?.name)
            ?.replace("##", city?.name)}
        </h2>
        <p>
          {options?.shortDescription
            ?.replace("###", category?.name?.toLowerCase())
            ?.replace("##", city?.name)}
        </p>
        <div className="d-grid gap-4 mt-5">
          <div className="box-border p-0">
            <div className="d-flex justify-between items-center gap-3 p-3 h-32">
              <div className="d-flex items-center gap-3">
                <Svg name={category?.slug} width="40px" height="40px" />
                <h3 className="m-0 pr-3">{category?.name}</h3>
              </div>
            </div>
            <div className="ph-3 mb-3">
              <ul className="d-grid grid-3">
                {keywords
                  ?.sort((a, b) => b.volume - a.volume)
                  ?.map((h, u) => {
                    if (!settings?.groupedByCity[city?.slug].includes(h?.slug))
                      return null;
                    return (
                      <li key={u}>
                        <a
                          href={`/${h?.slug}/${city?.slug}/`}
                          className="pv-1 block"
                        >
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

export default CategoryPlacesKeywords;
