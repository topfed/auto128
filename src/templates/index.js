import React from "react";
import useStatic from "../data/useStatic";
import { GlobalProvider } from "../data/useContext";
import Seo from "../components/Seo";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FooterAbove from "../components/FooterAbove";
import Content from "../components/Content";
import Brands from "../components/Brands";
import Code from "../components/Code";
import CodesLast from "../components/CodesLast";
import Compatible from "../components/Compatible";
import Models from "../components/Models";
import Products from "../components/Products";
import SimilarLast from "../components/SimilarLast";
import WhyUs from "../components/WhyUs";
import "../data/styles.css";

const COMPONENT_MAP = {
  Seo,
  Header,
  Hero,
  Footer,
  FooterAbove,
  Content,
  Brands,
  Code,
  CodesLast,
  Compatible,
  Models,
  Products,
  SimilarLast,
  WhyUs,
};

export default function Template({ pageContext }) {
  const { allData } = useStatic(pageContext);
  const components = allData?.settings?.[pageContext?.type] || [];
  console.log(allData);
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
