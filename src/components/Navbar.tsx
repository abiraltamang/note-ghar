import React from "react";
import Image from "next/image";
import ButtonComponent from "./ButtonComponent";

const Navbar = () => {
    return (
        <div className="flex items-center justify-around h-[100px] w-full text-[#FFFFFF] bg-theme ">
            <div>
                <Image src='/logo.png' height={44.86} width={200} />
            </div>
            <div className="flex ">
                <div className="mx-3 text-[16px]">
                    <span className="underline underline-offset-8 decoration-button decoration-2">Home</span>

                </div>
                <div className="mx-3 text-[16px]">
                    <span>Notes</span>
                </div>
                <div className="mx-3 text-[16px]">
                    <span>Trending Notes</span>
                </div>
                <div className="mx-3 text-[16px]">
                    <span>Contact us</span>
                </div>
                <div className="mx-3 text-[16px]">
                    <span>About us</span>
                </div>

            </div>
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <ButtonComponent buttontitle="Login/Signup" />
            </div>

        </div>
    )
}
export default Navbar;