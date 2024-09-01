"use client";

import OurServicesDetails from "./OurServicesDetails";

const OurServices = () => {
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
        Streamline your business with our services
      </div>
      <p
        className="mt-4 text-lg font-normal 
          text-neutral-300 max-w-lg 
          text-center mx-auto"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        From website design to social media management, We offer a wide range of
        services to help you grow your business.
      </p>

      <div
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        <OurServicesDetails />
      </div>
    </div>
  );
};

export default OurServices;
