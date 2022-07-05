import React from 'react';
import Image from 'next/image';

export default function Topics() {
    return (
        <div className='m-10 '>
            <h1 className='leading-[48px] text-4xl font-semibold font-Jost text-[#37474F]'>Benefits of this Note</h1>

            <div className='mt-5  space-y-2 flex flex-col justify-start font-medium font-Inter font-lg leading-[22px]'>
                <div className=''>
                    <Image src='/tick.png' alt='' width={15} height={20} />
                    <span className='ml-4'>All the Lorem Ipsum Internet tend to repeat.</span>
                </div>
                <div>
                    <Image src='/tick.png' alt='' width={15} height={20} />
                    <span className='ml-4'>It uses a dictionary of Latin words.</span>
                </div>
                <div>
                    <Image src='/tick.png' alt='' width={15} height={20} />
                    <span className='ml-4'>Grursus mal suada faci lisis Lorem ipsum.</span>
                </div>
                <div >
                    <Image src='/tick.png' alt='' width={15} height={20} />
                    <span className='ml-4'>Lorem ipsum dolarorit more ametion consectetur elit.</span>
                </div>
            </div>


        </div>
    )
}
