import React from "react";
import { useGlobal } from "../data/useContext";

const FooterAbove = () => {
  const { settings, context } = useGlobal();
  const options = settings["footerAbove"] || {};
  if (context?.slug === "selection-process") return null;
  if (context?.type === "content" || context?.type === "form") return null;
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
        <div className="d-flex mt-5">
          <a
            className="italic inColor underline"
            href={options?.buttonLink}
            aria-label={options?.buttonText}
          >
            {options?.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterAbove;
