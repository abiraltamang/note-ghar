import React from "react";
import Link from "next/link";
import { BsArrowsFullscreen } from "react-icons/bs";
import PDFComponent from "../../PDFComponent";

type Props = {
  noteData: any;
};
const ViewNote = (props: Props) => {
  const { noteData } = props;
  console.log(noteData, "noteData end");
  return (
    <div className="p-4 h-full w-full bg-white rounded-lg font-Inter text-[15px] ">
      {/* Heading  */}
      <div className="w-[1090px] h-[40px] bg-theme font-medium text-white rounded-xl flex items-center justify-between px-10 ">
        <div className="flex items-center">
          <Link href="Dashboard">
            <h2 className="text-[#F0F0F0]">Notes </h2>
          </Link>
          <div className=" mx-2 w-2 h-2  bg-white rounded-[50%]"></div>
          <Link href="Notedetails">
            <span>Note details</span>
          </Link>
          <div className=" mx-2 w-2 h-2  bg-white rounded-[50%]"></div>
          <span>Physics Note</span>
        </div>
        <div className="flex space-x-10">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
            Zoom in
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
              />
            </svg>
            Zoom out
          </div>
          <div className="flex items-center space-x-2">
            <BsArrowsFullscreen />
            <p>Full screen</p>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-5 h-[1000px] overflow-scroll">
        <PDFComponent file={noteData?.attachment ? noteData?.attachment : ""}/>
      </div>
    </div>
  );
};
export default ViewNote;
