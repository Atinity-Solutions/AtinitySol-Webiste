"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { portfolio, techStack } from "@/data";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

type PortfolioItem = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: number[];
  link: string;
  githubLink?: string;
};

type Tech = {
  id: number;
  src: string;
  alt: string;
};

function getTechStackIcons(ids: number[], techStack: Tech[]): Tech[] {
  return ids
    .map((id) => techStack.find((tech) => tech.id === id))
    .filter((tech) => tech !== undefined) as Tech[];
}

const PortfolioDetails = () => {
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
                <Image src="/bg.png" alt="bgimg" width={400} height={400} />
              </div>
              <Image
                src={img}
                alt="cover"
                className="z-10 absolute bottom-0"
                width={400}
                height={400}
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
                {getTechStackIcons(iconLists, techStack).map((tech) => (
                  <div
                    key={tech.id}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  >
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      className="p-2"
                      width={100}
                      height={100}
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center items-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple text-sm lg:text-xl"
                >
                  Check Live Site
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  );
};

export default PortfolioDetails;
