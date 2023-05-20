import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import Image from "next/image";
import BannerImage from "./banner.jpg";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Homepage: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn(className, "min-h-[200vh]")} {...props}>
      <div className="relative md:min-h-screen">
        <Image
          className="z-0 object-cover"
          src={BannerImage.src}
          fill
          alt="banner image"
        />
        <div className="container text-white relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-light italic mb-2 sm:mb-5">
            MAKE YOUR HOME
            <br />
            DESIGN BETTER
          </h1>
          <p className="max-w-sm sm:max-w-md md:max-w-xl text-[9px] leading-3 sm:text-xs tracking-wider mb-3 sm:mb-7">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <button className="defaultBtn">discover</button>
        </div>
      </div>
    </div>
  );
};
