import React from 'react';
import Image from 'next/image';

export default function Benefits() {
    return (
        <div className='m-6 sm:m-10 '>
            <h1 className='md:mb-10 xs:leading-[48px] text-xl xs:text-2xl sm:text-3xl md:text-[35px] font-semibold font-Jost text-[#37474F]'>Benefits of this Note</h1>

            <div className='mt-5   flex flex-col justify-start font-medium font-Inter text-sm md:text-[18px] leading-[22px] text-[#37474F] space-y-2 md:space-y-5'>
                <div className='flex items-center justify-start'>
                    <Image src='/tick.png' alt='' width={20} height={20} layout='fixed' />
                    <span className='ml-4 '>All the Lorem Ipsum Internet tend to repeat.</span>
                </div>
                <div className='flex items-center justify-start'>
                    <Image src='/tick.png' alt='' width={20} height={20} layout='fixed' />
                    <span className='ml-4'>It uses a dictionary of Latin words.</span>
                </div>
                <div className='flex items-center justify-start'>
                    <Image src='/tick.png' alt='' width={20} height={20} layout='fixed' />
                    <span className='ml-4'>Grursus mal suada faci lisis Lorem ipsum.</span>
                </div>
                <div className='flex items-center justify-start' >
                    <Image src='/tick.png' alt='' width={20} height={20} layout='fixed' />
                    <span className='ml-4'>Lorem ipsum dolarorit more ametion consectetur elit.</span>
                </div>
            </div>


        </div>
    )
}
