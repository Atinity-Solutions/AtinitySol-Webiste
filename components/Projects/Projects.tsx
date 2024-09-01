"use client";

import Logo from "@/components/Logo/Logo";
import ProjectsDetails from "@/components/Projects/ProjectsDetails";

const Projects = () => {
  return (
    <>
      <Logo />
      <div
        className="relative w-full max-w-full mx-auto"
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        <h1
          className="text-5xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 lg:mb-20"
        >
          Our Success Stories
        </h1>

        <ProjectsDetails />
      </div>
    </>
  );
};

export default Projects;
