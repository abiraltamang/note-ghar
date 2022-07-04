import React from 'react'
import Image from 'next/image'

export default function Testimonial() {
    return (
        <div className='my-30'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-[#37474F] text-center'>
                    <h2 className='text-5xl leading-[59px]  font-bold font-Jost mb-4'>Trusted by Best Readers</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable </p>
                    <p> content of a page when looking at its layout.</p>
                </div>

            </div>
            <div className='flex items-start justify-center mt-12  space-x-12'>
                <div className='w-[500px] h-[300px] border-theme border-[3px] rounded-lg'>
                    <Image src='/reviewer2.jpg' height={150} width={100} />

                </div>
                <div className='w-[500px] h-[300px] border-tgray border-[3px] rounded-lg'>

                </div>
            </div>
        </div>
    )
}
