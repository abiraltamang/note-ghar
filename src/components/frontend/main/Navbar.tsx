import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  console.log(activeLink);

  const [isOpen, setIsopen] = useState(false);
  return (
    <div>
      <div className=" relative  w-full text-[#FFFFFF] bg-theme ">
        <div className="flex items-center  mx-[14px] sm:mx-[22px] md:mx-[26px] lg:mx-[32px] xl:mx-[50px]   justify-between  sm:h-[100px]  ">
          <Link href="/">
            <div className="cursor-pointer relative h-[30px] w-[160px] xs:h-[45.29px] xs:w-[224.3px]">
              <Image src="/logo.png" alt="cover image" layout="fill" />
            </div>
          </Link>
          {!isOpen ? (
            <div className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 xs:h-10 xs:w-10"
                onClick={() => setIsopen(true)}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          ) : (
            <div className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 xs:h-10 xs:w-10"
                onClick={() => setIsopen(false)}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
          <div className=" lg:flex hidden space-x-6 xl:space-x-[40px] text-[16px] font-Jost font-normal  ">
            <Link href="/">
              <div
                className={`${activeLink == "home" ? "style-activelink" : ""}`}
                onClick={() => setActiveLink("home")}
              >
                <span className="cursor-pointer">Home</span>
              </div>
            </Link>
            <Link href="Notes">
              <div
                className={`${activeLink == "notes" ? "style-activelink" : ""}`}
                onClick={() => setActiveLink("notes")}
              >
                <span className="cursor-pointer">Notes</span>
              </div>
            </Link>
            <Link href="Trendingnotes">
              <div
                className={`${
                  activeLink == "trendingnotes" ? "style-activelink" : ""
                }`}
                onClick={() => setActiveLink("trendingnotes")}
              >
                <span className="cursor-pointer">Trending Notes</span>
              </div>
            </Link>
            <Link href="contactus">
              <div
                className={`${
                  activeLink == "contactus" ? "style-activelink" : ""
                }`}
                onClick={() => setActiveLink("contactus")}
              >
                <span className="cursor-pointer">Contact us</span>
              </div>
            </Link>

            <Link href="Aboutus">
              <div
                className={`${
                  activeLink == "aboutus" ? "style-activelink" : ""
                }`}
                onClick={() => setActiveLink("aboutus")}
              >
                <span className="cursor-pointer">About us</span>
              </div>
            </Link>
          </div>
          <div className="lg:flex hidden ">
            <div className="h-[45px] w-[45px] rounded-[50%] border-[1px] border-white cursor-pointer mr-[23px] flex items-center justify-center">
              <div className="relative w-[14.22px] h-[14.21px]">
                <Image
                  src="/search.png"
                  alt="search icon"
                  layout="fill"
                ></Image>
              </div>
            </div>
            <Link href="Signin">
              <div>
                <button className="bg-button h-[45px] rounded-[5px] w-[145px] text-base font-Jost font-normal ">
                  Login/Signup
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className=" h-full w-full bg-theme lg:hidden -mt-1">
          <div className="flex flex-col items-center    sm:items-center sm:justify-evenly text-white">
            <Link href="">
              <div className="mx-3 mb-4 text-[16px] cursor-pointer">
                <span>Home</span>
              </div>
            </Link>
            <Link href="Notes">
              <div className="mx-3 mb-4 text-[16px] cursor-pointer">
                <span>Notes</span>
              </div>
            </Link>
            <Link href="Trendingnotes">
              <div className="mx-3 mb-4 text-[16px] cursor-pointer">
                <span>Trending Notes</span>
              </div>
            </Link>
            <Link href="Contactus">
              <div className="mx-3 mb-4 text-[16px] cursor-pointer">
                <span>Contact us</span>
              </div>
            </Link>

            <Link href="Aboutus">
              <div className="mx-3 mb-4 text-[16px] cursor-pointer">
                <span>About us</span>
              </div>
            </Link>
            <Link href="Signin">
              <div>
                <button className="small-transparent-btn mb-4 font-Jost rounded-md text-sm hover:border-button">
                  Login/Signup
                </button>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </div>
  );
};
export default Navbar;
