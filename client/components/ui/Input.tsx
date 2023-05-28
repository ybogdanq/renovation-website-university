import React, {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useState,
} from "react";
import styles from "./Input.module.scss";
import cn from "classnames";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => any;
}

export const Input: FC<Props> = ({
  label,
  onChange,
  value,
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <div className={cn(className, "relative h-fit w-fit")}>
      <label
        className={cn(
          "italic font-extralight absolute leading-3 pointer-events-none bg-white px-1 transition-all",
          {
            "top-[50%] translate-y-[-50%] left-4 text-[inherit]/[inherit]":
              !isFocused && !value,
            "top-0 translate-y-[-50%] left-2 text-[14px]/[14px]":
              isFocused || value,
          }
        )}
      >
        {label}
      </label>
      <input
        className="focus:outline-none border-[1px] border-black py-2 px-4 italic font-light"
        placeholder=""
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type="text"
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
