import React from "react";
import { useGlobal } from "../data/useContext";

const ForSellers = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "ForSellers"
  );
  return (
    <section
      className={`${context?.type === "code" ? "bg-white" : "bg-light"}`}
    >
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
            className="btx d-flex items-center gap-3"
            href={options?.buttonTextLink}
            aria-label={options?.buttonText}
          >
            {options?.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForSellers;
