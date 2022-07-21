import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Notification from "./dropdown/Notification";

type Props = {
  userData: any;
};
export default function Profile(props: Props) {
  const { userData } = props;
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  const logoutHandler = () => {
    const token = sessionStorage?.getItem("userAuth");
    if (!token) {
      router.push("/Signin");
    } else {
      sessionStorage?.removeItem("userAuth");
      router.push("/Signin");
    }
  };
  return (
    <div>
      <div className="flex items-center space-x-2 font-Inter font-medium">
        <Notification />
        <Image
          src="/userhead.svg"
          alt={"profile"}
          height={30}
          width={30}
          layout="fixed"
        />
        <div
          className="cursor-pointer  hidden md:block"
          onClick={(e) => setIsActive(!isActive)}
        >
          {userData?.email}
        </div>
        <div className="cursor-pointer" onClick={(e) => setIsActive(!isActive)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {isActive && (
        <div className="absolute first-letter:rounded-lg bg-white h-[60px] w-[280px] p-4 shadow-2xl rounded-lg font-Inter font-medium text-[15px] space-y-5 z-30 top-16">
          <div className="flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <div className="text-themetext" onClick={logoutHandler}>
              Logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
