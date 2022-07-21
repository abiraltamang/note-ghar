import { Spinner } from "@react-pdf-viewer/core";
import React, { useState } from "react";

type Props = {
  courseData: any;
  currentUserLoading: any;
};
const CourseHeading = (props: Props) => {
  const { currentUserLoading, courseData } = props;

  const [activeLink, setActiveLink] = useState("allexams");
  return (
    <div className="flex flex-col items-center space-y-4 lg:space-y-5 xl:space-y-6 mb-10 mt-10 xl:mt-24 m-3 text-[#37474F]">
      <h2 className="text-2xl sm:text-3xl lg:text-heading  font-bold font-Jost text-center ">
        Choose Your Course Below
      </h2>
      <div className="mx-10 sm:mx-24 md:mx-16 lg:mx-20 xl:mx-52">
        <p className="text-center text-sm sm:px-14 lg:px-36 xl:px-48 font-medium  font-Inter leading-normal text text-[#37474F] md:text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="flex gap-5">
        {courseData?.map((item: any, index: any) => (
          <div key={index}>
            <button
              className={`${
                activeLink == "allexams"
                  ? "bg-theme border-[1px] border-theme w-[145px] h-45px hidden md:block btn-text hover:bg-theme text-white rounded-md p-2"
                  : "bg-transparent border-[1px] border-theme w-[145px] h-45px hidden md:block btn-text hover:bg-theme hover:text-white rounded-md p-2"
              }`}
              onClick={() => setActiveLink("allexams")}
            >
              {item?.title}
            </button>
          </div>
        ))}
        <div>
          <button
            className={`${
              activeLink == "more"
                ? "bg-theme border-[1px] border-theme w-[145px] h-45px hidden md:block btn-text hover:bg-theme text-white rounded-md p-2"
                : "bg-transparent border-[1px] border-theme w-[145px] h-45px hidden md:block btn-text hover:bg-theme hover:text-white rounded-md p-2"
            }`}
            onClick={() => setActiveLink("more")}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseHeading;
