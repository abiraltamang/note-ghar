import React, { useEffect, useState } from "react";
import CourseHeading from "./CourseHeading";
import Cards from "./Cards";
import ButtonComponent from "./ButtonComponent";

type Props = {
  courseData: any;
};

const Courses = (props: Props) => {
  const { courseData } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(courseData);
  }, []);
  console.log("coures:", courseData);
  return (
    <>
      <CourseHeading />
      <div className="grid content-center">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8 mx-[14px] sm:mx-[22px] md:mx-[26px] lg:mx-[32px] xl:mx-[50px]">
          {data?.map((item: any, index: any) => (
            <Cards key={index} item={item} />
          ))}

          {/* <Cards image="course2" />
        <Cards image="course3" />
        <Cards image="course4" />
        <Cards image="course1" />
        <Cards image="course2" />
        <Cards image="course3" />
      <Cards image="course4" /> */}
        </div>
      </div>
      <div className="flex items-center justify-center my-10  md:my-24 ">
        <button className="blue-btn w-[155px]">More Notes</button>
      </div>
    </>
  );
};

export default Courses;
