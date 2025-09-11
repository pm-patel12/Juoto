import { deliveryType } from "../staticData";
import { TbCheck } from "react-icons/tb";

const CheckOutServices = () => {
  return (
    <>
      <div className="card p-3 mb-3">
        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
          <p className="m-0 fw-semibold">Service Type</p>
        </div>
        <hr />
        <div className="multi-option-select-wrap checkout-service-wrap">
          {deliveryType.length > 0 &&
            deliveryType.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    type="radio"
                    name="checkout-service"
                    id={`checkoutService${item.id}`}
                  />
                  <label htmlFor={`checkoutService${item.id}`} className="card">
                    <div className="icon">
                      <TbCheck />
                    </div>
                    <div className="">
                      <p>{item.title}</p>
                      <ul>
                        {item.instructions.length > 0 &&
                          item.instructions.map((instruction, index) => {
                            return <li key={index}>{instruction}</li>;
                          })}
                      </ul>
                    </div>
                  </label>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CheckOutServices;
