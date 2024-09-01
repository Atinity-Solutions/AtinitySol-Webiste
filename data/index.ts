import { PiAppStoreLogo, PiMonitor, PiStorefront } from "react-icons/pi";

import { MdDesignServices } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { SiHostinger } from "react-icons/si";

export const navItems = [
  {
    id: 1.1,
    title: "Home",
    link: "/",
  },
  {
    id: 1.2,
    title: "About",
    link: "about",
  },
  {
    id: 1.3,
    title: "Services",
    dropdown: [2.1, 2.2, 2.3, 2.4, 2.5, 2.6],
    link: "service",
  },
  {
    id: 1.4,
    title: "Projects",
    dropdown: [4.1, 4.2, 4.3, 4.4],
    link: "project",
  },
  // {
  //   id: 1.5,
  //   title: "Products",
  //   link: "product",
  // },
  {
    id: 1.6,
    title: "Contact",
    link: "contact",
  },
];

export const services = [
  {
    id: 2.1,
    icon: MdDesignServices,
    title: "UI / UX Designing",
    description: `We bring your digital vision to life with exceptional UI/UX design services, creating visually stunning and user-friendly interfaces.`,
    img: "/ui.jpg",
    link: "/",
    subtitle: "Elevate Your Brand with Mobile Apps",
    pointHeading: "Explore Ropstam’s Comprehensive Mobile App Services:",
    point: [
      "iOS and Android App Development",
      "Hybrid/Cross-platform App Solutions",
      "Minimum Viable Product (MVP) Development",
      "Custom Mobile App Design & Development",
      "Blockchain-Powered Mobile Apps",
    ],
  },
  {
    id: 2.2,
    icon: PiMonitor,
    title: "Web Development",
    description: `We specialize in crafting custom websites that reflect your brand and deliver a seamless user experience. Our designs ensure both aesthetics and functionality.`,
    img: "/web.jpg",
    link: "/",
    subtitle: "Elevate Your Brand with Mobile Apps",
    pointHeading: "Explore Ropstam’s Comprehensive Mobile App Services:",
    point: [
      "iOS and Android App Development",
      "Hybrid/Cross-platform App Solutions",
      "Minimum Viable Product (MVP) Development",
      "Custom Mobile App Design & Development",
      "Blockchain-Powered Mobile Apps",
    ],
  },
  {
    id: 2.3,
    icon: PiStorefront,
    title: "Digital Marketing",
    description: `We elevate your brand’s online presence with strategic digital marketing to attract, engage, and convert your target audience, driving business growth.`,
    img: "/ui.jpg",
    link: "/",
    subtitle: "Elevate Your Brand with Mobile Apps",
    pointHeading: "Explore Ropstam’s Comprehensive Mobile App Services:",
    point: [
      "iOS and Android App Development",
      "Hybrid/Cross-platform App Solutions",
      "Minimum Viable Product (MVP) Development",
      "Custom Mobile App Design & Development",
      "Blockchain-Powered Mobile Apps",
    ],
  },
  {
    id: 2.4,
    icon: AiOutlineProject,
    title: "Project Management",
    description: `We expertly guide projects from inception to completion, ensuring on-time, on-budget delivery with the highest quality standards.`,
    img: "/web.jpg",
    link: "/",
    subtitle: "Elevate Your Brand with Mobile Apps",
    pointHeading: "Explore Ropstam’s Comprehensive Mobile App Services:",
    point: [
      "iOS and Android App Development",
      "Hybrid/Cross-platform App Solutions",
      "Minimum Viable Product (MVP) Development",
      "Custom Mobile App Design & Development",
      "Blockchain-Powered Mobile Apps",
    ],
  },
  {
    id: 2.5,
    icon: PiAppStoreLogo,
    title: "App Development",
    description: `We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.`,
    img: "/ui.jpg",
    link: "/",
    subtitle: "Elevate Your Brand with Mobile Apps",
    pointHeading: "Explore Ropstam’s Comprehensive Mobile App Services:",
    point: [
      "iOS and Android App Development",
      "Hybrid/Cross-platform App Solutions",
      "Minimum Viable Product (MVP) Development",
      "Custom Mobile App Design & Development",
      "Blockchain-Powered Mobile Apps",
    ],
  },
  {
    id: 2.6,
    icon: SiHostinger,
    title: "Hosting Provider",
    description: `Our comprehensive managed hosting services ensure smooth, secure website or application operation with reliable performance, top-notch security, and expert support.`,
    img: "/web.jpg",
    link: "/",
    subtitle: "Elevate Your Brand with Mobile Apps",
    pointHeading: "Explore Ropstam’s Comprehensive Mobile App Services:",
    point: [
      "iOS and Android App Development",
      "Hybrid/Cross-platform App Solutions",
      "Minimum Viable Product (MVP) Development",
      "Custom Mobile App Design & Development",
      "Blockchain-Powered Mobile Apps",
    ],
  },
];

