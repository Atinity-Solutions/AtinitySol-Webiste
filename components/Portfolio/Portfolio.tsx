"use client";

import PortfolioDetail from "./PortfolioDetail";

const Portfolio = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <PortfolioDetail />
    </div>
  );
};

export default Portfolio;
