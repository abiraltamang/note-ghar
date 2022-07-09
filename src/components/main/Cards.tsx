import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PriceRating from './PriceRating';
import { url } from 'inspector';
type Props = {
    image: any,
}
export default function Cards({ image }: Props) {

    return (
        <div className="max-w-sm rounded-xl overflow-hidden  shadow-lg text-themetext">
            <div className='relative'>
                <div className='relative h-[260px] [385px]'>
                    <Image className='object-fill' src={`/${image}.jpg`} alt="Sunset in the mountains" layout="fill" />
                </div>
                <div className='absolute top-[209px] left-[20px]'>
                    <PriceRating price="4k" />
                </div>
            </div>
            <div className="px-6 py-5 ">
                <div className="font-bold text-lg sm:text-xl font-Jost  mb-2">Economics Complete Note</div>
                <p className=" text-sm leading-[21px] font-Inter font-medium ">
                    It is a long established fact that a reader will be distracted for the post. </p>
            </div>
            <div className='flex items-center justify-between mb-5 mx-5'>
                <div className='flex items-center justify-center'>
                    <Image src='/book.png' alt="card image" width={20} height={20} />
                    <span className='ml-2 text-xs sm:text-sm font-Jost font-medium'>400 Readings</span>
                </div>
                <Link href='Examdetails'>
                    <div className='text-xs sm:text-sm cursor-pointer text-theme font-semibold decoration-none font-Jost'>
                        Read Now
                    </div>
                </Link>
            </div>
        </div>

    )
}
