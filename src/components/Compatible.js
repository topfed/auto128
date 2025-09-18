import React from "react";
import { useGlobal } from "../data/useContext";
import { groupBrandsAlphabetically, slugify } from "../data/functions";

const Compatible = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Compatible"
  );
  const brands = groupBrandsAlphabetically(
    settings?.catalog?.brands?.map((e) => e?.name)
  );

  return (
    <section className="bg-white">
      <div className="container cont-space">
        <p className="subtitle">{options?.subTitle}</p>
        <h2>{options?.title}</h2>
        {options?.content?.split("###")[0] && (
          <p>{options?.content?.split("###")[0]}</p>
        )}
        {options?.content?.split("###")[1] && (
          <p>{options?.content?.split("###")[1]}</p>
        )}
        <div className="d-grid grid-3 gap-4 mt-5">
          {brands?.map((e, i) => {
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
                  aria-label={e?.label}
                >
                  <div className="d-flex items-center gap-3">
                    {/* <Svg name={e?.slug} width="32px" height="32px" /> */}
                    <h3 className="m-0 pr-3">[{e?.label?.toUpperCase()}]</h3>
                  </div>
                  <svg width="24px" height="24px" className="mobile-only arrow">
                    <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"></path>
                  </svg>
                </label>
                <div className="accordion accordion-m">
                  {/* {e?.shortContent && (
                      <p className="ph-3">{e?.shortContent}</p>
                    )} */}
                  <ul className="ph-3 mb-3">
                    {e?.items?.map((h, u) => {
                      return (
                        <li key={u}>
                          <a href={`/${slugify(h)}/`} className="pv-1 block">
                            {h}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  {/* <a className="ph-3 mt-1 mb-3 block" href={`/${e?.slug}/`}>
                      {options?.buttonText?.replace("###", e?.name)}
                    </a> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Compatible;
