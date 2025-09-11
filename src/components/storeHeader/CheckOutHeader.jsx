import { useStoreConfig } from "../../StoreConfigContext";
import { Link } from "react-router-dom";
import { useTheme } from "../../hook/useTheme";
import { TbLockSquareRounded } from "react-icons/tb";

const CheckOutHeader = () => {
  // Store configuration
  const storeConfig = useStoreConfig();
  const brandInfo = storeConfig.brandInfo || {};

  // Theme Toggler
  const { theme } = useTheme();

  return (
    <>
      <div className="header-wrap checkout-header">
        <div className="container">
          <div className="inner">
            {/* Secure Checkout */}
            <div className="page-title">
              <TbLockSquareRounded />
              <span className="h3 m-0">Secure Checkout</span>
            </div>
            {/* Brand Logo */}
            <Link to="/" className="brand-logo">
              <img
                src={
                  theme === "dark" ? brandInfo.logoLight : brandInfo.logoDark
                }
                alt={brandInfo.name}
              />
            </Link>
            {/* Action btn */}
            <button className="ctm-btn white-btn">Back to Home</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutHeader;