export const techStack = [
  {
    id: 3.1,
    src: "/re.svg",
    alt: "React",
  },
  {
    id: 3.2,
    src: "/next.svg",
    alt: "Next Js",
  },
  {
    id: 3.3,
    src: "/tail.svg",
    alt: "Tailwind CSS",
  },
  {
    id: 3.4,
    src: "/ts.svg",
    alt: "TypeScript",
  },
  {
    id: 3.5,
    src: "/three.svg",
    alt: "Three Js",
  },
];

export const portfolio = [
  {
    id: 4.1,
    title: "Portfolio Website",
    des: "Portfolio Website using Next and Three",
    img: "/p5.png",
    iconLists: [3.1, 3.2, 3.3, 3.4, 3.5],
    link: "https://asjal-portfolio-8ot16to9w-asjal8.vercel.app/",
  },
  {
    id: 4.2,
    title: "Bank App",
    des: "A Bank app using React and Tailwind",
    img: "/p6.png",
    iconLists: [3.1, 3.3],
    link: "https://bank-iqktinhrt-asjal8.vercel.app/",
  },
  {
    id: 4.3,
    title: "Fitness App",
    des: "A Fitness Gym App using React JS",
    img: "/p7.png",
    iconLists: [3.1],
    link: "https://fitnessclub-pv60whtqy-asjal8.vercel.app/",
  },
  {
    id: 4.4,
    title: "Sanity Blog",
    des: "A Blog website with Sanity",
    img: "/p8.png",
    iconLists: [3.1, 3.2, 3.3],
    link: "https://nextjs-sanity-blog-website-709dvfe7s-asjal8.vercel.app/",
  },
];

export const ourTechnology = [
  {
    id: 5.1,
    title: "Frontend",
    value: "frontend",
    logos: [3.1, 3.2, 3.3, 3.4, 3.5],
  },
  {
    id: 5.2,
    title: "Backend",
    value: "backend",
    logos: [3.1, 3.2, 3.3],
  },
  {
    id: 5.3,
    title: "DevOps",
    value: "devops",
    logos: [3.4, 3.5],
  },
  {
    id: 5.4,
    title: "Web",
    value: "web",
    logos: [3.1, 3.2, 3.3],
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "Github",
    img: "/git.svg",
    link: "https://github.com/Atinity-Solutions",
  },
  {
    id: 2,
    name: "Instagram",
    img: "/insta.svg",
    link: "https://www.instagram.com/atinitysol/",
  },
  {
    id: 3,
    name: "Linkedin",
    img: "/link.svg",
    link: "https://www.linkedin.com/company/atinity-sol",
  },
];

export const projectTab = [
  {
    id: 6.1,
    title: "All",
    value: "all",
    projects: [4.1, 4.2, 4.3, 4.4],
  },
  {
    id: 6.2,
    title: "Web",
    value: "web",
    projects: [4.1],
  },
  {
    id: 6.3,
    title: "React",
    value: "react",
    projects: [4.2],
  },
  {
    id: 6.4,
    title: "Next",
    value: "next",
    projects: [4.3],
  },
  {
    id: 6.5,
    title: "Tailwind",
    value: "tailwind",
    projects: [4.4],
  },
];

export const industryTab = [
  {
    id: 7.1,
    title: "All",
    value: "all",
    projects: [6.1, 6.2, 6.3, 6.4],
  },
  {
    id: 7.2,
    title: "Web",
    value: "web",
    projects: [6.1],
  },
  {
    id: 7.3,
    title: "React",
    value: "react",
    projects: [6.2],
  },
  {
    id: 7.4,
    title: "Next",
    value: "next",
    projects: [6.3],
  },
  {
    id: 7.5,
    title: "Tailwind",
    value: "tailwind",
    projects: [6.4],
  },
];

