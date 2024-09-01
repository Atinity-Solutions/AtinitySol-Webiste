"use client";

import React from "react";
import { MobileNavbar } from "@/components/Header/MobileNavbar";
import { Navbar } from "@/components/Header/Navbar";

const Header = () => {
  return (
    <header className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
      </div>
      <MobileNavbar />
    </header>
  );
};

export default Header;
