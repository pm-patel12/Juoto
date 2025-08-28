import HeroSliderBoxed from "./heroSection/HeroSliderBoxed";
import HeroSliderFull from "./heroSection/HeroSliderFull";
import Grid2x2 from "./productCard/Grid2x2";
import Grid4x5 from "./productCard/Grid4x5";
import List2x2 from "./productCard/List2x2";
import List4x5 from "./productCard/List4x5";
import Footer1 from "./StoreFooter/Footer1";
import Header1 from "./StoreHeader/Header1";
import Header2 from "./StoreHeader/Header2";

// Store Header Variants Registry
export const headers = {
      header1: Header1,
      header2: Header2
};

// Store Footer Variants Registry 
export const footers = {
      footer1: Footer1,
};

// Product cards Variants Registry 
export const productCard = {
      grid2x2: Grid2x2,
      grid4x5: Grid4x5,
      list2x2: List2x2,
      list4x5: List4x5,
};

// Store Hero Section's Sliders Variants Registry 
export const heroSlider = {
      heroSliderFull: HeroSliderFull,
      heroSliderBoxed: HeroSliderBoxed,
};