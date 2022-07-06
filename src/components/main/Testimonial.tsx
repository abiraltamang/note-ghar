import React from 'react'
import Image from 'next/image'

export default function Testimonial() {
    return (
        <div className='mb-14'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-[#37474F] text-center'>
                    <p className='text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold font-Jost mb-4'>Trusted by Best Readers</p>
                    <div className='mx-8 sm:mx-24 md:mx-32 lg:mx-40 xl:mx-52'>
                        <span className='text-xs xs:text-sm sm:text-xl ' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</span>
                    </div>
                </div>

            </div>
            <div className=' flex flex-col sm:flex-row items-center justify-center m-6 '>
                <div className='w-full h-full xl:w-[500px] xl:h-[300px] flex flex-col border-theme border-[1px] rounded-lg p-5 md:p-10 m-2'>
                    <div className='flex items-center justify-start space-x-4 '>
                        <div className='relative h-14 w-12 sm:w-14 sm:h-15 md:w-16 md:h-20 lg:w-20 lg:h-24 '>
                            <Image src='/reviewer2.jpg' alt='reviewer' className='rounded-lg ' layout='fill' />
                        </div>
                        <div>
                            <h3 className='text-lg sm:text-2xl font-bold font-Jost '>Sarah Jain</h3>
                            <p className='text-xs sm:text-sm'>Physics & Biology</p>
                        </div>
                    </div>
                    <div className=' mt-3 sm:mt-5 text-sm text-Jost  leading-2 sm:leading-6'>
                        <p className='text-xs sm:text-base lg:text-lg'>Grursus mal suada faci lisis Lorem ipsum dolarorit more the and ametion consectetur elit. Vesti at bulum odio aea the dumm  the ipsumm suada and consectetur elit.</p>
                    </div>
                </div>
                <div className='w-full h-full xl:w-[500px] xl:h-[300px] flex flex-col border-theme border-[1px] m-2 rounded-lg p-5 md:p-10'>
                    <div className='flex items-center justify-start space-x-4 '>
                        <div className='relative h-14 w-12 sm:w-14 sm:h-15 md:w-16 md:h-20 lg:w-20 lg:h-24 '>
                            <Image src='/reviewer1.jpg' alt='reviewer' className='rounded-lg ' layout='fill' />
                        </div>
                        <div>
                            <h3 className='text-lg sm:text-2xl font-bold font-Jost '>Jiya Divakar</h3>
                            <p className='text-xs sm:text-sm'>Networking & Programming</p>
                        </div>
                    </div>
                    <div className=' mt-3 sm:mt-5 text-sm text-Jost  leading-2 sm:leading-6'>
                        <p className='text-xs sm:text-base lg:text-lg'>Grursus mal suada faci lisis Lorem ipsum dolarorit more the and ametion consectetur elit. Vesti at bulum odio aea the dumm  the ipsumm suada and consectetur elit.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
