"use client";

import { useEffect } from "react";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

import Clients from "@/components/Clients/Clients";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyUs from "@/components/WhyUs/WhyUs";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 10,
    });
  });

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Clients />
        <Services />
        <Portfolio />
        <Testimonials />
      </div>
    </main>
  );
}
