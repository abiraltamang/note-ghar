import React from "react";

export default function Upload() {
  return (
    <div className="border-[1px] border-[#E0E0E0] rounded-lg">
      <div className="bg-theme p-3 rounded-t-[5px] w-full">
        <p>Upload your note</p>
      </div>
      <div className=" flex flex-col items-center justify-center text-themetext   w-full h-[264px]">
        <p className=" text-[#ABABAB] text-center">
          Drag your image here <br /> or <br /> click to select your file
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 opacity-50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      </div>
    </div>
  );
}
