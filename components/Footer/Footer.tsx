"use client";

import FooterDetails from "./FooterDetails";

const Footer = () => {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FooterDetails />
      </div>
    </div>
  );
};

export default Footer;
