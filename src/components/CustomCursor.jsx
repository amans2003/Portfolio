import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hoverable elements
    const handleElementHover = () => {
      const hoverables = document.querySelectorAll("a, button, input, textarea, [data-cursor-hover]");

      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Initial setup and mutation observer for dynamic elements
    handleElementHover();
    const observer = new MutationObserver(handleElementHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: isHovering ? "50px" : "32px",
          height: isHovering ? "50px" : "32px",
          borderRadius: "50%",
          border: `2px solid ${isHovering ? "#00fff5" : "rgba(255, 255, 255, 0.5)"}`,
          pointerEvents: "none",
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? "rgba(0, 255, 245, 0.1)" : "transparent",
          mixBlendMode: "difference",
          transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
        }}
        animate={{
          x: mousePosition.x - (isHovering ? 25 : 16),
          y: mousePosition.y - (isHovering ? 25 : 16),
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Center dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: isHovering ? "#00fff5" : "#fff",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          boxShadow: isHovering ? "0 0 15px #00fff5, 0 0 30px #00fff5" : "0 0 10px rgba(255, 255, 255, 0.5)",
          transition: "background-color 0.2s ease, box-shadow 0.2s ease",
        }}
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isClicking ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
        }}
      />
    </>
  );
}

export default CustomCursor;
