import React from "react";
import { useGlobal } from "../data/useContext";
import Svg from "./Svg";

const CityKeywords = () => {
  const { settings, context, slugData } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "CityKeywords"
  );
  const single = slugData?.find(
    (e) => e?.slug === context?.slug && e?.type === "city"
  );
  const list = slugData?.filter((e) => e?.type === "category");
  const keywords = slugData?.filter((e) => e?.type === "keyword");
  return (
    <section className="bg-white">
      <div className="container cont-space">
        <p className="subtitle">{options?.subTitle}</p>
        <h2>{options?.title.replace("###", single?.name)}</h2>
        {single?.content?.split("###")[0] && (
          <p>{single?.content?.split("###")[0]}</p>
        )}
        {single?.content?.split("###")[1] && (
          <p>{single?.content?.split("###")[1]}</p>
        )}
        <div className="d-grid grid-3 gap-4 mt-5">
          {list
            ?.sort((a, b) => a.volume - b.volume)
            ?.map((e, i) => {
              return (
                <div className="box-border p-0" key={i}>
                  <input
                    type="checkbox"
                    id={`toggle-${i}`}
                    className="d-none"
                    defaultChecked={i === 0}
                  />
                  <label
                    htmlFor={`toggle-${i}`}
                    className="d-flex justify-between items-center gap-3 p-3 h-32"
                    aria-label={e?.name}
                  >
                    <div className="d-flex items-center gap-3">
                      <Svg name={e?.slug} width="32px" height="32px" />
                      <h3 className="m-0 pr-3">{e?.name}</h3>
                    </div>
                    <svg width="24px" height="24px" className="mobile-only">
                      <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"></path>
                    </svg>
                  </label>

                  <div className="accordion accordion-m">
                    {e?.shortContent && (
                      <p className="ph-3">{e?.shortContent}</p>
                    )}
                    <ul className="ph-3">
                      {keywords
                        ?.filter((f) => f?.category === e?.slug)
                        ?.sort((a, b) => b.volume - a.volume)
                        ?.slice(0, 10)
                        ?.map((h, u) => {
                          if (
                            !settings?.groupedByCity[single?.slug].includes(
                              h?.slug
                            )
                          )
                            return null;
                          return (
                            <li key={u}>
                              <a
                                href={`/${h?.slug}/${single?.slug}/`}
                                className="pv-1 block"
                              >
                                {h?.name}
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                    <a
                      className="ph-3 mt-1 mb-3 block"
                      href={`/${e?.slug}/${single?.slug}/`}
                    >
                      {options?.buttonText?.replace("###", e?.name)}
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default CityKeywords;
