import React from 'react';
import Image from 'next/image';

export default function Topics() {
    return (
        <div className='m-10  '>
            <h1 className='leading-[48px] text-4xl font-semibold font-Jost text-[#37474F]'>Topics Covered in the Notes</h1>

            <div className='mt-5  space-y-2 flex flex-col justify-start font-medium font-Inter font-lg leading-[22px]'>
                <div className=''>
                    <Image src='/tick.png' alt='' width={15} height={20} />
                    <span className='ml-4'>Cloud Computing</span>
                </div>
                <div>
                    <Image src='/tick.png' alt='' width={15} height={20} />
                    <span className='ml-4'>About AI System</span>
                </div>
                <div>
                    <Image src='/tick.png' alt='' width={15} height={20} />
                    <span className='ml-4'>Database Management</span>
                </div>
                <div >
                    <Image src='/tick.png' alt='' width={15} height={20} />
                    <span className='ml-4'>Problem Solving with C Programming</span>
                </div>
            </div>


        </div>
    )
}
