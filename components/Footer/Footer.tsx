"use client";

import Image from "next/image";
import FooterContact from "./FooterContact";
import FooterCopyright from "./FooterCopyright";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="w-full pt-20 pb-5">
          {/* background grid */}
          <div
            className="w-full absolute left-0 -bottom-72 min-h-96"
            data-aos="fade-up"
            data-aos-offset="500"
          >
            <Image
              src="/footer-grid.svg"
              alt="grid"
              className="w-full h-full opacity-50 "
              width={100}
              height={100}
            />
          </div>

          <div
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          >
            <FooterContact />
          </div>

          <div className="flex mt-10 md:flex-row flex-col justify-between items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
            >
              <FooterCopyright />
            </div>
            <div>
              <FooterSocial />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
