"use client";

import { ourServices } from "@/data";
import { HoverEffect } from "../ui/card-hover-effect";

const OurServicesDetails = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={ourServices} />
    </div>
  );
};

export default OurServicesDetails;
