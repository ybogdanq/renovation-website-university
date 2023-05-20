import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Homepage: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn(className)} {...props}>
      <Hero />
      <About />
    </div>
  );
};
