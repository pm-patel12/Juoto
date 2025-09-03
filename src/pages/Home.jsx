import React from "react";
import { useStoreConfig } from "../StoreConfigContext";
import { productCard } from "../components/registry";
import HeroSection from "../components/heroSection/HeroSection";
import DividerTitle from "../components/DividerTitle";
import { productCategoriesData } from "../staticData";
import Bestsellers from "../components/bestsellers/Bestsellers";

const Home = () => {
  // Store configuration
  const storeConfig = useStoreConfig();
  const ProductCard =
    productCard[storeConfig.productCardType] || productCard.grid2x2;
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      <div className="container">
        {/* Section Title */}
        <DividerTitle title="Menu" />
        {/* Search bar */}
        <div className="search-bar mb-4">
          <input type="text" placeholder="Search for delicious dishes..." />
        </div>
        {/* Product categories Wrap */}
        {productCategoriesData.length > 0 && (
          <div className="product-cat-wrap section-space">
            <ul>
              {productCategoriesData.map((category, index) => {
                return (
                  <li>
                    <input
                      type="radio"
                      id={`category${index}`}
                      name="categories"
                      checked={index == 0 && true}
                    />
                    <label htmlFor={`category${index}`}>{category.label}</label>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {/* Bestseller */}
        <Bestsellers />
        {/* <ProductCard /> */}
      </div>
    </div>
  );
};

export default Home;
