import React from "react";
import useStatic from "../data/useStatic";
import { GlobalProvider } from "../data/useContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterAbove from "../components/FooterAbove";
import Seo from "../components/Seo";
import Content from "../components/Content";
import Faq from "../components/Faq";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Keywords from "../components/Keywords";
import Cities from "../components/Cities";
import Places from "../components/Places";
import Posts from "../components/Posts";
import WhyUs from "../components/WhyUs";
import Sitemap from "../components/Sitemap";
import Source from "../components/Source";
import CategoryKeywords from "../components/CategoryKeywords";
import CategoryCities from "../components/CategoryCities";
import CityKeywords from "../components/CityKeywords";
import CityCities from "../components/CityCities";
import KeywordCity from "../components/KeywordCity";
import KeywordFaq from "../components/KeywordFaq";
import KeywordCategory from "../components/KeywordCategory";
import PlacesCity from "../components/PlacesCity";
import PlacesKeywords from "../components/PlacesKeywords";
import PlacesFaq from "../components/PlacesFaq";
import CategoryPlacesKeywords from "../components/CategoryPlacesKeywords";
import CategoryPlacesCities from "../components/CategoryPlacesCities";

import Brands from "../components/Brands";
import CodesLast from "../components/CodesLast";

import "../data/styles.css";

const COMPONENT_MAP = {
  Content,
  Faq,
  Footer,
  Form,
  FooterAbove,
  Header,
  Hero,
  Keywords,
  Cities,
  Places,
  Posts,
  WhyUs,
  Seo,
  Sitemap,
  Source,
  CategoryKeywords,
  CategoryCities,
  CityKeywords,
  CityCities,
  KeywordCity,
  KeywordFaq,
  KeywordCategory,
  PlacesCity,
  PlacesKeywords,
  PlacesFaq,
  CategoryPlacesKeywords,
  CategoryPlacesCities,
  Brands,
  CodesLast,
};

export default function Template({ pageContext }) {
  const { allData } = useStatic(pageContext);
  const components = allData?.settings?.[pageContext?.type] || [];
  // console.log(allData);
  return (
    <GlobalProvider value={allData}>
      <Header />
      <Hero />
      {(components || []).map((block, index) => {
        const Component = COMPONENT_MAP[block?.id];
        if (!Component) return null;
        return <Component key={index} />;
      })}
      {/* <Selection /> */}
      <Footer />
    </GlobalProvider>
  );
}
export function Head({ pageContext }) {
  const { allData } = useStatic(pageContext);
  return <Seo data={allData} context={pageContext} />;
}
