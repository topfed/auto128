import React from "react";
import { useGlobal } from "../data/useContext";
import {
  productDescription,
  formatBrandName,
  formatManufacturersList,
  slugify,
} from "../data/functions";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Svg from "./Svg";
dayjs.extend(relativeTime);

const Code = () => {
  const { settings, context } = useGlobal();

  // console.log("=====", settings);
  // console.log("=====", context);

  const option = (settings[context?.type] || [])?.find((e) => e?.id === "Code");

  console.log("=====", option);
  console.log("=====", context);
  // const keyword = slugData?.find(
  //   (e) => e?.slug === context?.keyword && e?.type === `keyword`
  // );
  // const city = slugData?.find(
  //   (e) => e?.slug === context?.city && e?.type === `city`
  // );
  // const category = slugData?.find(
  //   (e) => e?.slug === keyword?.category && e?.type === `category`
  // );
  // const searchWord = `${keyword?.slug?.replace("-", "+")}+${city?.slug}+uk`;

  return (
    <section className="bg-white">
      <div className="container cont-space">
        <p className="d-flex justify-center gap-1 text-14">
          Made by
          <strong>
            {context?.manufacture?.map((e, i) => {
              const isLast = i === context.manufacture.length - 1;
              return (
                <a
                  key={i}
                  href={
                    context?.type === "brand"
                      ? `/${context?.brandSlug}/${slugify(e)}/`
                      : `/${slugify(e)}/`
                  }
                >
                  {formatBrandName(e)}
                  {!isLast && ", "}
                </a>
              );
            })}
          </strong>
        </p>
        <h2 className="text-center">
          {option?.title?.replace("###", context?.code)}
        </h2>
        <div className="italic text-center mb-3 text-14">
          {`Updated ${dayjs(context?.update).fromNow()}`}
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
        {/* <p className="text-center mb-4">{context?.content || "Comming Soon"}</p> */}
        <p className="text-center mb-4">
          The OEM auto part with code 000047 is a vital component known as a
          fuel pump. This part is responsible for delivering fuel from the tank
          to the engine, ensuring that the vehicle runs smoothly. It plays a
          crucial role in maintaining the correct pressure and flow of fuel,
          which is essential for optimal engine performance. Without a properly
          functioning fuel pump, a vehicle may experience a variety of issues,
          including difficulty starting, engine sputtering, or even stalling
          while driving. These symptoms can be particularly noticeable when the
          vehicle is under load, such as during acceleration or climbing hills.
        </p>
        <p className="text-center mb-4">
          Common signs of a failing fuel pump include a whining noise from the
          fuel tank, decreased fuel efficiency, and a noticeable loss of power.
          Regular maintenance, such as keeping the fuel tank at least a quarter
          full, can help prolong the life of the fuel pump. Installation of a
          new fuel pump typically requires some mechanical knowledge, as it
          involves accessing the fuel tank and handling fuel lines. It is
          advisable to follow the vehicle's service manual for specific
          instructions and safety precautions.
        </p>
        <p className="subtitle">Local Sellers</p>
        <h2>Sellers Near You</h2>
        {context?.content && (
          <p>
            No local sellers found for this code.
            {/* {context?.content
              ?.replace("###", context?.brand)
              ?.replace("###", context?.brand)
              ?.replace("###", context?.brand)} */}
          </p>
        )}
        <p className="subtitle">Local Sellers</p>
        <h2>Sellers Near You</h2>
        {context?.content && (
          <p>
            No local sellers found for this code.
            {/* {context?.content
              ?.replace("###", context?.brand)
              ?.replace("###", context?.brand)
              ?.replace("###", context?.brand)} */}
          </p>
        )}
        {/* {
      id: `Products`,
      title: "Sellers Near You",
      subTitle: "Local Sellers",
      content: `Find nearby sellers offering OEM code ### parts.`,
      noFound: `No local sellers found for this code.`,
      button: `Become a Seller Today`,
      buttonURL: `become-a-seller`,
    },
    {
      id: `Products`,
      title: "Sellers Across Europe",
      subTitle: "Europe Sellers",
      content: `Discover sellers across Europe with OEM code ### parts.`,
      noFound: `No European sellers found for this code.`,
      button: `Become a Seller Today`,
      buttonURL: `become-a-seller`,
    }, */}
        {/* {context?.places?.map((e, i) => {
          const uniqueLinks = Array.from(
            new Map(
              e?.social.map((link) => {
                const domain = new URL(link).hostname.replace(/^www\./, "");
                return [domain, link];
              })
            ).values()
          );
          const placeDesc = productDescription(e?.content);
          return (
            <div className="box-border mb-4" key={i}>
              <div className="d-flex gap-3 mb-3">
                <img
                  src={e?.image}
                  loading="lazy"
                  decoding="async"
                  alt={e?.title}
                  width="60px"
                  height="60px"
                  className=""
                />
                <div className="w-60 h-60 overflow-hidden">
                  <img
                    src={e?.image}
                    loading="lazy"
                    decoding="async"
                    alt={e?.title}
                    className="object-cover w-100 h-100"
                  />
                </div>
                <div className="d-flex items-center">
                  <h3>{e?.title}</h3>
                </div>
              </div>
              <div className="d-flex">
                <ul className="d-flex gap-3">
                  <li className="d-flex items-center gap-2 mt-2">
                    <Svg name="location" width="24px" height="24px" />
                    <a
                      href={e?.social.find((link) => link.includes("google"))}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {option?.metaTitle1}
                    </a>
                  </li>
                  <li className="d-flex items-center gap-2 mt-2">
                    <Svg name="website" width="24px" height="24px" />
                    <a
                      href={`https://${e?.domain}`}
                      target="_blank"
                      rel={`noopener noreferrer ${
                        e?.status === 1 ? "sponsored" : "nofollow"
                      }`}
                    >
                      {option?.metaTitle2}
                    </a>
                  </li>
                </ul>
              </div>
              <h4>Service Highlights</h4>
              <ul className="d-flex flex-wrap mt-2 gap-2">
                <li className="btx-no">SEO</li>
                <li className="btx-no">PPC</li>
                <li className="btx-no">Web Design</li>
                <li className="btx-no">Social Media</li>
              </ul>
              <h4 className="mb-3 mt-3">
                {option?.whyChoose?.replace(
                  "###",
                  keyword?.single?.toLowerCase()
                )}
              </h4>
              <div className="d-flex gap-2 mb-3">
                <strong>{option?.clientSay}</strong>
                {e?.clientsSay}
              </div>
              {placeDesc[0] && <p>{placeDesc[0]}</p>}
              {placeDesc[1] && <p>{placeDesc[1]}</p>}
              {placeDesc[2] && <p>{placeDesc[2]}</p>}
              <div className="d-flex gap-2 mb-2 items-center flex-wrap text-14">
                {option?.sourceTitle}
                {uniqueLinks.map((link, i) => {
                  const domain = new URL(link).hostname
                    .replace(/^www\./, "")
                    .split(".")[0];
                  const label =
                    domain.charAt(0).toUpperCase() + domain.slice(1);
                  return (
                    <a
                      key={i}
                      href={link}
                      title={label}
                      className="mr8 italic inColor underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                      {i < uniqueLinks.length - 1 ? "," : ""}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })} */}
      </div>
    </section>
  );
};

export default Code;
