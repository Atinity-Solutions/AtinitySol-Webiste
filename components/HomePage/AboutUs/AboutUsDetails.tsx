"use client";

import React, { useState, useEffect } from "react";
import { Tabs } from "../../ui/tabs";
import { aboutUsTab, vision, mission } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"; // Import double quotes icons

const tabContentMap = {
  vision: vision[0].des,
  mission: mission[0].des,
};

const AboutUsDetails = () => {
  const [activeTab, setActiveTab] = useState("vision");

  // Automatically switch tabs every 5 seconds
  useEffect(() => {
    const tabSwitchInterval = setInterval(() => {
      setActiveTab((prev) => (prev === "vision" ? "mission" : "vision"));
    }, 5000);

    return () => clearInterval(tabSwitchInterval);
  }, []);

  const tabs = aboutUsTab.map((tab) => ({
    id: tab.id,
    title: tab.title,
    value: tab.value,
    content: (
      <div className="relative flex items-center">
        {/* Straight Line */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-full bg-gray-500 opacity-50" />

        {/* Double Quotes Icons */}
        <FaQuoteLeft className="absolute text-gray-500 opacity-30 text-4xl left-4 top-1/2 transform -translate-y-1/2" />
        <FaQuoteRight className="absolute text-gray-500 opacity-30 text-4xl right-4 top-1/2 transform -translate-y-1/2" />

        {/* Content */}
        <blockquote className="italic pl-12 pr-8">
          {tabContentMap[tab.value as keyof typeof tabContentMap]}
        </blockquote>
      </div>
    ),
  }));

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start w-full text-white gap-10 mt-20 px-4 md:px-8 py-8">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 mb-8 md:mb-0"
      >
        <Image
          src="/p5.png" // Ensure this path is correct and the image is in the public directory
          alt="About Us Image"
          width={600} // Use fixed width
          height={600} // Use fixed height
          className="object-cover"
          priority
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </motion.div>

      {/* Tabs Section */}
      <div className="w-full md:w-1/2">
        <Tabs
          tabs={tabs}
          containerClassName="inter-var"
          buttonClassName="text-white dark:text-neutral-300"
          contentClassName="mt-4"
          autoSwitchInterval={5000} // Automatically switch tabs every 5 seconds
          onTabChange={(tab) => setActiveTab(tab.value)}
        />
      </div>
    </div>
  );
};

export default AboutUsDetails;
