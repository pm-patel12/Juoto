import React from "react";
import { useStoreConfig } from "../../StoreConfigContext";

const Header1 = () => {
  // Store configuration
  const storeConfig = useStoreConfig();
  const brandInfo = storeConfig.brandInfo || {};
  return (
    <>
      <div className="header-wrap">
        <div className="container">
          <div className="inner">
            <div className="brand-logo">
              <img src={brandInfo.logoDark} alt={brandInfo.name} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;
