import React from "react";
import { productCategoriesData } from "../../../staticData";
import DividerTitle from "../DividerTitle";

const CategoriesList = () => {
  return (
    <>
      <div className="container">
        <DividerTitle title="MENU" />
        <div className="search-bar mb-4">
          <input type="text" placeholder="Search for delicious dishes..." />
        </div>
        {productCategoriesData.length > 0 && (
          <div className="product-cat-wrap section-space">
            <ul>
              {productCategoriesData.map((category, index) => {
                return (
                  <li key={index}>
                    <input
                      type="radio"
                      id={`category${index}`}
                      name="categories"
                      defaultChecked={index == 0 && true}
                    />
                    <label htmlFor={`category${index}`}>{category.label}</label>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default CategoriesList;
