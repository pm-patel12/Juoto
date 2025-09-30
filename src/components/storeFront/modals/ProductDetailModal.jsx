import React from "react";
import { TbCheck, TbX } from "react-icons/tb";
import nonVag from "../../../assets/images/icons/non-vag.svg";
const ProductDetailModal = () => {
  // const { openModal, closeModal } = useModal();

  return (
    <div
      className="modal fade product-details-modal"
      id="productDetailModal"
      data-bs-keyboard="true"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-transparent border-0">
          <div className="product-details-body">
            <button
              className="close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <TbX style={{ stroke: "var(--text-700)" }} />
            </button>
            <div className="inner">
              <div className="prodImg vag">
                <div className="tag">New</div>
                <img
                  src="https://www.acouplecooks.com/wp-content/uploads/2022/10/Margherita-Pizza-093.jpg"
                  alt=""
                />
              </div>
              <div className="prodDetail">
                <div className="prod-info">
                  <h3>Grilled Chicken and Hummus Pita Pocket</h3>
                  <p>
                    Serves 1 | [Energy - 295 kcal | Protein - 12gm] Beetroot
                    hummus and boiled egg with fresh lettuce and black olives in
                    a nutritious pita for a balanced meal.
                  </p>
                  <div className="prod-variation">
                    <div className="variation">
                      <div className="multi-option-select-wrap checkout-service-wrap pb-3">
                        <div>
                          <input
                            type="radio"
                            name="payment-option"
                            id="paymentOption"
                          />
                          <label htmlFor="paymentOption" className="card">
                            <div className="d-flex align-items-center gap-2">
                              <div className="check-icon">
                                <TbCheck />
                              </div>
                              <img src={nonVag} alt="Non vag" />
                              <p className="m-0">Add Chicken Tikka Peaces</p>
                            </div>
                            <span className="m-0 small text-nowrap">
                              + $10.00
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="payment-option"
                            id="paymentOption2"
                          />
                          <label htmlFor="paymentOption2" className="card">
                            <div className="d-flex align-items-center gap-2">
                              <div className="check-icon">
                                <TbCheck />
                              </div>
                              <p className="m-0">Add Meet Tikka Peaces </p>
                            </div>
                            <span className="m-0 small text-nowrap">
                              + $10.00
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="payment-option"
                            id="paymentOption2"
                          />
                          <label htmlFor="paymentOption2" className="card">
                            <div className="d-flex align-items-center gap-2">
                              <div className="check-icon">
                                <TbCheck />
                              </div>
                              <p className="m-0">Add Extra Cheese (50gm)</p>
                            </div>
                            <span className="m-0 small text-nowrap">
                              + $10.00
                            </span>
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="payment-option"
                            id="paymentOption2"
                          />
                          <label htmlFor="paymentOption2" className="card">
                            <div className="d-flex align-items-center gap-2">
                              <div className="check-icon">
                                <TbCheck />
                              </div>
                              <img src={nonVag} alt="Non vag" />
                              <p className="m-0">
                                Add some more long variaent title & text
                              </p>
                            </div>
                            <span className="m-0 small text-nowrap">
                              + $10.00
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="prod-meta">
                  <div className="price-wrap">
                    $30.00
                    <s>$69.00</s>
                  </div>
                  <button className="ctm-btn px-4">ADD</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
