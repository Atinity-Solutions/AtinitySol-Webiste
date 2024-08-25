"use client";

import Gradient from "@/components/ui/Effects/gradient";
import SpotLight from "@/components/ui/Effects/spotLight";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <SpotLight />
        <Gradient />
        Product
      </div>
    </main>
  );
}
