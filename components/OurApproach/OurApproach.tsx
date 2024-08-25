"use client";

import OurApproachDetails from "./OurApproachDetails";

const OurApproach = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20 mb-20"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        Our Approach
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        <OurApproachDetails />
      </div>
    </div>
  );
};

export default OurApproach;
