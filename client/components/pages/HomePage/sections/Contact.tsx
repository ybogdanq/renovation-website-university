"use client";
import React, { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import cn from "classnames";
import { Input } from "@ui";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Contact: FC<Props> = ({ className, ...props }) => {
  const [value, setValue] = useState("");
  return (
    <div className={cn(className)} {...props}>
      <div className="container">
        <h1 className="defaultHeading uppercase text-2xl md:text-3xl lg:text-4xl text-center mb-2 sm:mb-3 md:mb-5 tracking-wide">
          Contact us
        </h1>
        <p className="defaultText mx-auto text-center max-w-xl">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text
        </p>
        <div className="max-w-4xl mx-auto">
          <Input
            label="test"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};
