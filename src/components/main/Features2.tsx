import React from 'react'
import Image from 'next/image'

export default function Features2() {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 my-20'>
                <div className='flex flex-col text-[#37474F] order-2 space-y-6' >
                    <div>
                        <h1 className='leading-[59px] text-5xl font-bold font-Jost'>Manage Your Notes
                            Access & Read Anywhere</h1>
                    </div>
                    <div className='mt-3 '>
                        <p className='leading-6 font-Inter'>It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout.</p>
                    </div>
                    <div className='flex mt-6'>
                        <div className='mx-4'>
                            <Image src="/edit.png" alt="image" width={50} height={50} />
                        </div>
                        <div className='flex flex-col space-y-2 pr-28'>
                            <h1 className='text-2xl font-bold font-Jost '>List Your Notes In Few Clicks</h1>
                            <p>It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div className='flex mt-6'>
                        <div className='mx-4'>
                            <Image src="/book.png" alt="image" width={50} height={50} />
                        </div>
                        <div className='flex flex-col space-y-2 pr-28'>
                            <h1 className='text-2xl font-bold font-Jost '>Access It All Over The World</h1>
                            <p>It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center order-1">
                    <div>
                        <Image src='/aboutsection.png' alt='image' width={400} height={400} layout="intrinsic"></Image>
                    </div>
                </div>

            </div>

        </div>
    )
}
