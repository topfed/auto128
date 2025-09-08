import React from "react";
import { useGlobal } from "../data/useContext";

const PlacesFaq = () => {
  const { settings, context, slugData } = useGlobal();
  const option = (settings[context?.type] || [])?.find(
    (e) => e?.id === "PlacesFaq"
  );
  const keyword = slugData?.find(
    (e) => e?.slug === context?.keyword && e?.type === `keyword`
  );

  return (
    <section className="bg-white">
      <div className="container cont-space">
        <p className="subtitle">{option?.subTitle}</p>
        <h2>{option?.title?.replace("###", keyword?.name)}</h2>
        {option?.content && (
          <p>{option?.content.replace("###", keyword?.name.toLowerCase())}</p>
        )}
        {keyword?.faq?.map((e, i) => {
          return (
            <div className="box-border mb-3 mt-3 p-0" key={i}>
              <a
                href={`/${keyword?.slug}/#faq`}
                className="d-flex justify-between items-center gap-3 cursor-link p-3 inColor"
              >
                <h3 className="m-0 pr-3 text-18 line-h15">{e?.title}</h3>
                <svg width="24px" height="24px">
                  <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"></path>
                </svg>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PlacesFaq;
