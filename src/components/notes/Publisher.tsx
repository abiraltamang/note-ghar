import React from 'react';
import Image from 'next/image';

export default function Publisher() {
    return (
        <div className='m-10 '>
            <h1 className='leading-[48px] text-4xl font-semibold font-Jost text-[#37474F]'>About Publisher</h1>
            <div className='mt-10 w-[780px] h-[392px] p-12 rounded-md border-[#E0E0E0] border-2'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <div className='relative h-28 w-28 rounded-[50%] bg-button'>
                            <Image src='/reviewer2.jpg' alt='reviewer' className='rounded-[50%]' height={110} width={110} />
                        </div>
                        <div className=' ml-8'>
                            <h3 className='text-2xl font-bold font-Jost'>Sarah Jain</h3>
                            <p className='text-theme font-medium'>Socialogy, Physics and Biology</p>
                        </div>
                    </div>
                    <div className='w-16 h-7 border-[#E0E0E0] border-2 rounded-md justify-self-start flex items-center justify-center  '>
                        <Image src='/filledstar.png' className='' alt='start' width={15} height={15} />
                        <span className='text-xs ml-2'>4.5</span>


                    </div>

                </div>
                <div className='mt-5 text-sm text-Inter leading-6 mr-10'>
                    <p>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio
                        is aeao the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit.
                        All the that Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary,
                        making this the first true dummy generator on the Internet.</p>
                </div>
                <div className='flex justify-start mt-9 items-center space-x-10 text-sm font-medium font-Jost'>
                    <div className='flex items-center'>
                        <Image src='/bookmark.png' alt='' width={15} height={20} />
                        <span className='ml-4'>05 Exams</span>
                    </div>
                    <div className='flex items-center'>
                        <Image src='/edit2.png' alt='' width={18} height={18} />
                        <span className='ml-4'>05 Exams</span>
                    </div>
                    <div className='flex items-center'>
                        <Image src='/subject.png' alt='' width={15} height={15} />
                        <span className='ml-4'>05 Exams</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
