import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Homepage: FC<Props> = ({ className, ...props }) => {
  return (
    <div className={cn(className, "min-h-[200vh]")} {...props}>
      Homepage
    </div>
  );
};
