"use client";

import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "../ui/magic-button";
import Link from "next/link";

const FooterContact = () => {
  return (
    <div className="flex flex-col items-center">
      <h1
        className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Ready to take digital presence to the next level?
      </h1>
      <p className="text-white-200 md:mt-10 text-center">
        Reach out to us today and let&apos;s discuss how We can help you achieve
        your goals.
      </p>
      <Link href="mailto:info@atinitysol.com">
        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
        />
      </Link>
    </div>
  );
};

export default FooterContact;
