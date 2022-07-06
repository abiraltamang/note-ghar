import React from 'react'
import Image from 'next/image';
import ButtonComponent from './ButtonComponent';

export default function CallAction() {
    return (
        <div className='relative' >
            <Image className='absolute top-0 left-0 object-center object-cover brightness-50 ' src="/callaction.png" alt='bg image' height={700} width={1660} layout='responsive' />
            <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-6 '>
                <div className='text-xl leading-6 leading xl:leading-[59px] xl:text-5xl xl:font-bold font-Jost p-15 text-center text-[#FFFFFF] '>
                    <h1 >List Your Notes With Us </h1>
                    <h1 >And Access It From Anywhere</h1>
                </div>
                <div className='text-xs text-center text-white '>
                    <p>It is a long established fact that a reader will be distracted by the readable </p>
                    <p>content of a page when looking at its layout.</p>
                </div>
                <div className='flex space-x-5 '>
                    <button className='transparent-btn'>Read Notes</button>
                    <button className='transparent-btn'>Become Author</button>

                </div>
            </div>

        </div >
    );
}
