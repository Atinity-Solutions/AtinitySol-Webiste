import React from "react";
import { InfiniteMovingCards } from "../ui/InfintyMovingCards";
import { companies } from "@/data";

const Clients = () => {
  return (
    <div className="pt-3 pb-20">
      <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
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
