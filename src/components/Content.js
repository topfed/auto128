import React from "react";
import { useGlobal } from "../data/useContext";

const Content = () => {
  const { pages, context } = useGlobal();
  const data = pages?.find((e) => e?.slug === context?.slug);
  return (
    <section className="bg-white">
      <div
        className="container cont-space text"
        dangerouslySetInnerHTML={{ __html: data?.content }}
      />
    </section>
  );
};

export default Content;
