import React from "react";
import { useStoreConfig } from "../StoreConfigContext";
import { productCard } from "../components/registry";
import HeroSection from "../components/heroSection/HeroSection";

const Home = () => {
  // Store configuration
  const storeConfig = useStoreConfig();
  const ProductCard =
    productCard[storeConfig.productCardType] || productCard.grid2x2;
  return (
    <div>
      <HeroSection />
      Home
      <ProductCard />
    </div>
  );
};

export default Home;
