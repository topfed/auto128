import React from "react";
import { useGlobal } from "../data/useContext";
import Svg from "./Svg";

const PlacesKeywords = () => {
  const { settings, context, slugData } = useGlobal();
  const option = (settings[context?.type] || [])?.find(
    (e) => e?.id === "PlacesKeywords"
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
  const categories = slugData?.filter(
    (e) => e?.type === `keyword` && e?.category === keyword?.category
  );

  return (
    <section className="bg-light">
      <div className="container cont-space">
        <p className="subtitle">{option?.subTitle}</p>
        <h2>
          {option?.title
            ?.replace("###", category?.name)
            ?.replace("##", city?.name)}
        </h2>
        {option?.content && (
          <p>
            {option?.content
              ?.replace("###", keyword?.name.toLowerCase())
              ?.replace("##", city?.name)}
          </p>
        )}
        <div className="d-grid gap-4 mt-5">
          <div className="box-border p-0">
            <div className="d-flex justify-between items-center gap-3 p-3 h-32">
              <div className="d-flex items-center gap-3">
                <Svg name={category?.slug} width="40px" height="40px" />
                <h3 className="m-0 pr-3">{category?.name}</h3>
              </div>
            </div>
            <div className="ph-3 mb-3">
              <ul className="d-grid grid-3">
                {categories
                  ?.sort((a, b) => b.volume - a.volume)
                  ?.slice(0, 20)
                  ?.map((h, u) => {
                    if (!settings?.groupedByCity[city?.slug].includes(h?.slug))
                      return null;
                    return (
                      <li key={u}>
                        <a
                          href={`/${h?.slug}/${city?.slug}/`}
                          className="pv-1 block"
                        >
                          {h?.name}
                        </a>
                      </li>
                    );
                  })}
                <li>
                  <a
                    href={`/${category?.slug}/${city?.slug}/`}
                    className="pv-1 block"
                  >
                    {option?.moreCategory?.replace("###", category?.name)}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacesKeywords;
