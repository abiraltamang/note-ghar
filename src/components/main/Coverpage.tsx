import React from 'react'
import Image from 'next/image'
import ButtonComponent from './ButtonComponent';
type Props = {
    height: any,
}

export default function Coverpage({ height }: Props) {
    return (
        <div className='relative h-[400px]  sm:h-[500px] md:h-[550px] lg:h-[715px] w-full' >
            <Image src='/cover.png' alt='cover image' className='brightness-50 object-cover object-bottom' height={height} width={1580} layout='fill' />

            <div className='absolute w-full h-full top-0 space-y-3  left-0  lg:space-y-6 lg:-mt-14 flex flex-col items-center justify-center'>
                <div className='text-[6vw] xs:text-[5vw] sm:text-[4.2vw] text-mainheading leading-[65.25px] font-bold text-white font-Jost not-italic text-center'>
                    <p>We Store Notes and Spread </p>
                    <p>All Over the World </p>
                </div>
                <div className='text-xs px-16 md:text-para font-medium font-Inter text-tgray  tracking-wider leading-2 text-center'>

                    <p className='px-2 xs:px-7 sm:px-10 md:px-16 lg:px-56 xl:px-64' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>


                </div>

                <div className='flex flex-col items-center text-[16px] leading-[23px] justify-center space-y-4 sm:flex-row sm:space-y-0 space-x-6'>
                    <div className='cursor-pointer'>
                        <button className='blue-btn w-[168px]  hidden md:block '> Become Publisher</button>
                        <button className='small-blue-btn rounded-lg text-sm md:hidden'> Become Publisher</button>
                    </div>
                    <div className='cursor-pointer'>
                        <button className='transparent-btn   hidden md:block'>Read Notes</button>
                        <button className='small-transparent-btn rounded-lg text-sm md:hidden'>Read Notes</button>
                    </div>
                </div>


            </div>



        </div >
    )
}
