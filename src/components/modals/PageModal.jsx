import React from "react";
import { TbX } from "react-icons/tb";

const PageModal = ({ data, closeModal }) => {
  console.log(data);
  return (
    <div
      className="modal slide-to-left"
      id="pageModal"
      data-bs-keyboard="true"
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>{data.name}</h3>
            <button onClick={closeModal()}>
              <TbX />
            </button>
          </div>
          <div className="modal-body px-0">
            <p>
              Welcome to The Spice Garden, where every dish is a journey through
              flavor and tradition. 🍴✨
            </p>
            <p>
              We believe that food is an experience — and our pizzas are crafted
              to delight your senses. From our hand-kneaded dough to our
              signature spice blends, every recipe is designed to bring you
              warmth, freshness, and unforgettable taste.
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
      </div>
    </div>
  );
};

export default PageModal;
