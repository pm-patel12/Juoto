import React from "react";
import { Outlet } from "react-router-dom";
import { headers, footers } from "../components/registry";
import { useIsMobile } from "../hook/useIsMobile";
import PageModal from "../components/modals/PageModal";
import ProductDetailModal from "../components/modals/ProductDetailModal";
import { useAppContext } from "../ThemeProvider";

const StoreLayout = () => {
  const { storeConfig } = useAppContext();
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
      {/* Product Details Modal */}
      <ProductDetailModal />
    </main>
  );
};

export default StoreLayout;
