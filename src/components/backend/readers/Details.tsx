import React from "react";
import Link from "next/link";
import Cards from "../../frontend/main/Cards";
import Image from "next/image";
import CustomeInput from "../../reusable/input/CustomeInput";

type Props = {
  readerDetailData: any;
};
export default function Details(props: Props) {
  const { readerDetailData } = props;
  console.log(readerDetailData, "readerDetailData");
  return (
    <div className="p-4 h-full w-full bg-white rounded-lg font-Inter text-[15px] overflow-auto ">
      <div className="w-full h-[40px] bg-theme font-medium text-white rounded-t-md flex items-center justify-between px-10 ">
        <div className="flex items-center">
          <Link href="Authors">
            <h2 className="text-[#F0F0F0]">Readers</h2>
          </Link>
          <div className=" mx-2 w-2 h-2  bg-white rounded-[50%]"></div>
          <Link href="Notedetails">
            <span>Reader details</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap my-6  items-center justify-around">
        <div>
          <div className="relative h-[228px] w-[255px]">
            <Image src="/publisher image.png" alt="publishers" layout="fill" />
          </div>
        </div>
        <div className=" grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 font-normal  col-span-3 gap-6  ">
          <CustomeInput
            type="text"
            placeholder="Mr. John Deo"
            value={readerDetailData?.profile.full_name || "N/A"}
            title={"Full name"}
          />
          <CustomeInput
            type="text"
            placeholder="John006"
            value={readerDetailData?.username || "N/A"}
            title={"User Name"}
          />
          <CustomeInput
            type="text"
            placeholder="johndeo@testmail.com"
            value={readerDetailData?.email || "N/A"}
            title={"Email"}
          />
          <CustomeInput
            type="text"
            placeholder="+977-9845678935"
            value={readerDetailData?.mobile_number || "N/A"}
            title={"Phone"}
          />
          <CustomeInput
            type="text"
            placeholder="Shantinagar, Kathmandu"
            value={readerDetailData?.address || "N/A"}
            title={"Address"}
          />
          <CustomeInput
            type="text"
            placeholder="Author"
            value={"Reader"}
            title={"Role"}
          />
          <CustomeInput
            type="text"
            placeholder="07 Jun 2022    "
            value={readerDetailData?.date_joined || "N/A"}
            title={"Joining date"}
          />
          <CustomeInput
            type="text"
            placeholder="17 notes   "
            value={readerDetailData?.Subscribed || "N/A"}
            title={"Subscribed"}
          />
          <CustomeInput
            type="text"
            placeholder="Rs 7000   "
            value={readerDetailData?.reader_expense || "N/A"}
            title={"Reader expenses"}
          />
        </div>
      </div>
      <div className="w-full h-[40px] bg-theme font-medium text-white rounded-t-md flex items-center justify-between px-10 ">
        <h2 className="text-[#F0F0F0]">Subscribed notes </h2>
      </div>
      <div className="flex space-x-10 py-6">
        {/* <Cards image="course1" />
        <Cards image="course2" />
        <Cards image="course3" />
        <Cards image="course4" /> */}
      </div>
    </div>
  );
}
