"use client";
import React, { DetailedHTMLProps, FC, HTMLAttributes, useRef } from "react";
import cn from "classnames";
import Image from "next/image";
import AboutImage from "../assets/about.jpg";
import { InView } from "react-intersection-observer";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const About: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn(className)} {...props}>
      <div className="container sm:pt-10 sm:pb-8 py-8 min-h-[300px] sm:min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-6">
        <div className="hidden sm:flex items-center justify-center">
          <InView triggerOnce>
            {({ inView, ref }) => (
              <span
                ref={ref}
                className="sm:block relative sm:max-w-[60%] sm:pt-[80%] md:max-w-[80%] w-full h-0 md:pt-[100%]"
              >
                <Image
                  src={AboutImage.src}
                  className={cn(
                    "styledImage absolute top-0 left-0 right-0 bottom-0 object-cover",
                    {
                      "styledImage-inView": inView,
                    }
                  )}
                  fill
                  alt="about image"
                />
              </span>
            )}
          </InView>
        </div>
        <div>
          <InView triggerOnce>
            {({ inView, ref }) => {
              const styles = inView
                ? "translate-x-0 opacity-100"
                : "-translate-x-3 opacity-0";

              return (
                <h1
                  ref={ref}
                  className={cn(
                    "defaultHeading delay-500 duration-300 transition-all text-2xl md:text-3xl lg:text-4xl text-center mb-2 sm:mb-3 md:mb-5 tracking-wide",
                    styles
                  )}
                >
                  About us
                </h1>
              );
            }}
          </InView>
          <InView triggerOnce>
            {({ inView, ref }) => {
              const styles = inView
                ? "translate-x-0 opacity-100"
                : "-translate-x-3 opacity-0";

              return (
                <p
                  ref={ref}
                  className={cn(
                    "defaultText delay-500 duration-300 transition-all text-sm sm:text-l lg:text-xl text-center tracking-wide",
                    styles
                  )}
                >
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  &apos;lorem ipsum&apos; will uncover many web sites still in
                  their infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose.
                </p>
              );
            }}
          </InView>
        </div>
      </div>
    </div>
  );
};
