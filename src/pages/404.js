import React from "react";
import Template from "../templates/index";

export default function NotFoundPage() {
  return (
    <Template
      pageContext={{
        slug: "404",
        type: "404",
      }}
    />
  );
}

export { Head } from "../templates/index";
