"use client";

import { useEffect } from "react";

// import aos
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "@/components/Hero/Hero";
import Testimonials from "@/components/Testimonials/Testimonials";
import OurServices from "@/components/OurServices/OurServices";
import Portfolio from "@/components/Portfolio/Portfolio";
import OurApproach from "@/components/OurApproach/OurApproach";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  });

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <OurServices />
        <Portfolio />
      </div>
    </main>
  );
}
