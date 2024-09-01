"use client";

import Image from "next/image";
import FooterContact from "@/components/Footer/FooterContact";
import FooterCopyright from "@/components/Footer/FooterCopyright";
import FooterSocial from "@/components/Footer/FooterSocial";
import { motion } from "framer-motion";

// Define animation variants for the background image
const imageVariants = {
  hidden: { opacity: 0, y: 30 }, // Slightly lower start position for bottom-to-top effect
  visible: {
    opacity: 0.5,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Footer = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="w-full pt-20 pb-5 relative">
          {/* Background grid */}
          <motion.div
            className="w-full absolute left-0 -bottom-72 min-h-96 hidden lg:block" // Hide on smaller screens
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/footer-grid.svg"
              priority
              alt="Decorative grid pattern"
              className="w-full h-full opacity-50"
              width={100}
              height={100}
              style={{ width: "auto", height: "auto" }}
              sizes="(max-width: 1024px) 100vw, 100vw" // Responsive size based on viewport width
            />
          </motion.div>

          <div>
            <FooterContact />
          </div>

          <div className="flex mt-10 md:flex-row flex-col justify-between items-center">
            <div className="mb-10">
              <FooterCopyright />
            </div>
            <div>
              <FooterSocial />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
