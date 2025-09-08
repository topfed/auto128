import React from "react";
import { useGlobal } from "../data/useContext";

const PlacesCity = () => {
  const { settings, context, slugData } = useGlobal();
  const option = (settings[context?.type] || [])?.find(
    (e) => e?.id === "PlacesCity"
  );
  const keyword = slugData?.find(
    (e) => e?.slug === context?.keyword && e?.type === `keyword`
  );
  const cities = slugData?.filter(
    (e) => e?.slug !== context?.city && e?.type === `city`
  );

  return (
    <section className="bg-light">
      <div className="container cont-space">
        <p className="subtitle">{option?.subTitle}</p>
        <h2>{option?.title?.replace("###", keyword?.name)}</h2>
        {option?.content && (
          <p>{option?.content.replace("###", keyword?.name.toLowerCase())}</p>
        )}
        <div className="d-flex flex-wrap mt-5 gap-2">
          {cities
            ?.sort((a, b) => a.volume - b.volume)
            ?.map((e, i) => {
              if (!settings?.groupedByCity[e?.slug].includes(keyword?.slug))
                return null;
              return (
                <a
                  className="btx-no"
                  key={i}
                  href={`/${keyword?.slug}/${e?.slug}/`}
                >
                  {e?.name}
                </a>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default PlacesCity;
