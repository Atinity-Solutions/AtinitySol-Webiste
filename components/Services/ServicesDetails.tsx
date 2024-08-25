"use client";

import { services } from "@/data";
import Image from "next/image";

const ServicesDetails = () => {
  return (
    <div className="relative max-w-5xl mx-auto py-20">
      {services.map(({ id, img, title, description, link }, index) => (
        <div
          key={id}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          } items-center mb-12`}
        >
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>

          <div className="md:w-1/2 p-4">
            <Image
              src={img}
              alt={title}
              className="w-full h-auto rounded-lg shadow-lg"
              width={100}
              height={100}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesDetails;
