import React, { DetailedHTMLProps, FC, HTMLAttributes, useRef } from "react";
import cn from "classnames";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { OurWork } from "./sections/OurWork";
import { Inspiration } from "./sections/Inspiration";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Homepage: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn(className)} {...props}>
      <Hero />
      <About />
      <OurWork />
      <Inspiration />
    </div>
  );
};
