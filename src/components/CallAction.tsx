import React from 'react'

export default function CallAction() {
    return (
        <div className="mt-12 flex flex-col relative justify-center w-full h-[30rem] text-white text-center items-center">
            <img src="/callaction.png" alt="" className=" object-cover" />
            <div className="bg-black w-full h-[30rem] absolute opacity-60"></div>
            <div className="absolute top-[15%] ">
                <p className="text-[3rem] sm:text-[5rem] font-bold mb-6 sm:mb-8">
                    Only 54 <span className=" text-[2rem] font-none ">$</span>
                </p>
                <p className="text-2xl px-4 tracking-wide mb-8">
                    Make a difference and choose THE BEST for the management of your
                    business !
                </p>
            </div>
        </div>
    );
}
