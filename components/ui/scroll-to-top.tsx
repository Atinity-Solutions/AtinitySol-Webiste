"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation"; // Use next/navigation instead of useRouter in app directory

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname(); // Use usePathname for client-side routing

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      setIsVisible(offset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Scroll to top when pathname changes
    scrollToTop();
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Scroll to top"
    >
      ↑
    </motion.button>
  );
};

export default ScrollToTop;
