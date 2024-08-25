"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import HeroContact from "./HeroContact";
import { HeroGlobe } from "./HeroGlobe";
import HeroLogo from "./HeroLogo";
import Gradient from "@/components/ui/Effects/gradient";
import SpotLight from "@/components/ui/Effects/spotLight";

const Hero = () => {
  return (
    <div className="pb-[5px] pt-36">
      <SpotLight />

      <Gradient />

      <div className="flex justify-center relative my-1 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="w-full h-full object-cover absolute mix-blend-overlay hidden lg:block -top-10">
            <HeroGlobe />
          </div>

          <HeroLogo />

          <TextGenerateEffect
            className="text-center text-4xl md:text-7xl lg:text-9xl"
            words="Empowering Digital Innovation, At Infinity and Beyond"
          />

          <div>
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              An IT Solution Providers all in one Place
            </p>
          </div>

          <HeroContact />
        </div>
      </div>
    </div>
  );
};

export default Hero;
