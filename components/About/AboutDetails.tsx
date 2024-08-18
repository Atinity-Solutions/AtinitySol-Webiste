"use client";

import IconCloud from "@/components/ui/icon-cloud";
import { iconCloud } from "@/data";

const AboutDetails = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col items-center lg:flex-row mb-10">
        <div className="flex-1">
          <h1
            className="text-4xl pb-5 md:text-4xl bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            About us
          </h1>
          <p
            className="max-w-[440px] leading-relaxed mb-8"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            necessitatibus nemo quas veritatis! Quaerat nostrum odio blanditiis
            fugit dignissimos commodi officia ratione, neque quia reprehenderit
            repudiandae quae sunt a! Maiores. Recusandae expedita exercitationem
            laborum totam magnam quisquam cumque cupiditate est quibusdam neque
            accusamus ipsa quasi, mollitia inventore nisi aliquid ab aspernatur.
            Repellendus unde cum quasi, enim nemo exercitationem! Vel, quos.
            Autem eligendi ratione illo, fuga vero vitae? Eveniet laboriosam
            autem consequatur dolores iste laborum aspernatur, quas nam harum
            rem deserunt eaque mollitia a. Tempora quas deleniti ut ab.
          </p>
        </div>
        <div className="flex-1">
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-20">
            <IconCloud iconSlugs={iconCloud} />
          </div>
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-20 mt-[-100px]">
            <img src="/Vector.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:flex-row">
        <div className="flex-1">
          <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-20 mt-[-100px]">
            <img src="/Vector.svg" alt="" />
          </div>
        </div>
        <div className="flex-1">
          <h1
            className="text-4xl pb-5 md:text-4xl bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Our mission
          </h1>
          <p
            className="max-w-[440px] leading-relaxed mb-8"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            necessitatibus nemo quas veritatis! Quaerat nostrum odio blanditiis
            fugit dignissimos commodi officia ratione, neque quia reprehenderit
            repudiandae quae sunt a! Maiores. Recusandae expedita exercitationem
            laborum totam magnam quisquam cumque cupiditate est quibusdam neque
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
