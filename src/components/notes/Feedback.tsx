import React from 'react'
import Image from 'next/image'

export default function Feedback() {
    return (
        <div className='m-10'>
            <h1 className='leading-[48px] text-4xl font-semibold font-Jost text-[#37474F]'>Reader Feedback</h1>
            <div className='mt-10 w-[780px] h-[169px] rounded-md border-[#E0E0E0] border-2'>
                <div className='grid grid-cols-4 m-10 items-center'>
                    <div>
                        <div className='border-[#37474F] border-r-[1px] mr-11'>

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
                    <div className='col-span-3 flex flex-col space-y-2 font-Jost text-sm  font-medium leading-4'>
                        <p>Good Exprience with this Exam!!</p>
                        <p>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio.</p>
                        <p>Great job!</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
