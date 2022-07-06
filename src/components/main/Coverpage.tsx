import React from 'react'
import Image from 'next/image'
import ButtonComponent from './ButtonComponent';
type Props = {
    height: any,
}

export default function Coverpage({ height }: Props) {
    return (
        <div className='relative' >
            <Image src='/cover.png' alt='cover image' className='brightness-50' height={height} width={1580} layout='responsive' />

            <div className='absolute w-full h-full top-0 space-y-2  left-0 lg:space-y-6 lg:-mt-14 flex flex-col items-center justify-center'>
                <div className='text-[24px] font-bold text-white font-Jost not-italic leading-[30px] md:text-[50px] md:leading-[65px] text-center'>
                    <p>We Store Notes and Spread </p>
                    <p>All Over the World </p>
                </div>
                <div className='text-xs px-16 md:text-base font-medium font-Inter text-tgray  tracking-wider leading-2 text-center'>

                    <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>


                </div>

                <div className='flex'>
                    <div className='mr-4'>
                        <button className='theme-btn '> Become Publisher</button>
                    </div>
                    <div>
                        <button className='transparent-btn'>Read Notes</button>
                    </div>
                </div>


            </div>



        </div >
    )
}
