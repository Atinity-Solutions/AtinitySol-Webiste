import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "../ui/magic-button";
import Image from "next/image";

import images from "@/assets/img";
import Link from "next/link";

const FooterDetails = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1
          className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
        >
          Ready to take digital presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 text-center">
          Reach out to us today and let&apos;s discuss how We can help you
          achieve your goals.
        </p>
        <a href="mailto:info@atinitysol.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <Link href="/">
            <Image
              src={images.LightThemeLogo2}
              alt="logo"
              className="w-20 h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg mb-5"
            />
          </Link>
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Atinity Solutions
          </p>
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterDetails;
