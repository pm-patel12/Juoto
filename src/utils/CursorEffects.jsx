import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const [cursorType, setCursorType] = useState("default");

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Follow mouse
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.18,
        ease: "power2.out",
      });
    };

    // Handle hover elements
    const handleEnter = (e) => {
      const type = e.currentTarget.dataset.cursor;
      if (type) {
        setCursorType(type);
      }
    };

    const handleLeave = () => {
      setCursorType("default");
    };

    // Attach listeners for anything with data-cursor attr
    const hoverables = document.querySelectorAll("[data-cursor]");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    window.addEventListener("mousemove", moveCursor);

    // cleanup
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  // Custom rendering for each type
  const renderCursorContent = () => {
    switch (cursorType) {
      case "link":
        return <span className="cursor-icon">🔗</span>;
      case "slider":
        return <span className="cursor-icon">➡️</span>;
      case "image":
        return (
          <img
            src="https://placekitten.com/40/40"
            alt="cursor-img"
            className="cursor-img"
          />
        );
      default:
        return <span className="cursor-dot" />; // default fallback
    }
  };

  return (
    <div ref={cursorRef} className="custom-cursor">
      {renderCursorContent()}
    </div>
  );
};

export default Cursor;
