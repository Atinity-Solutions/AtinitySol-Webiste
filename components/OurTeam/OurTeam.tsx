"use client";

import OurTeamDetails from "./OurTeamDetails";

const OurTeam = () => {
  return (
    <div
      className="max-w-5xl mx-auto py-20"
      data-aos="zoom-in"
      data-aos-delay="500"
    >
      <h1
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Our Team
      </h1>

      <OurTeamDetails />
    </div>
  );
};

export default OurTeam;
