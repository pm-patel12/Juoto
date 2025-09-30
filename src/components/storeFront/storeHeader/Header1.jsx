import { Link } from "react-router-dom";
import { TbSun } from "react-icons/tb";
import { TbMoon } from "react-icons/tb";
import { TbMap2 } from "react-icons/tb";
import { useAppContext } from "../../../ThemeProvider";
import MenuLinks from "../MenuLinks";

const Header1 = () => {
  // Store configuration
  const { storeConfig } = useAppContext();
  const brandInfo = storeConfig.brandInfo || {};
  const mapLink = storeConfig.brandInfo.mapLink || "";

  // Theme Toggler
  const { theme, toggleTheme } = useAppContext();

  return (
    <>
      <div className="header-wrap header-layout-1">
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
            <div className="nav-menu">
              <MenuLinks />
            </div>
            {/* Action buttons */}
            <div className="action-btn-wrap">
              <Link to={mapLink} target="_blank" className="ctm-btn white-btn">
                <TbMap2 style={{ stroke: "var(--color-primary-500)" }} />
                Map Direction
              </Link>
              {/* Theme Color Toggle */}
              <div className={`themeToggle ${theme}`} onClick={toggleTheme}>
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
    </>
  );
};

export default Header1;
