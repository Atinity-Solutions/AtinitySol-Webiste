"use client";

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/ui/magic-button";
import Link from "next/link";
import { motion } from "framer-motion";

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 }, // Move from below
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const FooterContact = () => {
  return (
    <motion.div
      className="flex flex-col items-center text-center mt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-neutral-50 bg-opacity-50">
        Ready to take digital presence to the next level?
      </h1>
      <p className="text-white-200 md:mt-10">
        Reach out to us today and let&apos;s discuss how we can help you achieve
        your goals.
      </p>
      <Link href="mailto:info@atinitysol.com" aria-label="Contact us via email">
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
        />
      </Link>
    </motion.div>
  );
};

export default FooterContact;
