"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/Card";
import Link from "next/link";
import { services } from "@/data";

const ServicesDetails = () => {
  return (
    <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
      {services.map(({ id, title, des, img }) => (
        <div
          className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center"
          key={id}
        >
          <CardContainer className="inter-var">
            <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {title}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={img}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {des}
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Learn More →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      ))}
    </div>
  );
};

export default ServicesDetails;
