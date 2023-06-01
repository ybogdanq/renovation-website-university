import React, {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  useState,
} from "react";
import cn from "classnames";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  resize: boolean;
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => any;
}

export const Textarea: FC<Props> = ({
  resize,
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
            "top-[22px] translate-y-[-50%] left-4 text-[inherit]/[inherit]":
              !isFocused && !value,
            "top-0 translate-y-[-50%] left-2 text-[14px]/[14px]":
              isFocused || value,
          }
        )}
      >
        {label}
      </label>
      <textarea
        className={cn(
          "focus:outline-none border-[1px] border-black py-2 px-4 italic font-light w-full min-h-[135px]",
          {
            "resize-none": !resize,
          }
        )}
        placeholder=""
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
