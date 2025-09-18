import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TbArrowsMoveHorizontal } from "react-icons/tb";

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const iconRef = useRef(null);

  const [cursorType, setCursorType] = useState("default");
  const isDragging = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const icon = iconRef.current;

    const moveCursor = (e) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.to(icon, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
        ease: "power3.out",
      });
    };

    const handleEnter = (e) => {
      const type = e.currentTarget.dataset.cursor;
      if (type) setCursorType(type);
    };

    const handleLeave = () => {
      if (!isDragging.current) setCursorType("default");
    };

    // Drag start
    const handleDown = () => {
      if (cursorType === "slider") {
        isDragging.current = true;
        gsap.to(iconRef.current, {
          backgroundColor: "var(--color-primary-500)",
          scale: 1.2,
          duration: 0,
        });
      }
    };

    // Drag move → force update
    const handleMove = (e) => {
      if (isDragging.current) moveCursor(e);
    };

    // Drag end
    const handleUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        gsap.to(iconRef.current, {
          backgroundColor: "var(--color-primary-300)",
          scale: 1,
          duration: 0,
        });
      }
    };

    // Hoverable elements
    const hoverables = document.querySelectorAll("[data-cursor]");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    window.addEventListener("pointermove", moveCursor);
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);

      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [cursorType]);

  useEffect(() => {
    if (cursorType === "default") {
      gsap.to([dotRef.current, ringRef.current], {
        autoAlpha: 1,
        scale: 1,
        duration: 0,
        ease: "power3.out",
      });
      gsap.to(iconRef.current, {
        autoAlpha: 0,
        scale: 0.8,
        duration: 0,
        ease: "power3.in",
      });
    } else {
      gsap.to([dotRef.current, ringRef.current], {
        autoAlpha: 0,
        scale: 0.8,
        duration: 0,
        ease: "power3.in",
      });
      gsap.to(iconRef.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0,
        ease: "power3.out",
      });
    }
  }, [cursorType]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>

      <div ref={iconRef} className="cursor-icon">
        {cursorType === "link" && "🔗"}
        {cursorType === "slider" && <TbArrowsMoveHorizontal />}
        {cursorType === "image" && (
          <img src="https://placekitten.com/40/40" alt="cursor" />
        )}
      </div>
    </>
  );
};

export default Cursor;
