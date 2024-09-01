"use client";

import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const logoVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: 0.2, ease: "easeInOut" },
  },
};

const FooterSocial = () => {
  return (
    <motion.div
      className="flex items-center gap-6 md:gap-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialMedia.map((info) => (
        <motion.div key={info.id} variants={logoVariants}>
          <Link
            href={info.link}
            target="_blank"
            aria-label={`Follow us on ${info.name}`}
            className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <Image
              src={info.img}
              alt={`${info.name} icon`}
              width={40}
              height={40}
              priority
              sizes="(max-width: 640px) 40px, 40px"
              style={{ width: "auto", height: "auto" }} // Ensure correct aspect ratio
              // Next.js default image optimization is enabled
            />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FooterSocial;
