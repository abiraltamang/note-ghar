import React from 'react'
import Image from 'next/image'
export default function Goal() {
    return (
        <div className=' max-w-[1190px] h-full lg:h-[400px] xl:h-[550px] mx-[22px] sm:mx-[55px] md:mx-[65px] lg:mx-[80px]  xl:mx-[125px] grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 items-center justify-center py-8 md:py-10  lg:py-0 gap-5 lg:gap-x-[40px] '>
            <div className='h-full w-full  lg:w-[264px] lg:h-[260px]   xl:w-[329.3px] xl:h-[326px]  xxl:w-[370px] xxl:h-[367px]  border-[1px] rounded-[5px] border-[#C5C5C5] hover:border-[#1BA8B1] p-3 lg:p-6 flex flex-col items-center  justify-center space-y-1 lg:space-y-3'>
                <div className='relative h-[40px] w-[40px] xl:h-[7vw] xl:w-[7vw] '>
                    <Image src='/insight.png' alt='' layout='fill' />
                </div>
                <h2 className='text-md md:text-lg  xl:text-[22px] xl:leading-[32px] 2xl:text-4xl text-center font-medium font-Jost text-black'>Increases your comprehension</h2>
                <p className='text-xs xl:text-base 2xl:text-xl font-Inter font-normal leading-normal  text-themetext text-center'>It is a long established fact that a reader will be distracted by the eadable content of a page when lookingat its layout.</p>
            </div>
            <div className='h-full w-full lg:w-[264px] lg:h-[260px] xl:w-[329.3px] xl:h-[326px]  xxl:w-[370px] xxl:h-[367px]   border-[1px] rounded-[5px] border-[#C5C5C5] hover:border-[#1BA8B1] p-3 lg:p-6 flex flex-col items-center  justify-center space-y-1 lg:space-y-3'>
                <div className='relative h-[40px] w-[40px] xl:h-[7vw] xl:w-[7vw] '>
                    <Image src='/golf.png' alt='' layout='fill' />
                </div>
                <h2 className='text-md md:text-lg   xl:text-[22px] xl:leading-[32px] 2xl:text-4xl text-center font-medium font-Jost text-black'>Increases your comprehension</h2>
                <p className='text-xs xl:text-base 2xl:text-xl font-Inter font-normal leading-normal  text-themetext text-center'>It is a long established fact that a reader will be distracted by the eadable content of a page when lookingat its layout.</p>
            </div>
            <div className='h-full w-full   lg:w-[264px] lg:h-[260px] xl:w-[329.3px] xl:h-[326px]  xxl:w-[370px] xxl:h-[367px] border-[1px] rounded-[5px] border-[#C5C5C5] hover:border-[#1BA8B1] p-3 lg:p-6 flex flex-col items-center  justify-center space-y-1 lg:space-y-3'>
                <div className='relative h-[40px] w-[40px] xl:h-[7vw] xl:w-[7vw] '>
                    <Image src='/memory.png' alt='' layout='fill' />
                </div>
                <h2 className='text-md md:text-lg   xl:text-[22px] xl:leading-[32px] 2xl:text-4xl text-center font-medium font-Jost text-black'>Increases your comprehension</h2>
                <p className='text-xs xl:text-base 2xl:text-xl font-Inter font-normal leading-normal  text-themetext text-center'>It is a long established fact that a reader will be distracted by the eadable content of a page when lookingat its layout.</p>
            </div>

        </div>
    )
}
