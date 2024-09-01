"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorSize = useMotionValue(30); // Single size value for simplicity
  const scale = useTransform(cursorSize, [20, 100], [1, 2]);

  const updateCursorPosition = (event: MouseEvent) => {
    cursorX.set(event.clientX - cursorSize.get() / 2);
    cursorY.set(event.clientY - cursorSize.get() / 2);
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 rounded-full"
      style={{
        width: cursorSize,
        height: cursorSize,
        translateX: cursorX,
        translateY: cursorY,
        scale,
        backgroundColor: "rgba(255, 255, 255, 0.7)", // Lighter color with adjusted opacity
      }}
    />
  );
};

export default CustomCursor;
