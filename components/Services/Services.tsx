"use client";

import ServicesDetails from "./ServicesDetails";
import ServicesTechStack from "./ServicesTechStack";
import Logo from "@/components/Logo/Logo";

const Services = () => {
  return (
    <>
      <Logo />
      <div
        className="relative max-w-full mx-auto"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        <h1
          className="text-5xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 lg:mb-20"
        >
          Services
        </h1>
        <ServicesDetails />

        <ServicesTechStack />
      </div>
    </>
  );
};

export default Services;
