import React from "react";
import { useGlobal } from "../data/useContext";
import Image from "./Sections/Image";

const Source = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Source"
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
        <div className="d-grid grid-4 gap-4 mt-5">
          {options?.list?.map((e, i) => {
            return (
              <div
                className="ph-5 mb-4 d-flex justify-center items-center"
                key={i}
              >
                <a
                  href={e?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={e?.alt}
                >
                  <Image data={e?.img} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Source;
