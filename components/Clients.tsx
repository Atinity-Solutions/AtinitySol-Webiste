import React from "react";
import { InfiniteMovingCards } from "./ui/InfintyMovingCards";
import { companies } from "@/data";

const Clients = () => {
  return (
    <div className="pt-3 pb-20">
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={companies}
          direction="left"
          speed="normal"
        />
      </div>
    </div>
  );
};

export default Clients;
