import React from "react";
import { Outlet } from "react-router-dom";
import { headers, footers } from "../components/registry";
import { useStoreConfig } from "../StoreConfigContext";
import PrivacyPolicyModal from "../components/modals/PrivacyPolicyModal";
import ContactModal from "../components/modals/ContactModal";
import GalleryModal from "../components/modals/GalleryModal";
import AboutModal from "../components/modals/AboutModal";
import { useIsMobile } from "../hook/useIsMobile";

const StoreLayout = () => {
  const storeConfig = useStoreConfig();
  const isMobile = useIsMobile(991);

  // Desktop header based on theme
  const Header = headers[storeConfig.theme.headerType] || headers.header1;

  // Footer from theme
  const Footer = footers[storeConfig.theme.footerType] || footers.footer1;

  // Force MobileHeader if screen < 991px
  const FinalHeader = isMobile ? headers.mobileHeader : Header;

  return (
    <main>
      <header className="store-header">
        <FinalHeader />
      </header>
      <div className="store-body">
        <Outlet />
      </div>
      <footer className="store-footer">
        <Footer />
      </footer>

      {/* mount modals globally */}
      <AboutModal />
      <GalleryModal />
      <ContactModal />
      <PrivacyPolicyModal />
    </main>
  );
};

export default StoreLayout;
