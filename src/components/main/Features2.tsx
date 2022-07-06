import React from 'react'
import Image from 'next/image'

export default function Features2() {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 my-5 xl:p-7'>
            <div className="flex items-center justify-center col-span-2 order-2 ">
                <div>
                    <Image src='/aboutsection.png' alt="image" width={400} height={400} layout='intrinsic'></Image>
                </div>
            </div>
            <div className='flex flex-col p-10 xl:p-14  text-[#37474F] space-y-6 col-span-2 order-1' >
                <div>
                    <h1 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold font-Jost'>Manage Your Notes Access & Read Anywhere</h1>
                </div>
                <div className='text-xs xs:text-sm sm:text-xl  mt-3  font-Inter'>
                    <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>


                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/edit.png" alt="image" width={40} height={40} layout='fixed' />
                    </div>
                    <div className='flex flex-col space-y-2 xl:pr-28'>
                        <h1 className='text-md xs:text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold font-Jost '>List Your Notes In Few Clicks</h1>
                        <p className="text-xs xs:text-sm sm:text-lg md:text-xl font-Inter ">It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout.</p>
                    </div>
                </div>
                <div className='flex mt-6'>
                    <div className='mx-4'>
                        <Image src="/book.png" alt="image" width={40} height={40} layout="fixed" />
                    </div>
                    <div className='flex flex-col space-y-2 xl:pr-28'>
                        <h1 className='text-md xs:text-lg sm:text-xl md:text-2xl xl:text-3xl font-bold font-Jost '>Access It All Over The World</h1>
                        <p className="text-xs xs:text-sm sm:text-lg md:text-xl font-Inter">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
