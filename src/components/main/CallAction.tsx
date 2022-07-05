import React from 'react'
import Image from 'next/image';
import ButtonComponent from './ButtonComponent';

export default function CallAction() {
    return (
        <div className='relative' >
            <Image className='absolute top-0 left-0 object-center object-cover brightness-50 ' src="/callaction.png" alt='bg image' height={600} width={1660} />
            <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-[560px] space-y-6 '>
                <div className='leading-[59px] text-5xl font-bold font-Jost p-15 text-center text-[#FFFFFF] '>
                    <h1 >List Your Notes With Us </h1>
                    <h1 >And Access It From Anywhere</h1>
                </div>
                <div className='text-center text-white '>
                    <p>It is a long established fact that a reader will be distracted by the readable </p>
                    <p>content of a page when looking at its layout.</p>
                </div>
                <div className='flex space-x-5 '>
                    <ButtonComponent buttontitle="Read notes" />
                    <ButtonComponent buttontitle="Become Author" />

                </div>
            </div>

        </div >
    );
}
