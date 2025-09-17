import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../ThemeProvider";
import SocialLinks from "../SocialLinks";

const Footer3 = () => {
  // Store configuration
  const { storeConfig } = useAppContext();
  const brandInfo = storeConfig.brandInfo || {};
  const copyRightText = storeConfig.brandInfo.copyRightText;

  // Theme Toggler
  const { theme } = useAppContext();

  return (
    <>
      <div className="footer-wrap footer-layout-3">
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
            {/* CopyRight Text */}
            <p>{copyRightText}</p>
            {/* Social Links */}
            <SocialLinks />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer3;
