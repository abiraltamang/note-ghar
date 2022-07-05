import React from 'react'
import Image from 'next/image'

export default function Testimonial() {
    return (
        <div className='mb-14'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-[#37474F] text-center'>
                    <h2 className='text-5xl leading-[59px]  font-bold font-Jost mb-4'>Trusted by Best Readers</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable </p>
                    <p> content of a page when looking at its layout.</p>
                </div>

            </div>
            <div className='flex items-center justify-center mt-12  space-x-12'>
                <div className='w-[500px] h-[300px] flex flex-col border-theme border-[3px] rounded-lg p-10'>
                    <div className='flex items-center justify-between'>
                        <div className=' '>
                            <Image src='/reviewer2.jpg' alt='reviewer' className='rounded-lg  ' height={105} width={100} />
                        </div>
                        <div className='-ml-10'>
                            <h3 className='text-2xl font-bold font-Jost'>Sarah Jain</h3>
                            <p>Physics & Biology</p>
                        </div>
                        <div>
                            <Image src='/quotation.png' alt='quotation' height={80} width={100} />
                        </div>

                    </div>
                    <div className='mt-5 text-sm text-Jost leading-6'>
                        <p>Grursus mal suada faci lisis Lorem ipsum dolarorit more the and </p>
                        <p> ametion consectetur elit. Vesti at bulum odio aea the dumm</p>
                        <p> the ipsumm suada and consectetur elit.</p>
                    </div>
                </div>
                <div className='w-[500px] h-[300px] flex flex-col border-theme border-[3px] rounded-lg p-10'>
                    <div className='flex items-center justify-start'>
                        <div className=''>
                            <Image src='/reviewer1.jpg' alt='reviewer' className='rounded-lg ' height={105} width={100} />
                        </div>
                        <div className='ml-8'>
                            <h3 className='text-2xl font-bold font-Jost'>Jiya Divakar</h3>
                            <p>Networking & Programming</p>
                        </div>


                    </div>
                    <div className='mt-5 text-sm text-Jost leading-6'>
                        <p>Grursus mal suada faci lisis Lorem ipsum dolarorit more the and </p>
                        <p> ametion consectetur elit. Vesti at bulum odio aea the dumm</p>
                        <p> the ipsumm suada and consectetur elit.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
