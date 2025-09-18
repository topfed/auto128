import React from "react";
import { useGlobal } from "../data/useContext";

const Faq = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find((e) => e?.id === "Faq");
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
        {options?.list?.map((e, i) => {
          return (
            <div className="box-border mb-3 p-0 mt-5" key={i}>
              <input
                type="checkbox"
                id={`toggle-${i}`}
                className="d-none"
                defaultChecked={i === 0}
              />
              <label
                htmlFor={`toggle-${i}`}
                className="d-flex justify-between items-center gap-3 cursor-link p-3"
              >
                <h4 className="m-0 pr-3">{e?.title}</h4>
                <svg width="24px" height="24px" className="arrow">
                  <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"></path>
                </svg>
              </label>
              <div className="accordion">
                {e?.content?.split("###")[0] && (
                  <p className="mt-3 ph-3">{e?.content?.split("###")[0]}</p>
                )}
                {e?.content?.split("###")[1] && (
                  <p className="ph-3">{e?.content?.split("###")[1]}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
