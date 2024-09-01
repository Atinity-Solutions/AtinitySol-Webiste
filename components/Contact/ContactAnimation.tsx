"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactAnimation = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full bg-blue-500 rounded-lg"
      >
        {/* Add your animation or 3D effect here */}
      </motion.div>
    </div>
  );
};

export default ContactAnimation;
