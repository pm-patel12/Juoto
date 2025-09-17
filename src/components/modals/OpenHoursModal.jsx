import React from "react";
import { TbX } from "react-icons/tb";
import { useAppContext } from "../../ThemeProvider";

const OpenHoursModal = () => {
  const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });

  // Store configuration
  const { storeConfig } = useAppContext();
  const openingStatus = storeConfig.openingHours.status;
  const openingHours = storeConfig.openingHours.hours;
  // const { openModal, closeModal } = useModal();

  return (
    <div
      className="modal fade"
      id="openHoursModal"
      data-bs-keyboard="true"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-transparent">
          <div className="open-hours-modal">
            <button
              className="close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <TbX style={{ stroke: "var(--text-700)" }} />
            </button>
            <h2 className="modal-title fs-5" id="staticBackdropLabel">
              Opening Hours
              {openingStatus === "open" ? (
                <span className="open">Open</span>
              ) : (
                <span className="close">Close</span>
              )}
            </h2>
            <ul>
              {openingHours.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${todayName == item.day && openingStatus}`}
                  >
                    <span>{item.day}</span>
                    <i>-----------</i>
                    <span>
                      {item.open} - {item.close}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenHoursModal;
