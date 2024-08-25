"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <div className=" pt-36">
      <div className="flex justify-center relative my-1 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default Logo;
