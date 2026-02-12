import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function TypingText({ texts, speed = 100, deleteSpeed = 50, pauseDuration = 2000 }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const handleTyping = () => {
      if (isPaused) {
        return;
      }

      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Finished typing, pause before deleting
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseDuration);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isPaused ? pauseDuration : isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, textIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      <span>{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "stepEnd" }}
        style={{
          display: "inline-block",
          width: "3px",
          height: "1em",
          marginLeft: "4px",
          background: "linear-gradient(180deg, #00fff5, #8b5cf6)",
          borderRadius: "2px",
        }}
      />
    </span>
  );
}

export default TypingText;
