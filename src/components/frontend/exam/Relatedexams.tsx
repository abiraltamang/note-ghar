import React from "react";
import Link from "next/link";
import Rating from "../notes/Rating";

export default function Relatedexams() {
  return (
    <div className="w-auto lg:w-[350px] border-x-[1px] border-b-[1px]  border-[#E0E0E0] rounded-b-md md:mr-10 md:my-10 ">
      <div className="bg-theme row-span-1 rounded-t-md p-2 md:p-4 lg:p-6 text-md font-medium text-white">
        <p className=" ">Related Exams</p>
      </div>
      <div className="text-sm   p-2 md:p-4 lg:p-6  border-b-[1px] font-medium text-[#37474F] flex items-center justify-between">
        <div className="flex flex-col space-y-4 text-[#37474F]">
          <h2 className=" text-md sm:text-lg font-Jost font-medium leading-4 ">
            Economics Complete Note
          </h2>
          <p className="text-xs sm:text-sm">
            It is a long established fact that a reader will be distracted for
            the post.
          </p>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-3 justify-center">
              <button className="small-blue-btn text-xs sm:text:base">
                Rs 250
              </button>
              <Rating textColor="text-white" />
            </div>
            <Link href="Examdetails">
              <div className="cursor-pointer text-theme font-bold decoration-none">
                Read Now
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-sm  lg:w-72  p-2 md:p-4 lg:p-6 border-b-[1px] font-medium text-[#37474F] flex items-center justify-between">
        <div className="flex flex-col space-y-4 text-[#37474F]">
          <h2 className=" text-md sm:text-lg font-Jost font-medium leading-4 ">
            Economics Complete Note
          </h2>
          <p className="text-xs sm:text-sm">
            It is a long established fact that a reader will be distracted for
            the post.
          </p>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-3 justify-center">
              <button className="small-blue-btn">Rs 250</button>
              <Rating textColor="text-white" />
            </div>
            <Link href="Examdetails">
              <div className="cursor-pointer text-theme font-bold decoration-none">
                Read Now
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-sm    p-2 md:p-4 lg:p-6  border-b-[1px] font-medium text-[#37474F] flex items-center justify-between">
        <div className="flex flex-col space-y-4 text-[#37474F]">
          <h2 className=" text-md sm:text-lg font-Jost font-medium leading-4 ">
            Economics Complete Note
          </h2>
          <p className="text-xs sm:text-sm">
            It is a long established fact that a reader will be distracted for
            the post.
          </p>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-3 justify-center">
              <button className="small-blue-btn">Rs 250</button>
              <Rating textColor="text-white" />
            </div>
            <Link href="Examdetails">
              <div className="cursor-pointer text-theme font-bold decoration-none">
                Read Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
