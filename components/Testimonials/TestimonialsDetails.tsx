"use client";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { testimonials } from "@/data";

const firstRow = testimonials.slice(testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({
  img,
  name,
  title,
  body,
}: {
  img: string;
  name: string;
  title: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{title}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsDetails() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  md:shadow-xl">
      <Marquee
        pauseOnHover
        className="[--duration:20s]"
        data-aos="zoom-in-left"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        {firstRow.map((testimonials) => (
          <ReviewCard key={testimonials.title} {...testimonials} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        className="[--duration:20s]"
        data-aos="zoom-in-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
      >
        {secondRow.map((testimonials) => (
          <ReviewCard key={testimonials.title} {...testimonials} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
