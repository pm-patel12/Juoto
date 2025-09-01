import React from "react";
import { Outlet } from "react-router-dom";
import { headers, footers } from "../components/registry";
import { useStoreConfig } from "../StoreConfigContext";
import "../assets/css/style.scss";

const StoreLayout = () => {
  // Store Layout configuration
  const storeConfig = useStoreConfig();
  const Header = headers[storeConfig.headerType] || headers.header1;
  const Footer = footers[storeConfig.footerType] || footers.footer1;

  return (
    <>
      <main>
        <header className="store-header">
          <Header />
        </header>
        <div className="store-body">
          <Outlet />
        </div>
        <footer className="store-footer">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default StoreLayout;
