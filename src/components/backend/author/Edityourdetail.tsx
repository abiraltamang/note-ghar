import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSave } from "react-icons/fi";
import CustomeInput from "../../reusable/input/CustomeInput";

export default function Edityourdetail() {
  return (
    <div className="p-4 h-full w-full bg-white rounded-lg font-Inter text-[15px] overflow-auto ">
      <div className=" h-[40px] bg-theme font-medium text-white rounded-t-md flex items-center justify-between px-10 ">
        <div className="flex items-center justify-between  ">
          <Link href="Authors">
            <h2 className="text-[#F0F0F0]">My accounts </h2>
          </Link>
          <div className=" mx-2 w-2 h-2  bg-white rounded-[50%]"></div>
          <Link href="Notedetails">
            <span>Edit your details</span>
          </Link>
        </div>
        <div className="flex">
          <FiSave />
          <p>Save your details</p>
        </div>
      </div>

      <div className="flex flex-wrap my-6  items-center justify-evenly xxl:justify-center xxl:space-x-5">
        <div>
          <div className="relative h-[228px] w-[255px] mb-5">
            <Image src="/publisher image.png" alt="publishers" layout="fill" />
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 font-normal  col-span-3 gap-6 ">
          <CustomeInput
            type="text"
            placeholder="Mr"
            title={"Salutation"}
            value={undefined}
          />
          <CustomeInput
            type="text"
            placeholder="John006"
            title={"User Name"}
            value={undefined}
          />
          <CustomeInput
            type="text"
            placeholder="John"
            title={"First Name"}
            value={undefined}
          />
          <CustomeInput
            type="text"
            placeholder="Enter middle name"
            title={"Middle Name"}
            value={undefined}
          />
          <CustomeInput
            type="text"
            placeholder="Deo"
            title={"Last Name"}
            value={undefined}
          />
          <CustomeInput
            type="text"
            placeholder="johndeo@testmail.com"
            title={"Email"}
            value={undefined}
          />
          <CustomeInput
            type="text"
            placeholder="+97952545155    "
            title={"Phone"}
            value={undefined}
          />
          <CustomeInput
            type="text"
            placeholder="Shantinagar, Baneshwor  "
            title={"Address"}
            value={undefined}
          />
        </div>
      </div>
    </div>
  );
}
