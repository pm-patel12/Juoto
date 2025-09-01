/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { generateColorShades } from "./utils/generateShades";
import brandLogoDark from "../src/assets/images/brand-logo-dark.svg";
import brandLogoLight from "../src/assets/images/brand-logo-light.svg";

const StoreConfigContext = createContext();

const apiConfig = {
  headerType: "header2",
  footerType: "footer1",
  productCardType: "list4x5",
  heroSliderType: "heroSliderBoxed",
  brandInfo: {
    name: "Juoto",
    logoLight: brandLogoLight,
    logoDark: brandLogoDark,
    tagLine: "Where Every Bite Tells a Story",
    number: "+931 587 28 538 55",
    address: "121 Town Crest Road #123 Fort Saskatchewan AB. T8L0G7",
  },
  theme: {
    primaryColor: "#FF2056",
    secondaryColor: "#171717",
  },
  socialLinks: {
    facebook: "https://facebook.com/juoto",
    twitter: "https://twitter.com/juoto",
    instagram: "https://instagram.com/juoto",
  },
};

// enrich theme with shades
const staticConfig = {
  ...apiConfig,
  theme: {
    ...apiConfig.theme,
    primaryShades: generateColorShades(apiConfig.theme.primaryColor),
    secondaryShades: generateColorShades(apiConfig.theme.secondaryColor),
  },
};

export const StoreConfigProvider = ({ children }) => {
  return (
    <StoreConfigContext.Provider value={staticConfig}>
      {children}
    </StoreConfigContext.Provider>
  );
};

export const useStoreConfig = () => useContext(StoreConfigContext);
