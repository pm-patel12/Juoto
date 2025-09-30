import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../ThemeProvider";
import { TbMap2, TbMenuDeep, TbMoon, TbSun, TbX } from "react-icons/tb";
import MenuLinks from "../MenuLinks";

const MobileHeader = () => {
  // Store configuration
  const { storeConfig } = useAppContext();
  const brandInfo = storeConfig.brandInfo || {};
  const mapLink = storeConfig.brandInfo.mapLink || "";

  // Theme Toggler
  const { theme, toggleTheme } = useAppContext();
  return (
    <div className="header-wrap mobile-header">
      <div className="container">
        <div className="inner">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo">
            <img
              src={theme === "dark" ? brandInfo.logoLight : brandInfo.logoDark}
              alt={brandInfo.name}
            />
          </Link>
          {/* Mobile Menu Toggler */}
          <button
            to={mapLink}
            className="ctm-btn white-btn"
            data-bs-toggle="offcanvas"
            data-bs-target="#navMenuCanvas"
            aria-controls="navMenuCanvas"
          >
            <TbMenuDeep style={{ stroke: "var(--color-primary-500)" }} />
            Menu
          </button>
          {/* Menu Link Sidebar */}
          <div
            className="offcanvas offcanvas-end"
            style={{ "--bs-offcanvas-width": "300px" }}
            tabIndex="-1"
            id="navMenuCanvas"
            aria-labelledby="navMenuCanvasLabel"
          >
            <div className="offcanvas-body">
              <div className="d-flex align-items-center justify-content-between gap-3">
                <h2 className="m-0">Menu</h2>
                <button
                  to={mapLink}
                  className="ctm-btn white-btn"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <TbX style={{ stroke: "var(--color-primary-500)" }} />
                  Close
                </button>
              </div>
              <hr />
              {/* Nav Menu */}
              <div className="nav-menu mb-3">
                <MenuLinks />
              </div>
              {/* Action buttons */}
              <div className="action-btn-wrap">
                <Link
                  to={mapLink}
                  target="_blank"
                  className="ctm-btn white-btn mb-3"
                >
                  <TbMap2 style={{ stroke: "var(--color-primary-500)" }} />
                  Map Direction
                </Link>
                {/* Theme Color Toggle */}
                <div
                  className={`mx-auto themeToggle ${theme}`}
                  onClick={toggleTheme}
                >
                  <span>
                    <TbSun />
                  </span>
                  <span>
                    <TbMoon />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
