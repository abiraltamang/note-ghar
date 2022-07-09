import React from 'react'
import Image from 'next/image'

export default function Features2() {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4   lg:my-0 xl:p-7'>
            <div className="flex items-center justify-center col-span-2 order-2 ">
                <Image src='/aboutsection.png' alt="image" width={326} height={326} layout='fixed'   ></Image>
            </div>
            <div className='m-4 xs:m-6 sm:m-8 md:m-10 lg:mr-0  flex flex-col md:pl-5 md:y-5  lg:py-10 lg:pl-10 xl:py-14 xl:pl-12  text-[#37474F]  space-y-4 sm:space-y-6 col-span-2 order-1' >
                <div>
                    <h1 className='text-2xl sm:text-3xl lg:text-heading  font-bold font-Jost '>Manage Your Notes Access & Read Anywhere</h1>
                </div>
                <div >
                    <p className=" font-medium text-sm sm:text-base    font-Inter leading-normal ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                </div>
                <div className='flex mt-6 '>
                    <div className='mx-4'>
                        <Image src="/edit.png" alt="image" width={35} height={35} layout="fixed" />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost '>List Your Notes In Few Clicks</h1>
                        <p className="text-sm sm:text-base font-medium  sm:mt-3 md:mr-32 lg:mr-0 font-Inter leading-normal ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/book.png" alt="image" width={35} height={35} layout="fixed" />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='text-md xs:text-lg sm:text-xl md:text-2xl xl:text-subheading font-bold font-Jost '>Access It All Over The World</h1>
                        <p className="text-sm sm:text-base font-medium  sm:mt-3  md:mr-32 lg:mr-0  font-Inter leading-normal ">It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
