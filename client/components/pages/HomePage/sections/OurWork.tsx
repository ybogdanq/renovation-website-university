import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import OurWorkBg from "../assets/ourWorkBg.png";
import Image from "next/image";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const OurWork: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn(className, "relative py-28")} {...props}>
      <Image
        src={OurWorkBg.src}
        fill
        className="absolute top-0 right-0 bottom-0 left-0 object-cover"
        alt="our work bg"
      />
      <div className="relative z-10 container flex flex-col items-center justify-center">
        <h1 className="defaultHeading text-white uppercase tracking-wide text-2xl md:text-3xl lg:text-4xl mb-10">
          Our work
        </h1>
        <div className="flex items-center justify-center flex-wrap max-w-2xl gap-x-4 gap-y-6">
          <button className="defaultBtn">Living Room</button>
          <button className="defaultBtn">Bedroom</button>
          <button className="defaultBtn">Kitchen</button>
          <button className="defaultBtn">Bathroom</button>
          <button className="defaultBtn">Playroom</button>
        </div>
      </div>
    </div>
  );
};
