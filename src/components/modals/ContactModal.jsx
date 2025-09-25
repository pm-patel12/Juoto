import React from "react";

const ContactModal = () => {
  return (
    <div
      className="modal fade"
      id="contactModal"
      data-bs-keyboard="true"
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Contact Us
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="ctm-editor">
              <p>
                Welcome to The Spice Garden, where every dish is a journey
                through flavor and tradition. 🍴✨
              </p>
              <p>
                We believe that food is an experience — and our pizzas are
                crafted to delight your senses. From our hand-kneaded dough to
                our signature spice blends, every recipe is designed to bring
                you warmth, freshness, and unforgettable taste.
              </p>

              <p>
                At The Spice Garden, we mix classic Italian flavors with a touch
                of local spices to create pizzas that feel both authentic and
                unique. Whether it’s a cheesy Margherita, a sizzling Tandoori
                Paneer, or a bold Pepperoni, our menu is made to satisfy every
                craving.
              </p>

              <ul>
                <li>🌟 Why Choose The Spice Garden?</li>
                <li>Fresh, farm-to-table ingredients 🌱</li>
                <li>Authentic sauces made in-house 🍅</li>
                <li>Customizable pizzas with your favorite toppings 🧀🍄</li>
                <li>Quick delivery & cozy dine-in experience 🚚🏡</li>
              </ul>

              <p>
                Because here at The Spice Garden, it’s not just pizza — it’s a
                story of love, flavor, and togetherness. ❤️🍕
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
