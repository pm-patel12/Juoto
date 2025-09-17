import HeroSection from "../components/heroSection/HeroSection";
import { headers, footers } from "../components/registry";
import Faqs from "../components/faqSection/Faqs";
import Bestsellers from "../components/bestsellersSection/Bestsellers";
import CategoriesList from "../components/categoriesListSection/CategoriesList";
import CategoryGroup from "../components/categoryGroupSection/CategoryGroup";
import { useIsMobile } from "../hook/useIsMobile";
import { useAppContext } from "../ThemeProvider";

const Home = () => {
  // Store configuration
  const { storeConfig } = useAppContext();
  const sectionsLayout = storeConfig.sectionsLayout;
  const isMobile = useIsMobile(991);

  // Desktop header based on theme
  const Header = headers[storeConfig.theme.headerType] || headers.header1;

  // Footer from theme
  const Footer = footers[storeConfig.theme.footerType] || footers.footer1;

  // Force MobileHeader if screen < 991px
  const FinalHeader = isMobile ? headers.mobileHeader : Header;

  function SectionRenderer({ section }) {
    switch (section.type) {
      case "header":
        return (
          <header className="store-header">
            <FinalHeader />
          </header>
        );
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
      case "footer":
        return (
          <footer className="store-footer">
            <Footer />
          </footer>
        );
      default:
        return null;
    }
  }
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
