"use client";

import React from "react";
import { Tabs } from "../ui/tabs";
import { ourTechnology, techStack } from "@/data";

const ServicesTechStack = () => {
  // Convert `ourTechnology` to the format expected by `Tabs`
  const tabs = ourTechnology.map((tech) => ({
    id: tech.id,
    title: tech.title,
    value: tech.value,
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-y-11 gap-x-0 max-w-5xl mx-auto">
        {tech.logos.map((logoId) => {
          const logo = techStack.find((item) => item.id === logoId);
          return (
            <div key={logoId} className="relative w-10 h-10 mx-auto">
              <img
                src={logo?.src || ""}
                alt={logo?.alt || ""}
                className="h-full w-full object-contain"
              />
            </div>
          );
        })}
      </div>
    ),
  }));

  return (
    <div className="relative max-w-5xl mx-auto py-20">
      <h1
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent text-white bg-opacity-50 mb-20"
      >
        Our{" "}
        <span
          className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50"
        >
          Technology{" "}
        </span>{" "}
        Stack
      </h1>
      <Tabs
        tabs={tabs}
        containerClassName="inter-var"
        buttonClassName="text-white dark:text-neutral-300"
        contentClassName="mt-4"
      />
    </div>
  );
};

export default ServicesTechStack;
