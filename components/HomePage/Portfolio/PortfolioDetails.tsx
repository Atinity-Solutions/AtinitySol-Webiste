"use client";

import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { portfolio, techStack } from "@/data";
import Image from "next/image";

interface Tech {
  id: number;
  src: string;
  alt: string;
}

const PortfolioDetails = () => {
  // Helper function to get tech stack icons
  const getTechStackIcons = (iconIds: number[]) => {
    return iconIds.map((iconId) => {
      const tech = techStack.find((tech: Tech) => tech.id === iconId);
      return tech ? (
        <Image
          key={tech.id}
          src={tech.src}
          alt={tech.alt}
          className="p-2"
          width={40}
          height={40}
        />
      ) : null;
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
      {portfolio.map(({ id, title, des, img, iconLists, link }) => (
        <div
          className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          key={id}
        >
          <PinContainer title={title} href={link}>
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
              <div
                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                style={{ backgroundColor: "#13162D" }}
              >
                <Image
                  src="/bg.png"
                  alt="background image"
                  width={500}
                  height={500}
                />
              </div>
              <Image
                src={img}
                alt="portfolio cover"
                className="z-10 absolute bottom-0"
                width={500}
                height={500}
              />
            </div>

            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
              {title}
            </h1>

            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
              style={{
                color: "#BEC1DD",
                margin: "1vh 0",
              }}
            >
              {des}
            </p>

            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {getTechStackIcons(iconLists)}
              </div>

              <div className="flex justify-center items-center">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  Check Live Site
                </p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </div>
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  );
};

export default PortfolioDetails;
