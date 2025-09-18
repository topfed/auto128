import React from "react";
import { useGlobal } from "../data/useContext";

const CategoryPlacesCities = () => {
  const { settings, context, slugData } = useGlobal();
  const options = (settings[context?.type] || [])?.find(
    (e) => e?.id === "CategoryPlacesCities"
  );

  const category = slugData?.find(
    (e) => e?.slug === context?.category && e?.type === "category"
  );
  const city = slugData?.find(
    (e) => e?.slug === context?.city && e?.type === "city"
  );
  const cities = slugData?.filter(
    (e) => e?.slug !== context?.city && e?.type === "city"
  );

  return (
    <section className="bg-light">
      <div className="container cont-space">
        <p className="subtitle">{options?.subTitle}</p>
        <h2>
          {options?.title
            ?.replace("###", category?.name)
            ?.replace("##", city?.name)}
        </h2>
        <p>
          {options?.content
            ?.replace("###", category?.name?.toLowerCase())
            ?.replace("##", city?.name)}
        </p>
        <div className="d-flex flex-wrap mt-5 gap-2">
          {cities
            ?.sort((a, b) => a.volume - b.volume)
            ?.map((e, i) => {
              return (
                <a
                  className="btx-no"
                  key={i}
                  href={`/${category?.slug}/${e?.slug}/`}
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

export default CategoryPlacesCities;
