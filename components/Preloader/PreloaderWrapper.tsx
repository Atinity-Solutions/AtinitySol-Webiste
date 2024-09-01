"use client";

import { useState, useCallback, useEffect } from "react";
import Preloader from "@/components/Preloader/Preloader";

interface PreloaderWrapperProps {
  children: React.ReactNode;
}

const PreloaderWrapper: React.FC<PreloaderWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Ensure focus management for accessibility
  useEffect(() => {
    if (!isLoading) {
      const mainContent = document.getElementById("main-content");
      mainContent?.focus();
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Preloader
          logoSrc="/lightModeLogo.svg"
          onLoadingComplete={handleLoadingComplete}
        />
      ) : (
        <main
          id="main-content"
          tabIndex={-1} // Accessibility: Ensure focusable element for screen readers
          aria-live="polite" // Accessibility: Ensure screen readers are aware of content updates
        >
          {children}
        </main>
      )}
    </>
  );
};

export default PreloaderWrapper;
