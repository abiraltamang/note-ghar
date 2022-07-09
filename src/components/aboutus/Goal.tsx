import React from 'react'
import Image from 'next/image'
export default function Goal() {
    return (
        <div className='mx-16 xs:mx-5 sm:mx-20 md:mx-6 lg:mx-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3  items-center justify-center my-10 lg:my-20 gap-5'>
            <div className='h-full w-full  md:w-[30vw] md:h-[29vw]  border-[1px] rounded-[5px] border-[#C5C5C5] hover:border-[#1BA8B1] p-3 lg:p-6 flex flex-col items-center  justify-center space-y-1 lg:space-y-3'>
                <div className='relative h-[7vw] w-[7vw] '>
                    <Image src='/insight.png' alt='' layout='fill' />
                </div>
                <h2 className='text-md md:text-lg  lg:text-xl xl:text-[22px] xl:leading-[32px] 2xl:text-4xl text-center font-medium font-Jost text-black'>Increases your comprehension</h2>
                <p className='text-xs lg:text-base 2xl:text-xl font-Inter font-normal leading-normal  text-themetext text-center'>It is a long established fact that a reader will be distracted by the eadable content of a page when lookingat its layout.</p>
            </div>
            <div className='h-full w-full  md:w-[30vw] md:h-[29vw] border-[1px] rounded-[5px] border-[#C5C5C5] hover:border-[#1BA8B1] p-3 lg:p-6 flex flex-col items-center  justify-center space-y-1 lg:space-y-3'>
                <div className='relative h-[7vw] w-[7vw] '>
                    <Image src='/golf.png' alt='' layout='fill' />
                </div>
                <h2 className='text-md md:text-lg  lg:text-xl xl:text-[22px] xl:leading-[32px] 2xl:text-4xl text-center font-medium font-Jost text-black'>Increases your comprehension</h2>
                <p className='text-xs lg:text-base 2xl:text-xl font-Inter font-normal leading-normal  text-themetext text-center'>It is a long established fact that a reader will be distracted by the eadable content of a page when lookingat its layout.</p>
            </div>
            <div className='h-full w-full  md:w-[30vw] md:h-[29vw]  border-[1px] rounded-[5px] border-[#C5C5C5] hover:border-[#1BA8B1] p-3 lg:p-6 flex flex-col items-center  justify-center space-y-1 lg:space-y-3'>
                <div className='relative h-[7vw] w-[7vw] '>
                    <Image src='/memory.png' alt='' layout='fill' />
                </div>
                <h2 className='text-md md:text-lg  lg:text-xl xl:text-[22px] xl:leading-[32px] 2xl:text-4xl text-center font-medium font-Jost text-black'>Increases your comprehension</h2>
                <p className='text-xs lg:text-base 2xl:text-xl font-Inter font-normal leading-normal  text-themetext text-center'>It is a long established fact that a reader will be distracted by the eadable content of a page when lookingat its layout.</p>
            </div>

        </div>
    )
}
