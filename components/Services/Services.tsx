import { services } from "@/data";
import React from "react";

const Services = () => {
  return (
    <div className="py-20" data-aos="zoom-in" data-aos-delay="500">
      <h1
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Services
      </h1>

      <div>
        {services.map(({ id, img, title, description, link }) => (
          <div
            key={id}
            className={`flex flex-col md:flex-row ${
              id % 2 === 0 ? "md:flex-row-reverse" : ""
            } items-center mb-12`}
          >
            <div className="md:w-1/2 p-4">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>

            <div className="md:w-1/2 p-4">
              <img
                src={img}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
