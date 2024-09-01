"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export type Tab<T> = {
  id: number;
  title: string;
  value: string;
  content: React.ReactNode;
  extraData?: T;
};

export interface TabsProps<T> {
  tabs: Tab<T>[];
  containerClassName?: string;
  buttonClassName?: string;
  contentClassName?: string;
  autoSwitchInterval?: number; // Interval in milliseconds for auto-switching tabs
  onTabChange?: (tab: Tab<T>) => void;
}

export const Tabs = <T,>({
  tabs,
  containerClassName,
  buttonClassName,
  contentClassName,
  autoSwitchInterval,
  onTabChange,
}: TabsProps<T>) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value);

  // Automatically switch tabs if interval is provided
  useEffect(() => {
    if (autoSwitchInterval) {
      const tabSwitchInterval = setInterval(() => {
        setActiveTab(
          (prev) => tabs.find((tab) => tab.value !== prev)?.value || prev
        );
      }, autoSwitchInterval);

      return () => clearInterval(tabSwitchInterval);
    }
  }, [autoSwitchInterval, tabs]);

  const handleTabChange = (tabValue: string) => {
    const newTab = tabs.find((tab) => tab.value === tabValue);
    if (newTab) {
      setActiveTab(tabValue);
      if (onTabChange) {
        onTabChange(newTab);
      }
    }
  };

  return (
    <div className={containerClassName}>
      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center space-x-2 no-scrollbar mb-20">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabChange(tab.value)}
            className={`relative py-2 px-4 text-sm md:text-xl font-medium hover:text-gray-700 focus:outline-none ${
              activeTab === tab.value ? "text-blue-600" : ""
            } ${buttonClassName}`}
          >
            {tab.title}
            {activeTab === tab.value && (
              <motion.div
                layoutId="underline"
                className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className={contentClassName}>
        {tabs.map((tab) =>
          activeTab === tab.value ? (
            <div key={tab.value}>{tab.content}</div>
          ) : null
        )}
      </div>
    </div>
  );
};
