"use client";

import Image from "next/image";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { ourApproach } from "@/data";

const OurApproachDetails = () => {
  return (
    <VerticalTimeline>
      {ourApproach.map((approach) => (
        <VerticalTimelineElement
          visible={true}
          key={approach.id}
          contentStyle={{
            background: "#1d1836",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #232631" }}
          date={approach.title}
          iconStyle={{ background: "#fff" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <Image
                src={approach.img}
                alt={approach.title}
                className="w-[60%] h-[60%] object-contain"
                width={100}
                height={100}
              />
            </div>
          }
        >
          <div>
            <h3 className="text-white text-[24px] font-bold">
              {approach.title}
            </h3>
            <p
              className="text-secondary text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {approach.des}
            </p>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default OurApproachDetails;
