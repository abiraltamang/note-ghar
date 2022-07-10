import React from 'react'
import Image from 'next/image'

export default function Testimonial() {
    return (
        <div className='my-14'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-[#37474F] text-center'>
                    <p className='text-2xl sm:text-3xl lg:text-heading  font-bold font-Jost mb-4 text-center'>Trusted by Best Readers</p>
                    <div className='mx-5 xs:mx-20 sm:mx-24 md:mx-32 lg:mx-40 xl:mx-52'>
                        <p className='text-center text-sm sm:px-14 lg:px-36 xl:px-48 font-medium  font-Inter leading-normal text text-[#37474F] md:text-base' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                    </div>
                </div>
            </div>
            <div className=' flex flex-col sm:flex-row items-center justify-between my-6 mx-[22px] sm:mx-[55px] md:mx-[65px] lg:mx-[80px] xl:mx-[125px] text-themetext sm:space-x-[40px] space-y-5 sm:space-y-0 '>
                <div className='w-full h-full  xl:w-[575px] xl:h-[321px] flex flex-col border-[#CCCCCC] hover:border-theme border-[1px] rounded-lg p-3 md:p-5 lg:p-10 '>
                    <div className='flex items-center justify-start space-x-4 '>
                        <div className='relative h-14 w-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 '>
                            <Image src='/reviewer2.jpg' alt='reviewer' className='rounded-lg ' layout='fill' />
                        </div>
                        <div>
                            <h3 className='text-lg sm:text-2xl font-semibold font-Jost '>Sarah Jain</h3>
                            <p className='text-xs sm:text-sm font-medium font-Inter leading-[17px] text-theme'>Physics & Biology</p>
                        </div>
                    </div>
                    <div className=' mt-3 sm:mt-5 text-sm text-Jost  leading-2 sm:leading-6'>
                        <p className='text-sm sm:text-md lg:text-base font-Inter font-medium'>Grursus mal suada faci lisis Lorem ipsum dolarorit more the and ametion consectetur elit. Vesti at bulum odio aea the dumm  the ipsumm suada and consectetur elit.</p>
                    </div>
                </div>
                <div className='w-full h-full  xl:w-[575px] xl:h-[321px] flex flex-col border-[#CCCCCC] hover:border-theme border-[1px]  rounded-lg p-3 md:p-5 lg:p-10'>
                    <div className='flex items-center justify-start space-x-4 '>
                        <div className='relative h-14 w-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 '>
                            <Image src='/reviewer1.jpg' alt='reviewer' className='rounded-lg ' layout='fill' />
                        </div>
                        <div>
                            <h3 className='text-lg sm:text-2xl font-semibold font-Jost'>Jiya Divakar</h3>
                            <p className='text-xs sm:text-sm font-medium font-Inter leading-[17px] text-theme'>Networking & Programming</p>
                        </div>
                    </div>
                    <div className=' mt-3 sm:mt-5 text-sm text-Jost  leading-2 sm:leading-6'>
                        <p className='text-sm sm:text-md lg:text-base font-Inter font-medium'>Grursus mal suada faci lisis Lorem ipsum dolarorit more the and ametion consectetur elit. Vesti at bulum odio aea the dumm  the ipsumm suada and consectetur elit.</p>
                    </div>
                </div>

            </div>
            <div className='flex items-center justify-center space-x-2'>
                <div className='w-[12px] h-[12px] rounded-[50%] bg-[#1BA8B1]'></div>
                <div className='w-[12px] h-[12px] rounded-[50%] bg-[#E0E0E0] hover:bg-[#1BA8B1]'></div>
                <div className='w-[12px] h-[12px] rounded-[50%] bg-[#E0E0E0] hover:bg-[#1BA8B1]'></div>
                <div className='w-[12px] h-[12px] rounded-[50%] bg-[#E0E0E0] hover:bg-[#1BA8B1]'></div>
            </div>
        </div>
    )
}
