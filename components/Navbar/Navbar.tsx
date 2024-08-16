"use client";

import { navItems } from "@/data";
import { FloatingNav } from "../ui/floating-navbar";

const Navbar = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
      </div>
    </div>
  );
};

export default Navbar;
