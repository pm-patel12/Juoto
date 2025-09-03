/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { generateColorShades } from "./utils/generateShades";
import brandLogoDark from "../src/assets/images/brand-logo-dark.svg";
import brandLogoLight from "../src/assets/images/brand-logo-light.svg";

const StoreConfigContext = createContext();

const apiConfig = {
  headerType: "header1",
  footerType: "footer1",
  productCardType: "list4x5",
  heroSliderType: "full",
  brandInfo: {
    name: "The Spice Garden – Healthy by EatFit",
    logoLight: brandLogoLight,
    logoDark: brandLogoDark,
    tagLine: "Where Every Bite Tells a Story",
    number: "+931 587 28 538 55",
    address: "121 Town Crest Road #123 Fort Saskatchewan AB. T8L0G7",
    currency: "USD",
    currencySymnol: "$",
  },
  theme: {
    primaryColor: "#FF2056",
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
