"use client";

import Logo from "../Logo/Logo";

const Contact = () => {
  return (
    <>
      <Logo />
      <div
        className="relative max-w-5xl mx-auto "
        data-aos="zoom-in"
        data-aos-delay="500"
      >
        <h1
          className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 "
        >
          Contact
        </h1>
      </div>
    </>
  );
};

export default Contact;
