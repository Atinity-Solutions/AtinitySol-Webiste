"use client";

import { ourTeam } from "@/data";

const OurTeamDetails = () => {
  return (
    <div
      className="grid lg:grid-cols-3 gap-6 mt-14"
      data-aos="fade-down"
      data-aos-offset="400"
    >
      {ourTeam.map((team) => (
        <div className="shadow-lg rounded-lg">
          <img className="rounded-t-lg" src={team.image} alt="" />
          <div className="p-5">
            <h3 className="text-3xl font-bold text-slate-700 mb-3">
              {team.name}
            </h3>
            <p className="text-lg font-normal text-gray-600">{team.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurTeamDetails;
