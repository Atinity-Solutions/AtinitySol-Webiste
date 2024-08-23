"use client";

import Image from "next/image";
import Link from "next/link";

const FooterCopyright = () => {
  return (
    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
      <Link href="/">
        <Image
          src="/lightModeLogo.svg"
          alt="logo"
          className="cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg mb-5"
          width={70}
          height={70}
        />
      </Link>
      <p className="md:text-base text-sm md:font-normal font-light">
        Copyright © 2024 Atinity Solutions
      </p>
    </div>
  );
};

export default FooterCopyright;
