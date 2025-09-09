import React from "react";
import { Outlet } from "react-router-dom";
import { headers, footers } from "../components/registry";
import { useStoreConfig } from "../StoreConfigContext";
import { useIsMobile } from "../hook/useIsMobile";
import PageModal from "../components/modals/PageModal";

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
      <Outlet />
      {/* mount modals globally */}
      <PageModal />
    </main>
  );
};

export default StoreLayout;
