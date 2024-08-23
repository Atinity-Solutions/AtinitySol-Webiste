"use client";

import { motion } from "framer-motion";

import { textVariant, staggerContainer } from "@/lib/motion";
import OurApproachDetails from "./OurApproachDetails";

const OurApproach = () => {
  return (
    <motion.section
      variants={staggerContainer(0.2, 0.5, Infinity, "loop", 1)} // Adjust repetition settings
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }} // Change once to false for repeat
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
    >
      <motion.div variants={textVariant(0.5)}>
        <h1
          className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
        >
          Our Approach
        </h1>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <OurApproachDetails />
      </div>
    </motion.section>
  );
};

export default OurApproach;
