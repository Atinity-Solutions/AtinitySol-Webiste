import { HoverEffect } from "../ui/card-hover-effect";
import { PiAppStoreLogo, PiMonitor, PiStorefront } from "react-icons/pi";

import { MdDesignServices } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { SiHostinger } from "react-icons/si";

export const services = [
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <MdDesignServices className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "UI / UX Designing",
    description: `We bring your digital vision to life with exceptional UI/UX design services, creating visually stunning and user-friendly interfaces.`,
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiMonitor className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Web Development",
    description: `We specialize in crafting custom websites that reflect your brand and deliver a seamless user experience. Our designs ensure both aesthetics and functionality.`,
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiStorefront className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Digital Marketing",
    description: `We elevate your brand’s online presence with strategic digital marketing to attract, engage, and convert your target audience, driving business growth.`,
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <AiOutlineProject className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Project Management",
    description: `We expertly guide projects from inception to completion, ensuring on-time, on-budget delivery with the highest quality standards.`,
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <PiAppStoreLogo className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "App Development",
    description: `We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.`,
  },
  {
    icon: (
      <div className="bg-blue-100 p-4 rounded-full">
        <SiHostinger className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Hosting Provider",
    description: `Our comprehensive managed hosting services ensure smooth, secure website or application operation with reliable performance, top-notch security, and expert support.`,
  },
];

const ServicesDetails = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={services} />
    </div>
  );
};

export default ServicesDetails;
