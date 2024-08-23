"use client";

import React from "react";
import MagicButton from "../ui/magic-button";
import { FaLocationArrow } from "react-icons/fa6";

const HeroContact = () => {
  return (
    <div data-aos="fade-down">
      <a href="mailto:info@atinitysol.com">
        <MagicButton
          title="Contact Us"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
  );
};

export default HeroContact;
