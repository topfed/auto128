import React from "react";
import useStatic from "../data/useStatic";
import { GlobalProvider } from "../data/useContext";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Content from "../components/Content";
import ForSellers from "../components/ForSellers";
import WhyUs from "../components/WhyUs";
import Brands from "../components/Brands";
import Models from "../components/Models";
import Codes from "../components/Codes";
import Products from "../components/Products";
import "../data/styles.css";

const COMPONENT_MAP = {
  Seo,
  Header,
  Hero,
  Footer,
  Content,
  ForSellers,
  WhyUs,
  Brands,
  Models,
  Codes,
  Products,
};

export default function Template({ pageContext }) {
  const { allData } = useStatic(pageContext);
  const components = allData?.settings?.[pageContext?.type] || [];
  return (
    <GlobalProvider value={allData}>
      <Header />
      <Hero />
      {(components || []).map((block, index) => {
        const Component = COMPONENT_MAP[block?.id];
        if (!Component) return null;
        return <Component key={index} />;
      })}
      <Footer />
    </GlobalProvider>
  );
}
export function Head({ pageContext }) {
  const { allData } = useStatic(pageContext);
  return <Seo data={allData} context={pageContext} />;
}
