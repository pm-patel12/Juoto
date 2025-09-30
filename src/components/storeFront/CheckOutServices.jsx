import { useState } from "react";
import { deliveryType } from "../../staticData";
import { TbCheck } from "react-icons/tb";
import { MdOutlineMyLocation } from "react-icons/md";

const CheckOutServices = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleChange = (item) => {
    setSelectedType(item.type);
  };

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
                    onChange={() => handleChange(item)}
                    // checked={selectedType === item.type}
                  />
                  <label htmlFor={`checkoutService${item.id}`} className="card">
                    <div className="check-icon">
                      <TbCheck />
                    </div>
                    <div>
                      <p>{item.title}</p>
                      <ul>
                        {item.instructions.length > 0 &&
                          item.instructions.map((instruction, i) => (
                            <li key={i}>{instruction}</li>
                          ))}
                      </ul>
                    </div>
                  </label>
                </div>
              );
            })}
        </div>
      </div>

      {(selectedType === "same-day-delivery" ||
        selectedType === "standard-delivery" ||
        selectedType === "selected-day-delivery") && (
        <div className="card p-3 mb-3">
          <button className="ctm-btn dull-btn mb-4">
            <MdOutlineMyLocation style={{ fill: "var(--slate-700)" }} />
            Use my current location
          </button>
          <div className="row">
            <div className="col-12 mb-3">
              <label className="form-label">Select Country</label>
              <select name="" id="" className="form-control">
                <option value="">United States</option>
                <option value="">India</option>
              </select>
            </div>
            <div className="col-12 mb-3">
              <label className="form-label">Street address</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-12 mb-3">
              <label className="form-label">
                Apartment, unit number, suite, etc. (optional)
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md 4 col-12 mb-3">
              <label className="form-label">City</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md 4 col-12 mb-3">
              <label className="form-label">State</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md 4 col-12 mb-3">
              <label className="form-label">Postal code</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
      )}

      {selectedType === "selected-day-delivery" && (
        <div className="card p-3 mb-3">
          <div className="">
            <label className="form-label">Select Date</label>
            <input type="date" className="form-control" />
          </div>
        </div>
      )}

      {selectedType === "self-pick-up" && (
        <div className="card p-3 mb-3">
          <div className="mb-3">
            <label className="form-label">Select Date</label>
            <input type="date" className="form-control" />
          </div>
          <div className="">
            <label className="form-label">Select Time</label>
            <input type="time" className="form-control" />
          </div>
        </div>
      )}
    </>
  );
};

export default CheckOutServices;
