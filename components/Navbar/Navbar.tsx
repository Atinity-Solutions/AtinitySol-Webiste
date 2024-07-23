"use client";

import { navItems } from "@/data";
import { FloatingNav } from "./FloatingNav";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
