import React, { useMemo } from "react";
import { useStoreConfig } from "../../StoreConfigContext";

const ProductCard = ({ data }) => {
  // Store configuration
  const storeConfig = useStoreConfig();
  const currencySymnol = storeConfig.brandInfo.currencySymnol;
  const { cardStyle, imgRatio } = storeConfig.theme.prodCardType;

  if (cardStyle == 'list') {
    return (
      <div className={`product-list ${!data.isInStock && 'outofstock'}`}>
        <div className={`prod-img ${imgRatio == '2x2' ? 'square' : 'rectangle'}`}>
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
          <p className="desc">{data.description}</p>
        </div>
        {
          !data.isInStock ?
            <button className="ctm-btn out-stock-btn">OUT OF STOCK</button>
            :
            <button className="ctm-btn cart-btn">ADD</button>
        }
      </div>
    );
  }

  return (
    <div className={`product-grid ${!data.isInStock && 'outofstock'}`}>
      <div className={`prod-img ${imgRatio == '2x2' ? 'square' : 'rectangle'}`}>
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
        {
          !data.isInStock ?
            <button className="ctm-btn out-stock-btn">OUT OF STOCK</button>
            :
            <button className="ctm-btn cart-btn">ADD</button>
        }      </div>
    </div>
  );

};

export default ProductCard;
