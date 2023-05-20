import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import Image from "next/image";
import AboutImage from "../assets/about.jpg";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const About: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn(className)} {...props}>
      <div className="container py-8 min-h-[300px] sm:min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-6">
        <div className="hidden sm:flex items-center justify-center">
          <span className="sm:block relative sm:max-w-[60%] sm:pt-[80%] md:max-w-[80%] w-full h-0 md:pt-[100%]">
            <Image
              src={AboutImage.src}
              className="styledImage absolute top-0 left-0 right-0 bottom-0 object-cover"
              fill
              alt="about image"
            />
          </span>
        </div>
        <div>
          <h1 className="defaultHeading text-2xl md:text-3xl lg:text-4xl text-center mb-2 sm:mb-3 md:mb-5 tracking-wide">
            About us
          </h1>
          <p className="defaultText text-sm sm:text-l lg:text-xl text-center tracking-wide">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for &apos;lorem
            ipsum&apos; will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose.
          </p>
        </div>
      </div>
    </div>
  );
};
