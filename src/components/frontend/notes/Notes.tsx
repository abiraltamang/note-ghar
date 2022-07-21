import React from "react";
import Image from "next/image";
import PDFComponent from "../../PDFComponent"

type Props={
  examData: any
}

const Notes = (props: Props) => {
  const { examData } = props
  console.log(examData, "exam data")
  return (
    <div className="  text-[#37474F] ">
      <Image
        src="/economics image.png"
        alt="note"
        height={422}
        width={1000}
        layout="responsive"
      />
      <h1 className="leading-6 xs:leading-[48px] mt-4 text-xl xs:text-2xl sm:text-3xl md:text-[35px]  font-semibold font-Jost ">
        titled
      </h1>
      <div className="flex  flex-col xs:flex-row justify-start mt-3 sm:mt-4 md:mt-5 lg:mt-9 mb-5 items-start xs:space-x-10 space-y-1 text-xs xs:text-sm xs:space-y-0 text- font-medium font-Jost">
        <div className="flex items-center">
          <Image src="/time.png" alt="" width={20} height={20} />
          <span className="ml-4 font-Jost font-medium">
            23, June - 30, July 2022
          </span>
        </div>
        <div className="flex items-center">
          <Image src="/bookmark.png" alt="" width={20} height={20} />
          <span className="ml-4 font-Jost font-medium">30 ongoing</span>
        </div>
      </div>
      <div className="md:w-full text-sm leading-[17px] md:leading-[24px] text-justify font-Inter font-medium text-[#37474F] "></div>
      <div className="h-[1000px] overflow-scroll">
        {/* <PDFComponent file={examData?.attachment}/> */}
        <p>{examData?.description}</p>
      </div>
    </div>
  );
}

export default Notes;