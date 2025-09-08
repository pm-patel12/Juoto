import React from "react";
import { TbCirclePercentageFilled } from "react-icons/tb";
import { useStoreConfig } from "../../StoreConfigContext";

const DiscountCouponCard = ({ data }) => {
  const storeConfig = useStoreConfig();
  const currencySymnol = storeConfig.brandInfo.currencySymnol;
  return (
    <div className="discount-coupon-card">
      <div className="d-flex align-items-center gap-2">
        <TbCirclePercentageFilled />
        <div className="">
          <p className="m-0 fw-bold">
            Flat {data.type == "amount" ? currencySymnol : "%"}
            {data.discount} off
          </p>
          <small>
            Use {data.code} | Above {currencySymnol}
            {data.minOrder}
          </small>
        </div>
      </div>
      <div className="divider"></div>
      <ul className="offer-meta">
        <li>Valid till {data.validTill}</li>
        <li>Min Order: {data.minOrder}</li>
      </ul>
    </div>
  );
};

export default DiscountCouponCard;
