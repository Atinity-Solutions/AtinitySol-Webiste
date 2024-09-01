"use client";

import Gradient from "@/components/ui/Effects/gradient";
import SpotLight from "@/components/ui/Effects/spotLight";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden w-full">
      <div className="w-full px-5 sm:px-10">
        <SpotLight />
        <Gradient />
        <Contact />
      </div>
    </main>
  );
}
