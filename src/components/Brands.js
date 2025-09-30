import React from "react";
import { useGlobal } from "../data/useContext";
import Image from "./Sections/Image";
import { formatBrandName, slugify } from "../data/functions";

const Brands = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Brands"
  );
  let brands = settings?.brandListType0;
  let group = 0;
  let contentBasic = {};
  if (context?.type === "brand") {
    group = brands?.filter((e) => e.name === context?.name)[0].group;
    brands = brands?.filter(
      (e) => e.name !== context?.name && e.group === group
    );
    contentBasic.title = context?.brand;
    contentBasic.shortTitle = options?.subTitle;
    contentBasic.content = options?.content
      ?.replace("###", formatBrandName(context?.name))
      ?.replace("###", formatBrandName(context?.name));
  }
  if (context?.type === "model") {
    group = brands?.filter((e) => e.name === context?.brand)[0].group;
    brands = brands?.filter(
      (e) => e.name !== context?.name && e.group === group
    );
    contentBasic.title = context?.brand;
    contentBasic.shortTitle = options?.subTitle;
    contentBasic.content = options?.content
      ?.replace("###", formatBrandName(context?.brand + " " + context?.name))
      ?.replace("###", formatBrandName(context?.brand + " " + context?.name));
  }
  if (context?.type === "code") {
    let manufacture = context?.manufacture?.map((e, i) => slugify(e));
    group = brands?.filter((e) => manufacture.includes(e?.name))[0]?.group;
    brands = brands?.filter(
      (e) => e.name !== context?.name && e.group === group
    );
    contentBasic.title = context?.brand;
    contentBasic.shortTitle = options?.subTitle;
    contentBasic.content = options?.content;
  }
  if (brands?.length === 0) return null;
  return (
    <section
      className={`${
        context?.type === "index" ||
        context?.type === "model" ||
        context?.type === "code"
          ? "bg-white"
          : "bg-light"
      }`}
    >
      <div className="container cont-space">
        <p className="subtitle text-center">{options?.subTitle}</p>
        <h2 className="text-center">
          {options?.title?.replace("###", formatBrandName(context?.brand))}
        </h2>
        {options?.content && (
          <p className="text-center">
            {contentBasic?.content || options?.content}
          </p>
        )}
        <div className="col-12 clip">
          <input id="t" type="checkbox" />
          <div
            className={`d-grid ${
              brands?.length > 10 ? `grid-8` : `grid-4`
            } mb-3 mt-5 gap-2 ${brands?.length > 20 ? `contentClip` : ``} ${
              brands?.length > 20 ? `endGrad` : ``
            }`}
          >
            {brands?.map((e, i) => {
              return (
                <a
                  className="box-brand pv-3"
                  key={i}
                  href={`/${slugify(e?.name)}/`}
                  aria-label={formatBrandName(e?.name)}
                >
                  <Image
                    data={{
                      src: `/brands/${slugify(e?.name)}.svg`,
                      width: "48px",
                      height: "48px",
                      alt: `${formatBrandName(e?.name)}`,
                      loading: "lazy",
                      fetchpriority: "low",
                      local: true,
                    }}
                  />
                </a>
              );
            })}
          </div>
          {brands?.length > 20 && (
            <label htmlFor="t" className="italic">
              {options?.buttonText}
            </label>
          )}
        </div>
      </div>
    </section>
  );
};

export default Brands;
