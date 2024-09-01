"use client";

import { services } from "@/data";
import Image from "next/image";
import Link from "next/link";
import MagicButton from "../ui/magic-button";
import { FaLocationArrow } from "react-icons/fa6";

const ServicesDetails = () => {
  const renderTitleWithHighlightedParts = (title: string) => {
    const words = title.split(" ");
    const lastWord = words.pop(); // Extract the last word
    const beforeLastWords = words.join(" "); // Join the remaining words

    return (
      <span>
        <span className="text-blue-600">{beforeLastWords} </span>
        <span className="text-white">{lastWord}</span>{" "}
        {/* Different color for the last word */}
      </span>
    );
  };

  return (
    <div className="relative max-w-7xl mx-auto py-20">
      {services.map(
        (
          { id, img, title, subtitle, description, pointHeading, point, link },
          index
        ) => (
          <div
            key={id}
            className={`flex flex-col md:flex-row gap-10 ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } items-center mb-32`}
          >
            <div className="md:w-1/2 p-4">
              <h1 className="text-4xl font-bold mb-4">
                {renderTitleWithHighlightedParts(title)}
              </h1>
              <h2 className="text-2xl font-bold mb-2">{subtitle}</h2>
              <p className="text-gray-600 mt-4">{description}</p>
              <h2 className="text-2xl font-bold mt-4">{pointHeading}</h2>
              <ul className="list-disc ml-6 mt-4">
                {point.map((item, idx) => (
                  <li key={idx} className="text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={link}>
                <MagicButton
                  title="Learn More"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </Link>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <Image
                src={img}
                alt={title}
                className="w-full h-full rounded-lg shadow-lg"
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ServicesDetails;
