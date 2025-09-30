import React from "react";
import { useGlobal } from "../data/useContext";
import Svg from "./Svg";

const WhyUs = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "WhyUs"
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
        <div className="d-grid grid-2 gap-4 mt-5 content">
          {options?.list?.map((e, i) => {
            return (
              <div className="d-flex items-start" key={i}>
                <div>
                  <Svg name={e?.src} width="40px" height="40px" />
                </div>
                <div className="d-flex flex-col pl-3">
                  <h3>{e?.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: e?.content }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
