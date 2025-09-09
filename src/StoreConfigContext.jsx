/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
import { generateColorShades } from "./utils/generateShades";
import brandLogoDark from "../src/assets/images/brand-logo-dark.svg";
import brandLogoLight from "../src/assets/images/brand-logo-light.svg";

const StoreConfigContext = createContext();

const apiConfig = {
  brandInfo: {
    name: "The Spice Garden – Healthy by EatFit",
    logoLight: brandLogoLight,
    logoDark: brandLogoDark,
    tagLine: "Where Every Bite Tells a Story",
    number: "+931 587 28 538 55",
    address: "121 Town Crest Road #123 Fort Saskatchewan AB. T8L0G7",
    mapLink: "https://www.google.com/maps/place/Ahmedabad,+Gujarat,+India",
    currency: "USD",
    currencySymnol: "$",
    copyRightText: "© Copyright 2025 TheSpiceGardens. All Rights Reserved.",
  },
  theme: {
    primaryColor: "#FF2056",
    headerType: "header1",
    footerType: "footer1",
    heroSliderType: "full",
    prodCardType: {
      cardStyle: "grid",
      imgRatio: "2x2",
    },
  },
  socialLinks: [
    { id: 3, name: "instagram", link: "https://instagram.com/" },
    { id: 1, name: "facebook", link: "https://facebook.com/" },
    { id: 4, name: "youtube", link: "https://youtube.com/" },
    { id: 5, name: "tiktok", link: "https://tiktok.com/" },
    { id: 6, name: "tumblr", link: "https://tumblr.com/" },
    { id: 2, name: "twitter", link: "https://twitter.com/" },
    { id: 7, name: "linkedin", link: "https://linkedin.com/" },
  ],
  navMenus: [
    {
      id: 1,
      name: "About",
      type: "popup",
      popupId: "aboutModal",
      template: "default",
      pageId: 2,
    },
    {
      id: 2,
      name: "Gallery",
      type: "popup",
      popupId: "galleryModal",
      template: "gallery",
      pageId: 3,
    },
    {
      id: 3,
      name: "FAQ’s",
      type: "page",
      path: "#faqSection",
      template: "faq",
      pageId: 4,
    },
    {
      id: 4,
      name: "Need Help",
      type: "popup",
      popupId: "contactModal",
      template: "contact",
      pageId: 5,
    },
    {
      id: 5,
      name: "Privacy Policy",
      type: "popup",
      popupId: "privacyPolicyModal",
      template: "default",
      pageId: 7,
    },
  ],
  sectionsLayout: [
    { id: 1, name: "Announcement bar", type: "announcement", enabled: true },
    { id: 3, name: "Hero Image Slider", type: "hero", enabled: true },
    { id: 4, name: "Custom CTA", type: "cta", enabled: true },
    { id: 5, name: "Categories | Menu", type: "categoryMenu", enabled: true },
    {
      id: 6,
      name: "Best Selling Products",
      type: "bestsellers",
      enabled: true,
      categoryId: null,
    },
    {
      id: 7,
      name: "🔔 Hot Release: Newly Launched",
      type: "category",
      enabled: true,
      categoryId: 5,
    },
    {
      id: 87,
      name: "Pita Pockets 🍕",
      type: "category",
      enabled: true,
      categoryId: 5,
    },
    {
      id: 9,
      name: "Pita Pizzas (Guiltfree)",
      type: "category",
      enabled: true,
      categoryId: 5,
    },
    { id: 10, name: "FAQ’s", type: "faq", enabled: true },
  ],
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
