import React from 'react'
import Image from 'next/image'

export default function Feedback() {
    return (
        <div className='m-6 sm:m-10'>
            <h1 className='xs:leading-[48px] text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold font-Jost text-[#37474F]'>Reader Feedback</h1>
            <div className='mt-5 md:mt-10  w-full h-full xl:w-[780px] xl:h-[169px] rounded-md border-[#E0E0E0] border-2'>
                <div className='flex flex-col sm:flex-row space-y-5 xs:space-y-0  m-10 items-center'>
                    <div>
                        <div className='border-[#37474F] sm:border-r-[1px] border-b-[1px] sm:border-b-[0px]  mr-11'>

                            <p className='font-Jost text-sm  border-[#37474F]'>5 Days ago</p>
                            <div>
                                <Image src='/filledstar.png' alt='star' width={15} height={15}></Image>
                                <Image src='/filledstar.png' alt='star' width={15} height={15}></Image>
                                <Image src='/filledstar.png' alt='star' width={15} height={15}></Image>
                                <Image src='/filledstar.png' alt='star' width={15} height={15}></Image>
                                <Image src='/unfilledstar.png' alt='star' width={15} height={15}></Image>
                            </div>
                        </div>

                    </div>
                    <div className='col-span-3 flex flex-col space-y-2 font-Jost text-sm  font-medium leading-4 text-center sm:text-left    '>
                        <p>Good Exprience with this Exam!!</p>
                        <p>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio.</p>
                        <p>Great job!</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
