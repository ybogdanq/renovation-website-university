"use client";
import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";
import { Search } from "./icons/index";
import { usePathname } from "next/navigation";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header: FC<Props> = ({ className, ...props }) => {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <header
      className={cn(className, "w-full absolute top-0", {
        "bg-neutral-700": pathname == "/",
      })}
      {...props}
    >
      <div className="container flex align-middle justify-between py-5">
        <nav className="text-white text-large flex align-middle">
          <ul className="flex align-middle [&>*]:mr-3 [&>*]:cursor-pointer [&>*]:duration-200 [&>*:hover]:text-slate-200 [&>*:hover]:underline [&>*]:leading-8">
            <li>Home</li>
            <li>Inspiration</li>
            <li>About</li>
            <li>Our work</li>
          </ul>
        </nav>
        <div className="border-b-2 border-white flex align-middle">
          <input
            placeholder="Search"
            type="text"
            className="placeholder:text-white outline-none pb-1 text-white bg-transparent text-sm leading-6"
          />
          <button>
            <Search />
          </button>
        </div>
      </div>
    </header>
  );
};
