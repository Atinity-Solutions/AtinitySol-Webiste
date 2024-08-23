"use client";

import { MobileNavbar } from "./MobileNavbar";
import { Navigation } from "./Navigation";

const Header = () => {
  return (
    <>
      <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Navigation />
        </div>
      </div>
      <MobileNavbar />
    </>
  );
};

export default Header;
