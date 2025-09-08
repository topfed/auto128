import React from "react";
import { useGlobal } from "../data/useContext";

const Sitemap = () => {
  const { settings, keywords, categories, context, pages, posts, cities } =
    useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Sitemap"
  );
  return (
    <section className="bg-light">
      <div className="container cont-space">
        <h2 className="mb-3">{options?.title1}</h2>
        <ul className="box-border mb-5">
          {pages?.map((e, i) => {
            return (
              <li key={i}>
                <a href={`/${e?.slug}/`}>{e?.name}</a>
              </li>
            );
          })}
        </ul>
        <h2 className="mb-3">{options?.title2}</h2>
        <ul className="box-border mb-5">
          {categories?.map((e, i) => {
            return (
              <li className="sp4 mr16" key={i}>
                <a href={`/${e?.slug}/`}>{e?.name}</a>
              </li>
            );
          })}
        </ul>
        <h2 className="mb-3">{options?.title4}</h2>
        <ul className="box-border mb-5">
          {keywords?.map((e, i) => {
            return (
              <li className="sp4 mr16" key={i}>
                <a href={`/${e?.slug}/`}>{e?.name}</a>
              </li>
            );
          })}
        </ul>
        <h2 className="mb-3">{options?.title5}</h2>
        <ul className="box-border mb-5">
          {cities?.map((e, i) => {
            return (
              <li className="sp4 mr16" key={i}>
                <a href={`/${e?.slug}/`}>{e?.name}</a>
              </li>
            );
          })}
        </ul>

        <h2 className="mb-3">{options?.title6}</h2>
        <ul className="box-border mb-5">
          {keywords?.map((e, i) => {
            return (
              <div key={i}>
                {cities?.map((h, u) => {
                  return (
                    <li className="sp3 mr16" key={i + u}>
                      <a href={`/${e?.slug}/${h?.slug}/`}>
                        {e?.name} in {h?.name}
                      </a>
                    </li>
                  );
                })}
              </div>
            );
          })}
        </ul>
        <h2 className="mb-3">{options?.title3}</h2>
        <ul className="box-border mb-5">
          {posts?.map((e, i) => {
            return (
              <li className="sp1 mr16" key={i}>
                <a href={`/${e?.slug}/`}>{e?.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Sitemap;
