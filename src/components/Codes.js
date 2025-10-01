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
  let content2 = "";
  let list = [];

  if (context?.type === "index") {
    title = options?.title;
    shortTitle = options?.subTitle;
    content = options?.content;
    list = settings?.latestRapid200?.slice(-50);
  }
  if (context?.type === "brand") {
    title = options?.title?.replace("###", formatBrandName(context?.name));
    shortTitle = options?.subTitle;
    content = options?.content
      ?.replace("###", formatBrandName(context?.name))
      ?.replace("###", formatBrandName(context?.name))
      ?.replace("###", formatBrandName(context?.name));
    list = settings?.brandListType0
      ?.filter((e) => e?.name === context?.name)[0]
      ?.codes?.slice(-50);
  }
  if (context?.type === "model") {
    console.log(context);
    title = options?.title
      ?.replace("###", formatBrandName(context?.brand))
      .replace("##", formatBrandName(context?.name));
    shortTitle = options?.subTitle;
    content2 = context?.content;
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
  if (list?.length === 0) return null;
  return (
    <section
      className={`${context?.type !== "code" ? "bg-white" : "bg-light"}`}
    >
      <div className="container cont-space">
        <p className="subtitle">{shortTitle}</p>
        <h2>{title}</h2>

        {context?.content && (
          <p
            className="mt-3"
            dangerouslySetInnerHTML={{
              __html: content2 || "",
            }}
          />
        )}
        {options?.content && <p>{content}</p>}

        <div className="d-flex flex-wrap mt-5 mb-3 gap-2 a-flex pr-2 search">
          {list?.map((e, i) => {
            return (
              <a className="btx-no" key={i} href={`/${e}/`}>
                <span className="text-14">{e}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Codes;
