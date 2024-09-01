"use client";

import Gradient from "@/components/ui/Effects/gradient";
import SpotLight from "@/components/ui/Effects/spotLight";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden px-0">
      <SpotLight />
      <Gradient />
      <div className="w-full">
        <Projects />
      </div>
    </main>
  );
}
