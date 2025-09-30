import React from "react";
import DividerTitle from "../DividerTitle";
import ProductCard from "../ProductCard";
import { ProductsList } from "../../../staticData";
import { TbLoader } from "react-icons/tb";
import { TbShoppingBag } from "react-icons/tb";
import { useAppContext } from "../../../ThemeProvider";

const CategoryGroup = ({ title }) => {
  // Store configuration
  const { storeConfig } = useAppContext();
  const { cardStyle } = storeConfig.theme.prodCardType;
  return (
    <div className="container">
      <section className="product-grp-sec section-space">
        {ProductsList.length > 0 && (
          <>
            <DividerTitle title={title} side="left" />
            <div
              className={`product-list-wrap ${cardStyle == "list" && "list"}`}
            >
              {ProductsList.map((product, index) => (
                <div key={index}>
                  <ProductCard data={product} />
                </div>
              ))}
            </div>
          </>
        )}
        <div className="d-flex align-items-center gap-2 justify-content-center flex-wrap">
          <button className="ctm-btn white-btn">
            <TbLoader />
            Click to view more items...
          </button>
        </div>
      </section>
    </div>
  );
};

export default CategoryGroup;
