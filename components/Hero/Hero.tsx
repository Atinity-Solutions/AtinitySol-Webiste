import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "../ui/magic-button";
import { Spotlight } from "../ui/spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";

import images from "@/assets/img";
import { HeroGlobe } from "./HeroGlobe";

const Hero = () => {
  return (
    <div className="pb-[5px] pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div
        className="flex justify-center relative my-1 z-10"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="w-full h-full object-cover absolute mix-blend-overlay -top-10">
            <HeroGlobe />
          </div>
          <div data-aos="fade-down">
            <Image
              src={images.LightThemeLogo2}
              alt="logo"
              className="size-[100px] my-7"
            />
          </div>
          <div data-aos="fade-down">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-10">
              Atinity Solutions Pvt Ltd.
            </h2>
          </div>

          <TextGenerateEffect
            className="text-center text-4xl md:text-7xl lg:text-9xl"
            words="Empowering Digital Innovation, At Infinity and Beyond"
          />

          <div data-aos="fade-down">
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              An IT Solution Providers all in one Place
            </p>
          </div>

          <div data-aos="fade-down">
            <a href="mailto:info@atinitysol.com">
              <MagicButton
                title="Book a Call"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
