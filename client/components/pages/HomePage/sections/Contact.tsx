"use client";
import React, { DetailedHTMLProps, FC, HTMLAttributes, useState } from "react";
import cn from "classnames";
import { Button, Input, Textarea } from "@ui";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Contact: FC<Props> = ({ className, ...props }) => {
  const [value, setValue] = useState("");
  return (
    <div className={cn(className, "py-24")} {...props}>
      <div className="container">
        <h1 className="defaultHeading uppercase text-2xl md:text-3xl lg:text-4xl text-center mb-2 sm:mb-3 md:mb-5 tracking-wide">
          Contact us
        </h1>
        <p className="defaultText mx-auto text-center max-w-xl">
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text
        </p>
        <div className="max-w-4xl mx-auto py-10 flex flex-wrap justify-between gap-y-6 gap-x-12">
          <Input
            className="max-w-[calc(50%-1.5rem)] w-full"
            label="test"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <Input
            className="max-w-[calc(50%-1.5rem)] w-full"
            label="test"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <Input
            className="max-w-[calc(50%-1.5rem)] w-full"
            label="test"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <Input
            className="max-w-[calc(50%-1.5rem)] w-full"
            label="test"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <Textarea
            resize={false}
            className="w-full"
            label="test"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <div className="w-full flex items-center justify-center">
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
