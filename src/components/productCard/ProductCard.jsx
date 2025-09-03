import React from "react";
import { useStoreConfig } from "../../StoreConfigContext";

const ProductCard = ({ data }) => {
  // Store configuration
  const storeConfig = useStoreConfig();
  const currencySymnol = storeConfig.brandInfo.currencySymnol;

  return (
    <div className="product-card grid">
      <div className="prod-img">
        <img
          src={data.photo}
          alt={data.name}
        />
      </div>
      <div className="prod-content">
        <p className="prod-name">{data.name}</p>
        <div className="prod-price">
          <span>
            {currencySymnol}
            {data.price}
          </span>
          {data.discount_price && (
            <s>
              {currencySymnol}
              {data.discount_price}
            </s>
          )}
        </div>
        <button className="ctm-btn cart-btn">ADD</button>
      </div>
    </div>
  );
};

export default ProductCard;
