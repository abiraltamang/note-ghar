import React from "react";
import Image from "next/image";

export default function Topics() {
  return (
    <div className="m-6 sm:m-10  ">
      <h1 className=" md:mb-10 xs:leading-[48px]  font-semibold font-Jost text-[#37474F] text-xl xs:text-2xl sm:text-3xl md:text-[35px] ">
        Topics Covered in the Notes
      </h1>

      <div className="mt-5 space-y-2 md:space-y-5 flex flex-col justify-start font-medium font-Inter  text-sm md:text-md md:text-[18px] leading-[22px] text-[#37474F] ">
        <div className="flex items-center justify-start">
          <Image src="/tick.png" alt="" width={20} height={20} />
          <span className="ml-4">Cloud Computing</span>
        </div>
        <div className="flex items-center justify-start">
          <Image src="/tick.png" alt="" width={20} height={20} />
          <span className="ml-4">About AI System</span>
        </div>
        <div className="flex items-center justify-start">
          <Image src="/tick.png" alt="" width={20} height={20} />
          <span className="ml-4">Database Management</span>
        </div>
        <div className="flex items-center justify-start">
          <Image src="/tick.png" alt="" width={20} height={20} />
          <span className="ml-4">Problem Solving with C Programming</span>
        </div>
      </div>
    </div>
  );
}
