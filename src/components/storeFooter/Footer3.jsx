import React from "react";
import { useStoreConfig } from "../../StoreConfigContext";
import { Link } from "react-router-dom";
import { useTheme } from "../../hook/useTheme";
import SocialLinks from "../SocialLinks";

const Footer3 = () => {
  // Store configuration
  const storeConfig = useStoreConfig();
  const brandInfo = storeConfig.brandInfo || {};
  const copyRightText = storeConfig.brandInfo.copyRightText;

  // Theme Toggler
  const { theme } = useTheme();

  return <>
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
  </>;
};

export default Footer3;
