import React from "react";
import { useGlobal } from "../data/useContext";
import Image from "./Sections/Image";
import { formatBrandName, slugify } from "../data/functions";

const Hero = () => {
  const { settings, context, pages } = useGlobal();
  const options = settings["hero"] || {};
  const type = context?.type || "index";
  const slug = context?.slug || "/";
  const data = pages?.find((e) => e?.slug === slug);
  const brandData = {};
  const modelData = {};
  const codeData = {};
  let brandImages = [];
  let displayButton = false;
  let topImage = false;
  if (type === "index") {
    displayButton = true;
  }

  if (type === "brand") {
    brandData.titleHero = settings["brand"][0]?.titleHero?.replace(
      "###",
      formatBrandName(context?.name)
    );
    brandData.subTitleHero = settings["brand"][0]?.subTitleHero?.replace(
      "###",
      formatBrandName(context?.name)
    );
    topImage = context?.name;
  }
  if (type === "model") {
    modelData.titleHero = settings["model"][0]?.titleHero
      ?.replace("###", formatBrandName(context?.brand))
      ?.replace("##", formatBrandName(context?.name));
    modelData.subTitleHero = settings["model"][0]?.subTitleHero
      ?.replace("###", formatBrandName(context?.brand))
      ?.replace("##", formatBrandName(context?.name));
    topImage = context?.brand;
  }
  if (type === "code") {
    codeData.titleHero = settings["code"][0]?.titleHero?.replace(
      "###",
      context?.code
    );
    if (context?.products?.length > 0) {
      codeData.subTitleHero = settings["code"][0]?.subTitleHero
        ?.replace("###", 0)
        ?.replace("##", "$49");
    } else {
      codeData.subTitleHero = settings["code"][0]?.subTitleHeroNo;
    }
    const brandPublic = settings?.brandListType0?.map((e) => e?.name);
    brandImages = context?.manufacture
      ?.filter((e) => brandPublic.includes(slugify(e)))
      ?.map((e) => slugify(e));
    console.log(brandImages);
  }

  return (
    <section className="hero d-flex justify-center">
      <div className="wrap">
        {brandImages?.length > 0 && (
          <div className="d-flex justify-center mb-3 fade-in delay-0 gap-3">
            {brandImages?.map((e, i) => {
              return (
                <Image
                  data={{
                    src: `/white/${e}.svg`,
                    width:
                      brandImages?.length === 1
                        ? "80"
                        : brandImages?.length === 2
                        ? "60px"
                        : brandImages?.length > 3
                        ? "40px"
                        : "30px",
                    height:
                      brandImages?.length === 1
                        ? "80"
                        : brandImages?.length === 2
                        ? "60px"
                        : brandImages?.length > 3
                        ? "40px"
                        : "30px",
                    alt: `${e}`,
                    loading: "eager",
                    fetchpriority: "async",
                    local: true,
                  }}
                />
              );
            })}
          </div>
        )}
        {topImage && (
          <div className="d-flex justify-center mb-3 fade-in delay-0">
            <Image
              data={{
                src: `/white/${topImage}.svg`,
                width: "80px",
                height: "80px",
                alt: `${topImage}`,
                loading: "eager",
                fetchpriority: "async",
                local: true,
              }}
            />
          </div>
        )}
        <h1
          className="fade-in delay-0"
          dangerouslySetInnerHTML={{
            __html:
              codeData.titleHero ||
              brandData.titleHero ||
              modelData.titleHero ||
              data?.title,
          }}
        />
        <p className="fade-in delay-500">
          {codeData.subTitleHero ||
            brandData.subTitleHero ||
            modelData.subTitleHero ||
            data?.shortContent}
        </p>
        {displayButton && (
          <>
            <div className="d-flex mt-3 justify-center fade-in delay-1000">
              <a
                className="btx d-flex justify-center items-center gap-3"
                href={options?.buttonTextLink}
                aria-label={options?.buttonText}
              >
                {options?.buttonText}
              </a>
            </div>
            <p className="mt-4 text-14 italic font-light fade-in delay-1000">
              {options?.buttonSubText}
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
