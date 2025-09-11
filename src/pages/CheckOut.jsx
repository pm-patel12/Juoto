import CheckOutServices from "../components/CheckOutServices";
import CheckOutHeader from "../components/storeHeader/CheckOutHeader";
import { TbSquarePlus } from "react-icons/tb";

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
              <div className="card p-3 mb-3">
                <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                  <p className="m-0 fw-semibold">Customer Details</p>
                  <button className="ctm-btn dull-btn btn-sm">
                    <TbSquarePlus style={{ stroke: "var(--slate-700" }} />
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
              <CheckOutServices />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CheckOut;
