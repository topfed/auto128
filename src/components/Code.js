import React from "react";
import { useGlobal } from "../data/useContext";
import { productDescription } from "../data/functions";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Svg from "./Svg";
dayjs.extend(relativeTime);

// import Image from "./Sections/Image";

const Code = () => {
  const { settings, context, slugData } = useGlobal();
  const option = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Places"
  );
  const keyword = slugData?.find(
    (e) => e?.slug === context?.keyword && e?.type === `keyword`
  );
  const city = slugData?.find(
    (e) => e?.slug === context?.city && e?.type === `city`
  );
  const category = slugData?.find(
    (e) => e?.slug === keyword?.category && e?.type === `category`
  );
  const searchWord = `${keyword?.slug?.replace("-", "+")}+${city?.slug}+uk`;

  // console.log(keyword);
  // console.log(context);

  return (
    <section className="bg-white">
      <div className="container cont-space">
        <p className="d-flex justify-center gap-1">
          <a href={`/${category?.slug}/`} className="inColor underline">
            {category?.name}
          </a>
          <svg width="20px" height="20px">
            <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"></path>
          </svg>
          <a href={`/${keyword?.slug}/`} className="inColor underline">
            {keyword?.name}
          </a>
          <svg width="20px" height="20px">
            <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"></path>
          </svg>
          <a href={`/${city?.slug}/`} className="inColor underline">
            {city?.name}
          </a>
        </p>
        <h2 className="text-center">
          {option?.title
            ?.replace("###", keyword?.name)
            ?.replace("##", context?.places?.length)}
        </h2>
        <div className="italic text-center mb-3 text-14">
          {`Updated ${dayjs(context?.update).fromNow()}`}
        </div>
        <div className="d-flex justify-center items-center mt-2 mb-2 icon">
          <a
            href="https://www.experian.co.uk/business/"
            title="Experian"
            aria-label="Visit Experian Business"
            className="m-2 black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg name="source1" width="19px" height="24px" />
          </a>
          <a
            href={`https://www.trustpilot.com/search?claimed=true&query=${searchWord}`}
            title="Trustpilot"
            aria-label="Visit Trustpilot"
            className="m-2 black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg name="source6" width="24px" height="23px" />
          </a>
          <a
            href={`https://www.yelp.com/search?find_desc=${keyword?.slug?.replace(
              "-",
              "+"
            )}&amp;find_loc=${city?.slug}+uk`}
            title="Yelp"
            aria-label="Visit Yelp"
            className="m-2 black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg name="source8" width="18px" height="24px" />
          </a>
          <a
            href={`https://www.google.co.uk/search?q=${searchWord}`}
            title="Google"
            className="m-2 black"
            aria-label="Visit Google"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg name="source3" width="24px" height="24px" />
          </a>
          <a
            href={`https://www.facebook.com/search_results/?q=${searchWord}`}
            title="Facebook"
            aria-label="Visit Facebook"
            className="m-2 black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg name="source2" width="24px" height="24px" />
          </a>

          <a
            href={`https://www.linkedin.com/search/results/companies/?keywords=${searchWord}`}
            title="Linkedin"
            className="m-2 black"
            aria-label="Visit Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg name="source5" width="24px" height="24px" />
          </a>
          <a
            href={`https://m.youtube.com/results?sp=mAEA&search_query=${searchWord}`}
            title="Youtube"
            aria-label="Visit Youtube"
            className="m-2 black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg name="source9" width="24px" height="17px" />
          </a>
        </div>
        <ul className="d-flex justify-center flex-wrap gap-2">
          <li className="d-flex gap-1">
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
          <li className="d-flex gap-1">
            <svg aria-hidden="true" viewBox="0 0 24 24" width="20px">
              <path
                className="fill-red"
                d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
              ></path>
            </svg>
            {option?.checkTitle4}
          </li>
          <li className="d-flex gap-1">
            <svg aria-hidden="true" viewBox="0 0 24 24" width="20px">
              <path
                className="fill-red"
                d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
              ></path>
            </svg>
            {option?.checkTitle5}
          </li>
        </ul>
        <div className="d-flex justify-center gap-1 italic m-2">
          {option?.lernText}
          <a href={option?.lernLink} className="mb-2 inColor underline">
            {option?.lernLinkText}
          </a>
          .
        </div>
        <p className="text-center mb-4">
          {option?.content
            ?.replace("###", keyword?.name?.toLowerCase())
            ?.replace("###", keyword?.name?.toLowerCase())
            ?.replace("##", city?.name)
            ?.replace("##", city?.name)}
        </p>
        {context?.places?.map((e, i) => {
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
                {/* <img
                  src={e?.image}
                  loading="lazy"
                  decoding="async"
                  alt={e?.title}
                  width="60px"
                  height="60px"
                  className="rounded-full"
                /> */}
                <div className="w-60 h-60 overflow-hidden rounded-full">
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
              {/* <h4>Service Highlights</h4>
              <ul className="d-flex flex-wrap mt-2 gap-2">
                <li className="btx-no">SEO</li>
                <li className="btx-no">PPC</li>
                <li className="btx-no">Web Design</li>
                <li className="btx-no">Social Media</li>
              </ul> */}
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
        })}
      </div>
    </section>
  );
};

export default Code;
