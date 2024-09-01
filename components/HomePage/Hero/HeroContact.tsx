"use client";

import React from "react";
import MagicButton from "@/components/ui/magic-button";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

const HeroContact = () => {
  return (
    <div data-aos="fade-down">
      <Link href="mailto:info@atinitysol.com">
        <MagicButton
          title="Contact Us"
          icon={<FaLocationArrow />}
          position="right"
        />
      </Link>
    </div>
  );
};

export default HeroContact;
