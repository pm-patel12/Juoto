import HeroSection from "../components/heroSection/HeroSection";
import DividerTitle from "../components/DividerTitle";
import Faqs from "../components/faqSection/Faqs";
import Bestsellers from "../components/bestsellersSection/Bestsellers";
import CategoriesList from "../components/categoriesListSection/CategoriesList";
import CategoryGroup from "../components/categoryGroupSection/CategoryGroup";
import { useStoreConfig } from "../StoreConfigContext";

const Home = () => {
  // Store configuration
  const storeConfig = useStoreConfig();
  const sectionsLayout = storeConfig.sectionsLayout;

  return (
    <>
      {Array.isArray(sectionsLayout) &&
        sectionsLayout
          .filter((section) => section.enabled)
          .map((section) => (
            <SectionRenderer key={section.id} section={section} />
          ))}
    </>
  );
};

export default Home;

function SectionRenderer({ section }) {
  switch (section.type) {
    case "hero":
      return <HeroSection />;
    case "categoryMenu":
      return <CategoriesList title={section.name} />;
    case "bestsellers":
      return <Bestsellers />;
    case "category":
      return (
        <CategoryGroup categoryId={section.categoryId} title={section.name} />
      );
    case "faq":
      return <Faqs />;
    default:
      return null;
  }
}
