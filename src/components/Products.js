import React from "react";
import { useGlobal } from "../data/useContext";
import { formatBrandName, slugify } from "../data/functions";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Products = () => {
  const { settings, context } = useGlobal();
  const option = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Products"
  );
  const brandPublic = settings?.brandListType0?.map((e) => e?.name);
  const manufacture = context?.manufacture?.filter((e) =>
    brandPublic.includes(slugify(e))
  );
  return (
    <section className="bg-white">
      <div className="container cont-space">
        {manufacture?.length > 0 && (
          <p className="d-flex justify-center gap-1 text-14">
            {option?.madeBy}
            <strong>
              {manufacture?.map((e, i) => {
                const isLast = i === manufacture.length - 1;
                return (
                  <a key={i} href={`/${slugify(e)}/`}>
                    {formatBrandName(e)}
                    {!isLast && ", "}
                  </a>
                );
              })}
            </strong>
          </p>
        )}
        <h2 className="text-center">
          {option?.title?.replace("###", context?.code)}
        </h2>
        <div className="italic text-center mb-3 text-14">
          {`${option?.updatedText} ${dayjs(context?.update).fromNow()}`}
        </div>
        <ul className="d-flex justify-center flex-wrap gap-4 mb-3">
          <li className="d-flex gap-1 ">
            <svg aria-hidden="true" viewBox="0 0 24 24" width="20px">
              <path
                className="fill-red"
                d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
              ></path>
            </svg>
            {option?.checkTitle1}
          </li>
          <li className="d-flex gap-1">
            <svg aria-hidden="true" viewBox="0 0 24 24" width="20px">
              <path
                className="fill-red"
                d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
              ></path>
            </svg>
            {option?.checkTitle2}
          </li>
          <li className="d-flex gap-1">
            <svg aria-hidden="true" viewBox="0 0 24 24" width="20px">
              <path
                className="fill-red"
                d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
              ></path>
            </svg>
            {option?.checkTitle3}
          </li>
        </ul>
        <p
          dangerouslySetInnerHTML={{
            __html: context?.content || "",
          }}
        />
        <div className="mt-5 pv-3 text-center">
          <h3
            className="mt-3"
            dangerouslySetInnerHTML={{
              __html: settings["code"][0]?.subTitleHeroNo || "",
            }}
          />
          <p
            className="mt-3"
            dangerouslySetInnerHTML={{
              __html:
                option?.notAvalaible1?.replace("###", context?.code) || "",
            }}
          />
          <p
            className="mt-3 mb-5"
            dangerouslySetInnerHTML={{
              __html:
                option?.notAvalaible2?.replace("###", context?.code) || "",
            }}
          />
          <a
            className="btx d-flex justify-center items-center gap-3"
            href={option?.becomeSellerLink}
            aria-label={option?.becomeSeller}
          >
            {option?.becomeSeller}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
