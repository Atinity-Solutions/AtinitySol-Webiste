"use client";

import PortfolioDetail from "./PortfolioDetail";

const Portfolio = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A Small Selection of{" "}
        <span className="text-purple">Recent Projects</span>
      </h1>
      <PortfolioDetail />
    </div>
  );
};

export default Portfolio;
