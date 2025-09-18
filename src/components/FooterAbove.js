import React from "react";
import { useGlobal } from "../data/useContext";

const FooterAbove = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "FooterAbove"
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
        <div className="d-flex mt-5 justify-center">
          <a
            className="btx d-flex justify-center items-center gap-3 rounded-full"
            href="/become-a-seller/"
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
