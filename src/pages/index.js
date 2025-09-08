import React from "react";
import Template from "../templates/index";

export default function Home() {
  return (
    <Template
      pageContext={{
        slug: "/",
        type: "index",
      }}
    />
  );
}

export { Head } from "../templates/index";
