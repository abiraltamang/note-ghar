import React from 'react';
import Image from 'next/image';

export default function Topics() {
    return (
        <div className='m-6 sm:m-10  '>
            <h1 className=' xs:leading-[48px]  font-semibold font-Jost text-[#37474F] text-xl xs:text-2xl sm:text-3xl md:text-4xl '>Topics Covered in the Notes</h1>

            <div className='mt-5  space-y-2 flex flex-col justify-start font-medium font-Inter font-lg  text-xs xs:text-sm md:text-md lg:text-base'>
                <div className='flex items-center justify-start'>
                    <Image src='/tick.png' alt='' width={15} height={20} />
                    <span className='ml-4'>Cloud Computing</span>
                </div>
                <div className='flex items-center justify-start'>
                    <Image src='/tick.png' alt='' width={15} height={20} />
                    <span className='ml-4'>About AI System</span>
                </div>
                <div className='flex items-center justify-start'>
                    <Image src='/tick.png' alt='' width={15} height={20} />
                    <span className='ml-4'>Database Management</span>
                </div>
                <div className='flex items-center justify-start' >
                    <Image src='/tick.png' alt='' width={15} height={20} />
                    <span className='ml-4'>Problem Solving with C Programming</span>
                </div>
            </div>


        </div>
    )
}
