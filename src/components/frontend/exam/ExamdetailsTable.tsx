import React from "react";
import Eye from "../../backend/svg icons/Eye";
import ViewLinks from "../../reusable/customLink/ViewLinks";
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
        <p>{examData?.category?.name}</p>
      </div>
      <div className=" text-sm p-2 md:p-4 lg:p-6 border-x-[1px] border-b-[1px]  font-medium text-[#37474F] flex items-center justify-between">
        <p>Current Status</p>
        <p>20 reading</p>
      </div>
      <div className=" row-span-2 text-sm p-3 border-b-[1px] border-x-[1px] font-medium text-[#37474F] flex flex-col items-center justify-between">
        <div className="bg-[#00000082] w-40 h-10 md:w-56 lg:w-[290px] md:h-14 rounded-md flex justify-around text-white items-center">
          <p>Price: Rs {examData?.price ? examData?.price : "N/A"}k</p>
          <Rating textColor="text-white" />
        </div>
        <div>
          <div className="flex items-center justify-between ">
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75 mr-3 cursor-pointer"
                viewBox="0 0 20 20"
                fill="orange"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Preview note</span>
            </div>
            <div>
              <button className="orange-btn w-[100px] mt-3">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Examdetailstable;
