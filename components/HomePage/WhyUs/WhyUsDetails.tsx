import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaAward,
} from "react-icons/fa";

const keyPoints = [
  {
    icon: <FaUsers />,
    title: "Expert Team",
    description:
      "Our team consists of industry-leading experts with years of experience.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Solutions",
    description:
      "We provide cutting-edge solutions tailored to your business needs.",
  },
  {
    icon: <FaTools />,
    title: "Custom Development",
    description:
      "We deliver custom software solutions that are scalable and efficient.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security Focused",
    description:
      "We prioritize security in all our projects to protect your data.",
  },
  {
    icon: <FaClock />,
    title: "Timely Delivery",
    description: "We ensure projects are delivered on time, every time.",
  },
  {
    icon: <FaAward />,
    title: "Proven Track Record",
    description: "Our portfolio showcases a history of successful projects.",
  },
];

const WhyUsDetails: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, backgroundColor: "#2d3748" }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <motion.div
                className="text-4xl text-blue-400 mb-4"
                whileHover={{ rotate: 10, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {point.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-gray-400">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsDetails;
