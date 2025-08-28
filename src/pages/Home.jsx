import React from "react";
import { useStoreConfig } from "../StoreConfigContext";
import { productCard, heroSlider } from "../components/registry";

const Home = () => {
  // Store configuration
  const storeConfig = useStoreConfig();
  const ProductCard =
    productCard[storeConfig.productCardType] || productCard.grid2x2;
  const HeroSlider =
    heroSlider[storeConfig.heroSliderType] || heroSlider.heroSliderFull;

  return (
    <div>
      <HeroSlider />
      Home
      <ProductCard />
    </div>
  );
};

export default Home;
