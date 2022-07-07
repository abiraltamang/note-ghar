import React from 'react';
import Image from 'next/image';

export default function Notes() {
    return (
        <div className='m-6 sm:m-10'>
            <Image src='/economics image.png' alt='note' height={500} width={800} layout="responsive" />
            <h1 className='leading-3 xs:leading-[48px] mt-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl  font-semibold font-Jost text-[#37474F]'>Economics Complete Note</h1>
            <div className='flex  flex-col xs:flex-row justify-start mt-5 md:mt-9 mb-5 items-start xs:space-x-10 space-y-1 text-xs xs:text-sm xs:space-y-0 text- font-medium font-Jost'>
                <div className='flex items-center'>
                    <Image src='/time.png' alt='' width={15} height={20} />
                    <span className='ml-4'>23, June - 30, July 2022</span>
                </div>
                <div className='flex items-center'>
                    <Image src='/bookmark.png' alt='' width={18} height={18} />
                    <span className='ml-4'>30 ongoing</span>
                </div>
            </div>
            <div className='w-full text-sm xs:text-base text-justify'>
                <p className='mb-5'>
                    Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio
                    is aeao the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit.
                    All the that Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary,
                    making this the first true dummy generator on the Internet.
                </p>
                <p className='mb-5'>

                    It uses a dictionary of over 200 Latin words, combined Lorem the Ipsum looks reasonable. Grursus mal
                    suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm
                    ipsumm ipsum that dolocons rsus mal suada and fadolorit to the and consectetur elit. All the Lorem Ipsum
                    generators on the Internet tend to repeat that predefined chunks as of necessary, making dummy generator
                    the Internet
                </p>
                <p className='mb-5'>

                    Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio
                    is aeao the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit.
                    All the that Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary,
                    making this the first true dummy generator on the Internet.

                </p>
            </div >


        </div >
    )
}
