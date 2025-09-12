import React, { useState, useRef } from "react";

const Tooltip = ({ content, direction = "top", children }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);

  const show = () => {
    const rect = triggerRef.current.getBoundingClientRect();
    const tipWidth = 150;
    const tipHeight = 40;
    let top = 0,
      left = 0;

    switch (direction) {
      case "top":
        top = rect.top - tipHeight - 8;
        left = rect.left + rect.width / 2 - tipWidth / 2;
        break;
      case "bottom":
        top = rect.bottom + 8;
        left = rect.left + rect.width / 2 - tipWidth / 2;
        break;
      case "left":
        top = rect.top + rect.height / 2 - tipHeight / 2;
        left = rect.left - tipWidth - 8;
        break;
      case "right":
        top = rect.top + rect.height / 2 - tipHeight / 2;
        left = rect.right + 8;
        break;
      default:
        break;
    }

    setCoords({ top, left });
    setVisible(true);
  };

  const hide = () => setVisible(false);

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={show}
        onMouseLeave={hide}
        style={{ display: "inline-block" }}
      >
        {children}
      </span>

      {visible && (
        <div
          style={{
            position: "fixed",
            top: coords.top,
            left: coords.left,
            padding: "6px 10px",
            background: "#333",
            color: "#fff",
            borderRadius: "4px",
            fontSize: "14px",
            whiteSpace: "nowrap",
            zIndex: 9999,
            transition: "opacity 0.2s ease",
          }}
        >
          {content}
        </div>
      )}
    </>
  );
};

export default Tooltip;
