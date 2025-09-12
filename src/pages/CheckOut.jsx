import CheckOutServices from "../components/CheckOutServices";
import PaymentOptions from "../components/PaymentOptions";
import CheckOutHeader from "../components/storeHeader/CheckOutHeader";
import { TbSquarePlus } from "react-icons/tb";
import { TbTrash } from "react-icons/tb";

const CheckOut = () => {
  return (
    <>
      <main className="checkout-page">
        <header>
          <CheckOutHeader />
        </header>
        <div className="container">
          <div className="row py-4">
            <div className="col-md-6 col-12 mb-3">
              {/* Customer Details Form */}
              <div className="card p-3 mb-3">
                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                  <p className="m-0 fw-semibold">Customer Details</p>
                  <button className="ctm-btn dull-btn btn-sm">
                    <TbSquarePlus style={{ stroke: "var(--text-700" }} />
                    Add item
                  </button>
                </div>
                <hr />
                <div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Full Name
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">
                      Whatsapp Number
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div>
                    <label htmlFor="" className="form-label">
                      Email ID (Optional)
                    </label>
                    <div className="form-control input-hasNumSlt">
                      <select>
                        <option value="">+321</option>
                        <option value="">+1</option>
                        <option value="">+2</option>
                        <option value="">+91</option>
                      </select>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Checkout Services/Delivery Type */}
              <CheckOutServices />
              {/* Payment Options */}
              <PaymentOptions />
            </div>
            <div className="col-md-6 col-12 mb-3">
              <div className="card p-3 mb-3">
                {/* Cart Products */}
                <div className="mb-4">
                  <div className="cart-product-card">
                    <div className="d-flex align-items-start gap-2 flex-wrap flex-sm-nowrap">
                      <div className="prod-img">
                        <img src="" alt="" />
                      </div>
                      <div>
                        <p className="mb-1">Capsicum Pizza [8 inches]</p>
                        <div className="d-flex flex-wrap column-gap-3 row-gap-2">
                          <div className="d-flex gap-2 align-items-center">
                            <span className="small m-0 fw-semibold">18$</span>
                            <s className="small m-0 light-text">18$</s>
                          </div>
                          <ul className="d-flex gap-2 flex-wrap align-items-center">
                            <li>Regular</li>
                            <li>Extra cheese</li>
                            <li>Extra cheese</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center justify-content-between">
                      <div className="prod-counter">
                        <button>-</button>
                        <input type="text" value="1" />
                        <button>+</button>
                      </div>
                      <button className="delete-btn">
                        <TbTrash />
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-card">
                    <div className="d-flex align-items-start gap-2 flex-wrap flex-sm-nowrap">
                      <div className="prod-img">
                        <img src="" alt="" />
                      </div>
                      <div>
                        <p className="mb-1">Capsicum Pizza [8 inches]</p>
                        <div className="d-flex flex-wrap column-gap-3 row-gap-2">
                          <div className="d-flex gap-2 align-items-center">
                            <span className="small m-0 fw-semibold">18$</span>
                            <s className="small m-0 light-text">18$</s>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center justify-content-between">
                      <div className="prod-counter">
                        <button>-</button>
                        <input type="text" value="1" />
                        <button>+</button>
                      </div>
                      <button className="delete-btn">
                        <TbTrash />
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-card">
                    <div className="d-flex align-items-start gap-2 flex-wrap flex-sm-nowrap">
                      <div className="prod-img">
                        <img src="" alt="" />
                      </div>
                      <div>
                        <p className="mb-1">Capsicum Pizza [8 inches]</p>
                        <div className="d-flex flex-wrap column-gap-3 row-gap-2">
                          <div className="d-flex gap-2 align-items-center">
                            <span className="small m-0 fw-semibold">18$</span>
                            <s className="small m-0 light-text">18$</s>
                          </div>
                          <ul className="d-flex gap-2 flex-wrap align-items-center">
                            <li>Regular</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center justify-content-between">
                      <div className="prod-counter">
                        <button>-</button>
                        <input type="text" value="1" />
                        <button>+</button>
                      </div>
                      <button className="delete-btn">
                        <TbTrash />
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-card">
                    <div className="d-flex align-items-start gap-2 flex-wrap flex-sm-nowrap">
                      <div className="prod-img">
                        <img src="" alt="" />
                      </div>
                      <div>
                        <p className="mb-1">Capsicum Pizza [8 inches]</p>
                        <div className="d-flex flex-wrap column-gap-3 row-gap-2">
                          <div className="d-flex gap-2 align-items-center">
                            <span className="small m-0 fw-semibold">18$</span>
                            <s className="small m-0 light-text">18$</s>
                          </div>
                          <ul className="d-flex gap-2 flex-wrap align-items-center">
                            <li>Regular</li>
                            <li>Extra cheese</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-2 align-items-center justify-content-between">
                      <div className="prod-counter">
                        <button>-</button>
                        <input type="text" value="1" />
                        <button>+</button>
                      </div>
                      <button className="delete-btn">
                        <TbTrash />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Coupon & Discount Code */}
                <div className="d-flex gap-2 mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Coupon & Discount Code"
                  />
                  <button className="ctm-btn px-4" disabled>
                    Apply
                  </button>
                </div>
                {/* Order Summary & total */}
                <div className="w-100">
                  <ul className="w-100 m-0 p-0">
                    <li className="d-flex align-items-center justify-content-between gap-2 mb-2">
                      <span className="small light-text">Items (20)</span>
                      <span className="small light-text">234.00 $</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap-2 mb-2">
                      <span className="small light-text">Others</span>
                      <span className="small light-text">0.00 $</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap-2 mb-2">
                      <span className="small light-text">Service Charge</span>
                      <span className="small light-text">4.00 $</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between gap-2 mb-2">
                      <span className="small light-text">
                        Tax inclusive (21%)
                      </span>
                      <span className="small light-text">52.00 $</span>
                    </li>
                    <hr className="dashed my-3" />
                    <li className="d-flex align-items-center justify-content-between gap-2 mb-2">
                      <p className="m-0 p-0">Tax inclusive (21%)</p>
                      <p className="m-0 p-0">52.00 $</p>
                    </li>
                    <hr className="dashed my-3" />
                    <p className="small m-0 text-center green-text">
                      🥳 You will save $20.00 on this order
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CheckOut;
