import React from "react";
import Image from "next/image";
import moment from "moment";

type Props = {
  authorData: any;
};
const Authorprofile = (props: Props) => {
  const { authorData } = props;

  return (
    <div className="w-[529px] h-[360px]   border-[1px] border-[#E0E0E0] rounded-lg ">
      <div className="bg-theme W-[582px] h-[40px] rounded-t-lg text-white p-2 ">
        <p>Author Profile</p>
      </div>

      <div className="grid grid-cols-3 p-7 text-[15px]">
        <div className=" ">
          <Image
            src="/author1.png"
            alt={"profiele"}
            width={142}
            height={142}
          ></Image>
        </div>
        <div className="font-Inter font-normal text-[#323232] space-y-2 col-span-2 mt-5">
          <p className="mr-6 font-medium ">
            Name
            <span className="ml-20 pl-2 font-normal">
              :{authorData?.profile.full_name}
            </span>
          </p>
          <p className="mr-6 font-medium">
            Member since
            <span className="ml-5 pl-2 font-normal">
              :
              {authorData?.date_joined
                ? moment(authorData?.date_joined).format("DD-MM-YYYY")
                : "N/A"}
            </span>
          </p>
          <p className="mr-6 font-medium">
            Description
            <span className="ml-10 pl-2 font-normal text-justify">
              :{"This is description... no data from backend api"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Authorprofile;
