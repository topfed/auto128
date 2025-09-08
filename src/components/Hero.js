import React from "react";
import { useGlobal } from "../data/useContext";
import Svg from "./Svg";

const Hero = () => {
  const { settings, context, slugData } = useGlobal();
  const options = settings["hero"] || {};
  const optionsPlace = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Places"
  );
  const optionsCategoryPlace = (settings[context?.type] || [])?.find(
    (e) => e?.id === "CategoryPlace"
  );
  const type = context?.type || "index";
  const slug = context?.slug || "/";
  const data = slugData?.find((e) => e?.slug === slug);
  const placeData = {};
  const categoryPlaceData = {};

  if (type === "categoryPlace") {
    categoryPlaceData.city = slugData?.find((e) => e?.slug === context?.city);
    categoryPlaceData.category = slugData?.find(
      (e) => e?.slug === context?.category
    );
    categoryPlaceData.title = optionsCategoryPlace?.titleHero
      ?.replace("###", categoryPlaceData?.category?.name)
      ?.replace("##", categoryPlaceData?.city?.name);
    categoryPlaceData.subTitle = optionsCategoryPlace?.subtitleHero
      ?.replace("###", categoryPlaceData?.category?.name)
      ?.replace("##", categoryPlaceData?.city?.name);
  }

  if (type === "place") {
    placeData.keyword = slugData?.find((e) => e?.slug === context?.keyword);
    placeData.city = slugData?.find((e) => e?.slug === context?.city);
    placeData.category = slugData?.find(
      (e) => e?.slug === placeData?.keyword?.category
    );
    placeData.title = optionsPlace?.titleHero
      ?.replace("###", placeData?.keyword?.name)
      ?.replace("##", placeData?.city?.name);
  }
  return (
    <section className="hero d-flex justify-center">
      {/* <Image data={options?.heroImg} /> */}
      {/* <div className="bg"></div> */}
      <div className="wrap">
        <h1
          dangerouslySetInnerHTML={{
            __html: placeData?.title || categoryPlaceData?.title || data?.title,
          }}
        />
        {type !== "place" && (
          <p>{categoryPlaceData?.subTitle || data?.shortContent}</p>
        )}
        {type === "place" && (
          <p className="d-flex justify-center gap-1">
            {context?.places?.length * 5 +
              placeData?.keyword?.name?.length -
              placeData?.city?.name?.length}{" "}
            {optionsPlace?.crumbHero1}
            <svg width="20px" height="20px">
              <path
                fill="#ffffff"
                d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"
              ></path>
            </svg>
            {context?.places?.length} {optionsPlace?.crumbHero2}
          </p>
        )}
        {(type === "index" || type === "category" || type === "category") && (
          <div className="d-flex justify-center mt-3">
            <a
              className="btx d-flex justify-center items-center gap-3 rounded-full"
              href="tel:+442038078434"
              aria-label={options?.buttonText}
            >
              <Svg name="Phone" width="32px" height="32px" />
              {options?.buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
