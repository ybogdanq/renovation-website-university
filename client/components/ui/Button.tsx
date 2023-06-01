import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  MouseEvent,
} from "react";
import cn from "classnames";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: "submit" | "button";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => any;
}

export const Button: FC<Props> = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        className,
        "cursor-pointer border-[1px] transition-all duration-300 hover:bg-zinc-200 border-black bg-transparent italic font-light py-2 px-5 tracking-wider"
      )}
      {...props}
    >
      {children}
    </button>
  );
};
