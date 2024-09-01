"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <div className="pt-36">
      <div className="flex justify-center relative my-1 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <Image
            src="/lightModeLogo.svg"
            alt="Atinity Solutions Pvt Ltd Logo"
            width={100}
            height={100}
            priority
            // Set width and height explicitly, but use objectFit to maintain aspect ratio
            style={{ width: 100, height: 100, objectFit: "contain" }}
          />
          <h2
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-10"
            aria-label="Atinity Solutions Pvt Ltd"
            role="heading"
            aria-level={2}
          >
            Atinity Solutions Pvt Ltd.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Logo;
