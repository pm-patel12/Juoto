import React, { useEffect, useState } from "react";
import HeroSection from "../components/heroSection/HeroSection";
import DividerTitle from "../components/DividerTitle";
import Faqs from "../components/faqSection/Faqs";
import Bestsellers from "../components/bestsellersSection/Bestsellers";
import CategoriesList from "../components/categoriesListSection/CategoriesList";
import CategoryGroup from "../components/categoryGroupSection/CategoryGroup";
import { useStoreConfig } from "../StoreConfigContext";

const Home = () => {
  const [sections, setSections] = useState([]);
  // Store configuration
  const storeConfig = useStoreConfig();
  const sectionsLayout = storeConfig.sectionsLayout;
  console.log(sectionsLayout)
  useEffect(() => {
  }, [])
  return (
    <>
      {Array.isArray(sectionsLayout) &&
        sectionsLayout.filter(section => section.enabled)
          .map(section => (
            <SectionRenderer key={section.id} section={section} />
          ))}
    </>
  );
};

export default Home;

function SectionRenderer({ section }) {
  switch (section.type) {
    case "hero": return <HeroSection />;
    case "categoryMenu": return <CategoriesList title={section.name} />;
    case "bestsellers": return <Bestsellers />;
    case "category": return <CategoryGroup categoryId={section.categoryId} title={section.name} />;
    case "faq": return <Faqs />;
    default: return null;
  }
}

