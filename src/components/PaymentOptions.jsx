import { paymentOptions } from "../staticData";
import { TbCheck } from "react-icons/tb";
import DividerTitle from "./DividerTitle";

const PaymentOptions = () => {
  return (
    <>
      <div className="card p-3 mb-3">
        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
          <p className="m-0 fw-semibold">Payment Options</p>
        </div>
        <hr />
        <div className="multi-option-select-wrap checkout-service-wrap mb-4">
          {paymentOptions.length > 0 &&
            paymentOptions.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    type="radio"
                    name="checkout-service"
                    id={`paymentOption${item.id}`}
                  />
                  <label htmlFor={`paymentOption${item.id}`} className="card">
                    <div className="check-icon">
                      <TbCheck />
                    </div>
                    <div className="icon">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="">
                      <p>{item.title}</p>
                      <ul>
                        <li>{item.instructions}</li>
                      </ul>
                    </div>
                  </label>
                </div>
              );
            })}
        </div>
        <DividerTitle />
        <button className="ctm-btn btn-lg w-100 dark-theme">Place Order</button>
      </div>
      <p className="small text-center m-0 light-text">Safe and Secure Payments. Easy returns. 100% Authentic products.</p>
    </>
  );
};

export default PaymentOptions;
