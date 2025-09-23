import React from "react";
import { useGlobal } from "../data/useContext";
import { formatBrandName } from "../data/functions";

const Hero = () => {
  const { settings, context, pages } = useGlobal();
  const type = context?.type || "index";
  const slug = context?.slug || "/";
  const data = pages?.find((e) => e?.slug === slug);
  const brandData = {};
  const modelData = {};
  const codeData = {};

  if (type === "brand") {
    brandData.titleHero = settings["brand"][0]?.titleHero?.replace(
      "###",
      formatBrandName(context?.brand)
    );
    brandData.subTitleHero = settings["brand"][0]?.subTitleHero?.replace(
      "###",
      formatBrandName(context?.brand)
    );
  }

  if (type === "model") {
    modelData.titleHero = settings["model"][0]?.titleHero
      ?.replace("###", formatBrandName(context?.brand))
      ?.replace("##", formatBrandName(context?.name));
    modelData.subTitleHero = settings["model"][0]?.subTitleHero
      ?.replace("###", formatBrandName(context?.brand))
      ?.replace("##", formatBrandName(context?.name));
  }

  if (type === "code") {
    codeData.titleHero = settings["code"][0]?.titleHero?.replace(
      "###",
      context?.code
    );
    codeData.subTitleHero = settings["code"][0]?.subTitleHero
      ?.replace("###", 2)
      ?.replace("##", "$49");
  }

  return (
    <section className="hero d-flex justify-center">
      <div className="wrap">
        <h1
          dangerouslySetInnerHTML={{
            __html:
              codeData.titleHero ||
              brandData.titleHero ||
              modelData.titleHero ||
              data?.title,
          }}
        />
        <p>
          {codeData.subTitleHero ||
            brandData.subTitleHero ||
            modelData.subTitleHero ||
            data?.shortContent}
        </p>
      </div>
    </section>
  );
};

export default Hero;
