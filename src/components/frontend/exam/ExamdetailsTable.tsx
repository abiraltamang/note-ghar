import React from "react";
import ButtonComponent from "../main/ButtonComponent";
import Rating from "../notes/Rating";

type props = {
  examData: any;
};

const Examdetailstable = (props: props) => {
  const { examData } = props;
  return (
    <div className=" w-auto   lg:h-96 lg:w-[350px]   border-[#E0E0E0] rounded-b-md md:mr-10 md:mb-10">
      <div className="bg-theme rounded-t-md p-2 md:p-4 lg:p-6 text-md font-medium text-white">
        <p className=" ">Exam Details</p>
      </div>
      <div className=" text-sm p-2 md:p-4 lg:p-6 border-x-[1px] border-b-[1px]  font-medium text-[#37474F] flex items-center justify-between">
        <p>Page Count:</p>
        <p>{examData?.page ? examData?.page : "N/A"} Pages</p>
      </div>
      <div className=" text-sm p-2 md:p-4 lg:p-6 border-x-[1px] border-b-[1px] font-medium text-[#37474F] flex items-center justify-between">
        <p>Subject</p>
        <p>no data from backend</p>
      </div>
      <div className=" text-sm p-2 md:p-4 lg:p-6  font-medium text-[#37474F] flex items-center justify-between">
        <p>Current Status</p>
        <p>20 reading</p>
      </div>
      <div className=" row-span-2 text-sm p-3 border-b-[1px] border-x-[1px] font-medium text-[#37474F] flex flex-col items-center justify-between">
        <div className="bg-[#00000082] w-40 h-10 md:w-56 md:h-14 rounded-md flex justify-around text-white items-center">
          <p>Price: Rs {examData?.price ? examData?.price : "N/A"}k</p>
          <Rating textColor="text-white" />
        </div>
        <button className="orange-btn w-[100px] mt-3">Read more</button>
      </div>
    </div>
  );
};

export default Examdetailstable;
