import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsArrowLeftCircle } from "react-icons/bs";
import Image from "next/image";
import { AiFillFolderAdd, AiFillDollarCircle } from "react-icons/ai";
import { RiBookReadFill } from "react-icons/ri";
import { BsBookmarks } from "react-icons/bs";

const ResponsiveSidebar = () => {
  const [open, setOpen] = useState(true);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const Menus = [
    { title: "Notes", path: "/Dashboard/Notes", src: <BsBookmarks /> },
    { title: "Authors", path: "/Dashboard/Authors", src: <AiFillFolderAdd /> },
    { title: "Readers", path: "/Dashboard/Readers", src: <RiBookReadFill /> },
    {
      title: "Transitions",
      path: "/Dashboard/Transitions",
      src: <AiFillDollarCircle />,
    },
  ];

  useEffect(() => {
    windowSize.innerWidth < 1200 ? setOpen(false) : setOpen(true);
  }, [windowSize]);

  return (
    <div className="h-screen z-10">
      <div
        className={`${
          open ? "w-60" : "w-fit"
        } hidden sm:block relative duration-300 dark:border-gray-600 p-5 dark:bg-slate-800`}
      >
        {windowSize.innerWidth < 1140 && (
          <BsArrowLeftCircle
            className={`${
              !open && "rotate-180"
            } absolute text-3xl fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
            onClick={() => setOpen(!open)}
          />
        )}

        <Link href="/">
          <div className={`flex ${open && "gap-x-4"} items-center`}>
            <Link href="/">
              <div className=" relative w-[30px] h-[37px] cursor-pointer">
                <Image src="/small-logo.png" alt="logo" layout="fill" />
              </div>
            </Link>
            {open && (
              <span className="text-xl font-medium whitespace-nowrap dark:text-white">
                <Image src="/logotext.png" alt="logo" height={16} width={104} />
              </span>
            )}
          </div>
        </Link>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <Link href={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-green-700
                        ${menu.gap ? "mt-9" : "mt-2"} 
                }`}
              >
                <span className="text-2xl">{menu.src}</span>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className={`${!open && "hidden"} mt-[420px]`}>
        <div className=" my-1  h-[40px] rounded-[10px] text-theme  border-[1px] border-temetext   flex items-center  p-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[17px] w-[17px] mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span
            className={`${
              !open && "hidden"
            } origin-left duration-300 hover:block`}
          >
            logout
          </span>
        </div>
        <span className="text-xs font-Roboto text-[#ABABAB]">
          Copyright © 2022 NoteGhar - All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
