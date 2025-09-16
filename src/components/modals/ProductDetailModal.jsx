import React from "react";
import { useStoreConfig } from "../../StoreConfigContext";
import { TbX } from "react-icons/tb";

const ProductDetailModal = () => {
  const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });

  // Store configuration
  const storeConfig = useStoreConfig();
  const openingStatus = storeConfig.openingHours.status;
  const openingHours = storeConfig.openingHours.hours;
  // const { openModal, closeModal } = useModal();

  return (
    <div
      className="modal fade"
      id="productDetailModal"
      data-bs-keyboard="true"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-transparent">
          <div className="product-details-modal">
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
                <h3>Grilled Chicken and Hummus Pita Pocket</h3>
                <p>
                  Serves 1 | [Energy - 295 kcal | Protein - 12gm] Beetroot
                  hummus and boiled egg with fresh lettuce and black olives in a
                  nutritious pita for a balanced meal.
                </p>
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
