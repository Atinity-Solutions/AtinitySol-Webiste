"use client";

import WhyUsDetails from "./WhyUsDetails";

const WhyUs = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        Why Choose Us?
      </div>
      <div
        className="mt-4 text-lg font-normal 
          text-neutral-300 max-w-lg 
          text-center mx-auto"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        <p className="text-gray-400 mb-12">
          Discover the key reasons why our clients trust us to deliver
          exceptional results.
        </p>
      </div>

      <div
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        <WhyUsDetails />
      </div>
    </div>
  );
};

export default WhyUs;
