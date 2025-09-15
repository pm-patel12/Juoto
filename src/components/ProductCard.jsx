import React, { useState } from "react";
import { useStoreConfig } from "../StoreConfigContext";

const ProductCard = ({ data }) => {
  // Store configuration
  const storeConfig = useStoreConfig();
  const currencySymnol = storeConfig.brandInfo.currencySymnol;
  const { cardStyle, imgRatio } = storeConfig.theme.prodCardType;

  // local state only to toggle ADD → counter
  const [showCounter, setShowCounter] = useState(false);

  const renderAction = () => {
    if (!data.isInStock) {
      return <button className="ctm-btn out-stock-btn">OUT OF STOCK</button>;
    }

    return (
      <div
        className={`action-wrap ${showCounter ? "show-counter" : ""}`}
        onClick={() => !showCounter && setShowCounter(true)}
      >
        <span className="btn-label">ADD</span>

        <div className="counter-ui">
          <button className="minus">−</button>
          <input type="text" value="1" readOnly />
          <button className="plus">+</button>
        </div>
      </div>
    );
  };

  if (cardStyle === "list") {
    return (
      <div className={`product-list ${!data.isInStock && "outofstock"}`}>
        <div className={`prod-img ${imgRatio === "2x2" ? "square" : "rectangle"}`}>
          <img src={data.photo} alt={data.name} />
        </div>
        <div className="prod-content">
          <p className="prod-name">{data.name}</p>
          <div className="prod-price">
            <span>{currencySymnol}{data.price}</span>
            {data.discount_price && (
              <s>{currencySymnol}{data.discount_price}</s>
            )}
          </div>
          <p className="desc">{data.description}</p>
          {renderAction()}
        </div>
      </div>
    );
  }

  return (
    <div className={`product-grid ${!data.isInStock && "outofstock"}`}>
      <div className={`prod-img ${imgRatio === "2x2" ? "square" : "rectangle"}`}>
        <img src={data.photo} alt={data.name} />
      </div>
      <div className="prod-content">
        <p className="prod-name">{data.name}</p>
        <div className="prod-price">
          <span>{currencySymnol}{data.price}</span>
          {data.discount_price && (
            <s>{currencySymnol}{data.discount_price}</s>
          )}
        </div>
        {renderAction()}
      </div>
    </div>
  );
};

export default ProductCard;
