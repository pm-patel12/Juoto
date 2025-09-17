import React from "react";
import { TbX } from "react-icons/tb";
import { useModal } from "../../hook/useModal";

const PageModal = ({ children }) => {
  const { closeModal } = useModal();
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
            <h3>About The Spice Garden</h3>
            <button onClick={() => closeModal("pageModal")}>
              <TbX />
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageModal;
