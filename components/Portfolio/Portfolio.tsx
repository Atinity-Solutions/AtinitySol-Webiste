"use client";

import PortfolioDetail from "./PortfolioDetails";

const Portfolio = () => {
  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        A Small Selection of Recent Projects
      </h1>

      <PortfolioDetail />
    </div>
  );
};

export default Portfolio;
