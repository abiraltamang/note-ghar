import React, { useState } from "react";
import Link from "next/link";
import Authorprofile from "../Authorprofile";
import CustomeInput from "../../reusable/input/CustomeInput";
import ViewNote from "../../../components/backend/notes/ViewNotes";

type Props = {
  noteDetailData: any;
};
const Details = (props: Props) => {
  const [viewnote, setViewNotes] = useState(false);
  const { noteDetailData } = props;
  console.log(noteDetailData, "noteDetailData");
  return (
    <div className="p-4 h-full w-full bg-white rounded-lg font-Inter text-[15px] ">
      <div className="w-full h-[40px] bg-theme font-medium text-white rounded-xl flex items-center justify-between px-5 ">
        <div className="flex items-center">
          <Link href="Dashboard">
            <h2 className="text-[#F0F0F0]">Notes </h2>
          </Link>
          <div className=" mx-2 w-2 h-2  bg-white rounded-[50%]"></div>
          <span>Note details</span>
        </div>
        <div className="flex space-x-10">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            See transistions
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
              />
            </svg>
            Save
          </div>
          <div className="flex items-center">
            <button onClick={() => setViewNotes(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-45 w-5 opacity-75 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            View Note
            {/* </Link> */}
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-4 gap-5 font-normal my-5">
        <CustomeInput
          title={"Note title"}
          type={"text"}
          placeholder={"Physic note"}
          value={noteDetailData?.title ? noteDetailData.title : "N/A"}
        />
        <CustomeInput
          title={"Price of Note"}
          type={"text"}
          placeholder={"Rs 2000"}
          value={noteDetailData?.price ? noteDetailData.price : "N/A"}
        />
        <CustomeInput
          title={"Duration of Note"}
          type={"text"}
          placeholder={"lifetime"}
          value={""}
        />
        <CustomeInput
          title={"Note comission"}
          type={"text"}
          placeholder={"50% of Note price - Rs 1,000"}
          value={"commision"}
        />
        <CustomeInput
          title={"Category"}
          type={"text"}
          placeholder={"Science"}
          value={"Category"}
        />
        <CustomeInput
          title={"Status"}
          type={"text"}
          placeholder={"Pending"}
          value={"not define"}
        />
        <CustomeInput
          title={"Sales Count"}
          type={"text"}
          placeholder={"04 sales"}
          value={"no data from backend: bikram"}
        />
      </div>
      <div className="flex items-center justify-between space-x-4">
        <div>
          <h2 className="font-normal">Note Description</h2>
          <textarea
            name=""
            id=""
            placeholder="Note descriptions"
            className=" p-5 w-[529px] h-[357px] border-[1px] border-[#E0E0E0] rounded-lg"
            value={noteDetailData?.description}
            disabled
          ></textarea>
        </div>
        <Authorprofile authorData={noteDetailData.user} />
      </div>
    </div>
  );
};
export default Details;
