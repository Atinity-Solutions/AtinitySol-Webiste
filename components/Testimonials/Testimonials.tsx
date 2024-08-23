"use client";

import { TestimonialsDetails } from "./TestimonialsDetails";

const Testimonials = () => {
  return (
    <div className="py-20">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        <h1
          className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
        >
          Kind words from <br /> satisfied clients
        </h1>
      </div>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden "
        >
          <TestimonialsDetails />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