export const ourApproach = [
  {
    id: 8.1,
    title: "Initiation",
    des: "This phase involves understanding the project scope, defining objectives, and preparing initial plans.",
  },
  {
    id: 8.2,
    title: "Planning",
    des: "Detailed planning of the project schedule, resource allocation, and risk management.",
  },
  {
    id: 8.3,
    title: "Execution",
    des: "The phase where the actual work of the project is carried out according to the plan.",
  },
  {
    id: 8.4,
    title: "Deployment",
    des: "Deploying the finished product or solution to the production environment.",
  },
  {
    id: 8.5,
    title: "Quality Assurance",
    des: "Ensuring the final product meets the quality standards and fulfills the project requirements.",
  },
];

export const aboutUsTab = [
  {
    id: 9.1,
    title: "Vision",
    value: "vision",
    content: [10.1],
  },
  {
    id: 9.2,
    title: "Mission",
    value: "mission",
    content: [11.1],
  },
];

export const vision = [
  {
    id: 10.1,
    title: "Vision",
    des: "Our vision is to revolutionize the software industry by delivering cutting-edge, innovative solutions that empower businesses to achieve their full potential.",
  },
];

export const mission = [
  {
    id: 11.1,
    title: "Mission",
    des: "Our mission is to provide high-quality, customized software solutions that drive business success while maintaining a strong commitment to customer satisfaction.",
  },
];

export const testimonials = [
  {
    body: "Their strategic digital marketing led to significant growth in our market reach. We easily achieved our business objectives. Their approach is both effective and reliable. Highly recommended!",
    name: "Saqib Khan",
    title: "CEO Al-Nazaway",
    img: "/host.svg",
  },
  {
    body: "The custom website design they delivered was exceptional. It truly reflects our brand and offers a top-notch user experience. Our customers have been praising it. Outstanding work all around!",
    name: "Irfan",
    title: "CEO Morada Construction",
    img: "/app.svg",
  },
  {
    body: "Their managed hosting services ensure our website operates smoothly and securely. We benefit from reliable performance and expert support. It allows us to focus on our business. Excellent service!",
    name: "M. Ahmed Ali Asim",
    title: "Manager Rotana Travels",
    img: "/s.svg",
  },
  {
    body: "Their strategic digital marketing led to significant growth in our market reach. We easily achieved our business objectives. Their approach is both effective and reliable. Highly recommended!",
    name: "Saqib Khan",
    title: "CEO Al-Nazaway",
    img: "/host.svg",
  },
  {
    body: "The custom website design they delivered was exceptional. It truly reflects our brand and offers a top-notch user experience. Our customers have been praising it. Outstanding work all around!",
    name: "Irfan",
    title: "CEO Morada Construction",
    img: "/app.svg",
  },
  {
    body: "Their managed hosting services ensure our website operates smoothly and securely. We benefit from reliable performance and expert support. It allows us to focus on our business. Excellent service!",
    name: "M. Ahmed Ali Asim",
    title: "Manager Rotana Travels",
    img: "/s.svg",
  },
  {
    body: "Their strategic digital marketing led to significant growth in our market reach. We easily achieved our business objectives. Their approach is both effective and reliable. Highly recommended!",
    name: "Saqib Khan",
    title: "CEO Al-Nazaway",
    img: "/host.svg",
  },
  {
    body: "The custom website design they delivered was exceptional. It truly reflects our brand and offers a top-notch user experience. Our customers have been praising it. Outstanding work all around!",
    name: "Irfan",
    title: "CEO Morada Construction",
    img: "/app.svg",
  },
  {
    body: "Their managed hosting services ensure our website operates smoothly and securely. We benefit from reliable performance and expert support. It allows us to focus on our business. Excellent service!",
    name: "M. Ahmed Ali Asim",
    title: "Manager Rotana Travels",
    img: "/s.svg",
  },
  {
    body: "Their strategic digital marketing led to significant growth in our market reach. We easily achieved our business objectives. Their approach is both effective and reliable. Highly recommended!",
    name: "Saqib Khan",
    title: "CEO Al-Nazaway",
    img: "/host.svg",
  },
  {
    body: "The custom website design they delivered was exceptional. It truly reflects our brand and offers a top-notch user experience. Our customers have been praising it. Outstanding work all around!",
    name: "Irfan",
    title: "CEO Morada Construction",
    img: "/app.svg",
  },
  {
    body: "Their managed hosting services ensure our website operates smoothly and securely. We benefit from reliable performance and expert support. It allows us to focus on our business. Excellent service!",
    name: "M. Ahmed Ali Asim",
    title: "Manager Rotana Travels",
    img: "/s.svg",
  },
];
