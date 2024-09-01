"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.2 } },
};

const FooterCopyright = () => {
  return (
    <motion.div
      className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center cursor-pointer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Link href="/" aria-label="Home">
          <Image
            src="/lightModeLogo.svg"
            alt="Company logo"
            className="my-7"
            width={100}
            height={100}
            style={{ width: "100px", height: "100px" }} // Ensure CSS styles don't break aspect ratio
            priority
            sizes="(max-width: 640px) 100px, 100px" // Adjust sizes based on breakpoints
          />
        </Link>
      </motion.div>
      <motion.p
        className="md:text-base text-sm md:font-normal font-light"
        variants={itemVariants} // Reusing itemVariants for consistency
      >
        Copyright © 2024 Atinity Solutions
      </motion.p>
    </motion.div>
  );
};

export default FooterCopyright;
