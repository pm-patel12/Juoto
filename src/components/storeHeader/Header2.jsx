import { useStoreConfig } from "../../StoreConfigContext";
import { Link } from "react-router-dom";
import { TbSun } from "react-icons/tb";
import { TbMoon } from "react-icons/tb";
import { TbMap2 } from "react-icons/tb";
import { useTheme } from "../../hook/useTheme";
import { TbBook2 } from "react-icons/tb";

const Header2 = () => {
  // Store configuration
  const storeConfig = useStoreConfig();
  const brandInfo = storeConfig.brandInfo || {};

  // Theme Toggler
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="header-wrap header-layout-2">
        <div className="container">
          <div className="inner">
            <button className="ctm-btn white-btn">
              <TbBook2 style={{ stroke: "var(--color-primary-500)" }} />
              View Food Menu
            </button>
            {/* Nav Menu */}
            <nav className="nav-menu d-none">
              <ul>
                <li>
                  <Link to="">About</Link>
                </li>
                <li>
                  <Link to="">Gallery</Link>
                </li>
                <li>
                  <Link to="">FAQ’s</Link>
                </li>
                <li>
                  <Link to="">Need Help</Link>
                </li>
                <li>
                  <Link to="">Privacy Policy</Link>
                </li>
              </ul>
            </nav>
            {/* Brand Logo */}
            <Link to="/" className="brand-logo">
              <img
                src={
                  theme === "dark" ? brandInfo.logoLight : brandInfo.logoDark
                }
                alt={brandInfo.name}
              />
            </Link>
            {/* Action buttons */}
            <div className="action-btn-wrap">
              <button className="ctm-btn white-btn">
                <TbMap2 style={{ stroke: "var(--color-primary-500)" }} />
                Map Direction
              </button>
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

export default Header2;
