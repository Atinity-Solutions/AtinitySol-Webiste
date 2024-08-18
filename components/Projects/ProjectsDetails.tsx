"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import { AiOutlineEye } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const ProjectsDetails = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
      {projects.map(({ id, title, des, img, iconLists, link, githubLink }) => (
        <div
          className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          key={id}
        >
          <CardContainer className="inter-var">
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw]  h-[20vh] lg:h-[30vh] mb-10">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-1 mb-5">
                  <Image
                    src={img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <div
                      onClick={() => window.open(link, "_blank")}
                      className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black"
                    >
                      <AiOutlineEye />
                    </div>
                    <div
                      onClick={() => window.open(githubLink, "_blank")}
                      className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-1 bg-black"
                    >
                      <BsGithub />
                    </div>
                  </div>
                </CardItem>

                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {title}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {des}
                </CardItem>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardBody>
            </div>
          </CardContainer>
        </div>
      ))}
    </div>
  );
};

export default ProjectsDetails;
