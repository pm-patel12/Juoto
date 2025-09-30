import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../ThemeProvider";
import SocialLinks from "../SocialLinks";
import MenuLinks from "../MenuLinks";

const Footer2 = () => {
  // Store configuration
  const { storeConfig } = useAppContext();
  const brandInfo = storeConfig.brandInfo || {};

  // Theme Toggler
  const { theme } = useAppContext();

  return (
    <>
      <div className="footer-wrap footer-layout-2">
        <div className="container">
          <div className="inner">
            {/* Brand Logo */}
            <Link to="/" className="brand-logo">
              <img
                src={
                  theme === "dark" ? brandInfo.logoLight : brandInfo.logoDark
                }
                alt={brandInfo.name}
              />
            </Link>
            {/* Nav Menu */}
            <nav className="nav-menu">
              <MenuLinks />
            </nav>
            {/* Social Links */}
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
