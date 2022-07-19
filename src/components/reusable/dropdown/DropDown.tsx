import { Menu } from "@headlessui/react";
import React from "react";

type Props = {
  title: string;
  options: any;
};

const DropDown = (props: Props) => {
  return (
    <div>
      <Menu>
        <Menu.Button className="w-[156px] p-1 h-[38px] rounded-lg border-[2px] border-[#F5F5F5] flex items-center justify-evenly font-Inter font-normal relative">
          {props.title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Menu.Button>
        <Menu.Items>
          <div className="flex flex-col border-[1px] border-[#F5F5F5] drop-shadow-xl rounded w-[156px] p-3 space-y-4 absolute z-20 bg-white top-12">
            {props?.options?.map((item: any, index: any) => (
              <h1 key={index}>{item}</h1>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default DropDown;
