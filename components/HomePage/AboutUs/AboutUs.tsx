"use client";

import AboutUsDetails from "./AboutUsDetails";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <div
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        <h1
          className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
        >
          About Us
        </h1>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        <AboutUsDetails />
      </div>
    </div>
  );
};

export default AboutUs;
