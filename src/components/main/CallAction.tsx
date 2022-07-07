import React from 'react'
import Image from 'next/image';
import ButtonComponent from './ButtonComponent';

export default function CallAction() {
    return (
        <div className='relative w-full h-[450px] sm:h-[550px] md:h-[600px]  '  >
            <Image className='object-center object-cover brightness-50 ' src="/callaction.png" alt='bg image' layout='fill' />
            <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full space-y-3 md:space-y-3 lg:space-y-4 xl:space-y-6 '>
                <div className=' text-[5vw] xs:text-[4vw] sm:text-[4.5vw] md:text-[4vw] lg:text-mainheading font-bold font-Jost p-15 text-center text-[#FFFFFF] '>
                    <h1 >List Your Notes With Us </h1>
                    <h1 >And Access It From Anywhere</h1>
                </div>
                <div className=' text-center text-white '>
                    <p className='text-xs xs:text-base px-6 md:px-20 lg:px-32 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className='flex  space-y-5 items-center xs:space-y-0 justify-center xs:space-x-5 flex-col xs:flex-row '>
                    <div>
                        <button className='transparent-btn hidden sm:block'>Read Notes</button>
                        <button className='small-transparent-btn rounded-lg text-sm sm:hidden'>Read Notes</button>
                    </div>
                    <div>
                        <button className='transparent-btn hidden sm:block'>Become Author</button>
                        <button className='small-transparent-btn rounded-lg text-sm sm:hidden'>Become Author</button>
                    </div>

                </div>
            </div>

        </div >
    );
}
