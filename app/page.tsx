"use client";

import { useEffect } from "react";

// import aos
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/HomePage/Hero/Hero";
import OurServices from "@/components/HomePage/OurServices/OurServices";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Portfolio from "@/components/HomePage/Portfolio/Portfolio";
import WhyUs from "@/components/HomePage/WhyUs/WhyUs";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  });

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <OurServices />
        <AboutUs />
        <Portfolio />
        <WhyUs />
      </div>
    </main>
  );
}
