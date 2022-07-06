import React from "react";
import Image from "next/image";
import ButtonComponent from "./ButtonComponent";
import Link from 'next/link';



const Navbar = () => {
    return (
        <div className="flex items-center justify-around h-[100px] w-full text-[#FFFFFF] bg-theme ">
            <Link href="Main">
                <div className="cursor-pointer">
                    <Image src='/logo.png' alt="cover image" height={44.86} width={200} />
                </div>
            </Link>
            <div className="lg:flex hidden ">
                <Link href='Main'>
                    <div className="mx-3 text-[16px] cursor-pointer">
                        <span className="underline underline-offset-8 decoration-button decoration-2">Home</span>

                    </div>
                </Link>
                <Link href="Notes">
                    <div className="mx-3 text-[16px] cursor-pointer">
                        <span>Notes</span>
                    </div>
                </Link>
                <Link href="trendingnotes">
                    <div className="mx-3 text-[16px] cursor-pointer">
                        <span>Trending Notes</span>
                    </div>
                </Link>
                <Link href="#Footer">
                    <div className="mx-3 text-[16px] cursor-pointer">
                        <span>Contact us</span>
                    </div>
                </Link>

                <Link href="Aboutus">
                    <div className="mx-3 text-[16px] cursor-pointer">
                        <span>About us</span>
                    </div>
                </Link>

            </div>
            <div className="flex cursor-pointer ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <Link href="Signin">
                    <div>
                        <button className="orange-btn">Login/Register</button>
                    </div>
                </Link>
            </div>

        </div>
    )
}
export default Navbar;