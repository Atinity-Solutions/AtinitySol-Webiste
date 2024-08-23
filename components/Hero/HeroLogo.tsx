"use client";

import Image from "next/image";

const HeroLogo = () => {
  return (
    <>
      <div>
        <Image
          src="/lightModeLogo.svg"
          alt="logo"
          className=" my-7"
          width={100}
          height={100}
        />
      </div>
      <div>
        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-10">
          Atinity Solutions Pvt Ltd.
        </h2>
      </div>
    </>
  );
};

export default HeroLogo;
