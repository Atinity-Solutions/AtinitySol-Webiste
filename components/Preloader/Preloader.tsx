"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface PreloaderProps {
  logoSrc: string;
  onLoadingComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({
  logoSrc,
  onLoadingComplete,
}) => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  // Memoize the interval logic to prevent unnecessary re-renders
  const updateLoadingPercentage = useCallback(() => {
    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  useEffect(() => {
    updateLoadingPercentage();
  }, [updateLoadingPercentage]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50 overflow-hidden"
      role="status" // Accessibility: Indicate a loading state
      aria-live="polite"
      aria-label="Loading screen"
    >
      <div className="absolute inset-0">
        {/* Spotlight effect */}
        <div
          className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent animate-spotlight"
          aria-hidden="true" // Accessibility: Mark non-essential visuals
        ></div>
      </div>
      <motion.div
        initial={{ opacity: 0.5, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center relative"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Image
            src={logoSrc}
            alt="Company Logo"
            width={200}
            height={200}
            className="w-40 h-40"
            priority
          />
        </motion.div>
        <div className="mt-4 text-white text-lg">
          Loading {loadingPercentage}%
        </div>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${loadingPercentage}%` }}
          className="h-1 bg-white mt-2"
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default Preloader;
