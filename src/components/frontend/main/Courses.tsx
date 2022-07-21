import React, { useEffect, useState } from "react";
import CourseHeading from "./CourseHeading";
import Cards from "./Cards";
import Spinner from "../../reusable/loadingspinner/Spinner";

type Props = {
  courseData: any;
  currentUserLoading: any;
};

const Courses = (props: Props) => {
  const { currentUserLoading, courseData } = props;

  return (
    <>
      {currentUserLoading ? (
        <Spinner />
      ) : (
        <div className="">
          <CourseHeading
            currentUserLoading={currentUserLoading}
            courseData={courseData}
          />
          <div className="flex flex-wrap items-start justify-center gap-8 mx-[14px] sm:mx-[22px] md:mx-[26px] lg:mx-[32px] xl:mx-[50px]">
            {courseData &&
              courseData?.map((item: any, index: any) => (
                <Cards key={index} item={item} />
              ))}
          </div>
          <div className="flex items-center justify-center my-10  md:my-24 ">
            <button className="blue-btn w-[155px]">More Notes</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;
