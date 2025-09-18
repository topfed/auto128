import React from "react";
import { useGlobal } from "../data/useContext";
// import Image from "./Sections/Image";

const Posts = () => {
  const { settings, context, posts } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "Posts"
  );
  return (
    <section className="bg-light">
      <div className="container cont-space">
        <p className="subtitle">{options?.subTitle}</p>
        <h2>{options?.title}</h2>
        {options?.content?.split("###")[0] && (
          <p>{options?.content?.split("###")[0]}</p>
        )}
        {options?.content?.split("###")[1] && (
          <p>{options?.content?.split("###")[1]}</p>
        )}
        <div className="d-grid grid-3 gap-4 mt-5">
          {posts?.map((e, i) => {
            return (
              <div className="box-border" key={i}>
                <img
                  src="https://www.expertsmanchester.co.uk/static/ca748d1a0cd0577789d7026873495410/0d148/003.avif"
                  alt=""
                  className="round-8 mb-2"
                  width="334px"
                  height="209px"
                />
                <div className="date">22 days ago</div>
                <h3 className="mt-2 mb-2">
                  <a href={`/${e?.slug}/`} className="same">
                    {e?.name}
                  </a>
                </h3>
                <p className="mt-3">
                  Choosing the right service provider can have a profound
                  impact. Discover key steps, expert tips, and crucial factors
                  to help you find the perfect provider tailored to your unique
                  needs...
                  <a href={`/${e?.slug}/`}>read more</a>
                </p>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-center mt-5">
          <a
            className="btx"
            href={options?.buttonLink}
            aria-label={options?.buttonText}
          >
            {options?.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Posts;
