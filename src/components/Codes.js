import React from "react";
import { useGlobal } from "../data/useContext";
import { formatBrandName, slugify } from "../data/functions";

const Codes = () => {
  const { settings, context } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Codes"
  );

  let title = "";
  let shortTitle = "";
  let content = "";
  let list = [];

  if (context?.type === "index") {
    title = options?.title;
    shortTitle = options?.subTitle;
    content = options?.content;
    list = settings?.latestRapid200;
  }
  if (context?.type === "brand") {
    title = options?.title?.replace("###", formatBrandName(context?.name));
    shortTitle = options?.subTitle;
    content = options?.content
      ?.replace("###", formatBrandName(context?.name))
      ?.replace("###", formatBrandName(context?.name))
      ?.replace("###", formatBrandName(context?.name));
    list = settings?.brandListType0?.filter((e) => e?.name === context?.name)[0]
      ?.codes;
  }
  if (context?.type === "model") {
    title = options?.title
      ?.replace("###", formatBrandName(context?.brand))
      .replace("##", formatBrandName(context?.name));
    shortTitle = options?.subTitle;
    content = options?.content
      ?.replace("###", formatBrandName(context?.brand))
      ?.replace("###", formatBrandName(context?.brand))
      ?.replace("##", formatBrandName(context?.name))
      ?.replace("##", formatBrandName(context?.name));
    list = context?.codes;
  }
  if (context?.type === "code") {
    title = options?.title;
    shortTitle = options?.subTitle.replace(
      "###",
      formatBrandName(context?.code)
    );
    content = options?.content
      ?.replace("###", formatBrandName(context?.code))
      ?.replace("###", formatBrandName(context?.code));
    let brand = slugify(
      context?.cars?.map((e) => {
        let compatible = e.split("###");
        return compatible[0];
      })[0]
    );
    list = settings?.brandListType0
      ?.filter((e) => e?.name === brand)[0]
      ?.codes.slice(-50);
  }
  // console.log(options, settings, context);
  return (
    <section className="bg-white">
      <div className="container cont-space">
        <p className="subtitle">{shortTitle}</p>
        <h2>{title}</h2>
        {options?.content && <p>{content}</p>}
        {list?.length > 20 && (
          <input
            type="text"
            id="searchInput"
            data-target="#search"
            placeholder={options?.filterText}
            className="w-100 mb-3"
          />
        )}
        <div className={`${list?.length > 20 ? "overflow-shell" : ""}`}>
          <div
            className={`overflow-scroll col-12${
              list?.length > 20 ? " h-350" : ""
            }`}
          >
            <div className="d-flex flex-wrap mb-3 gap-2 a-flex pr-2 search">
              {list?.map((e, i) => {
                return (
                  <a className="btx-no" key={i} href={`/${e}/`}>
                    {e}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Codes;
