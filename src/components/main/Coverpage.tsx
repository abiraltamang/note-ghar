import React from 'react'
import Image from 'next/image'
import ButtonComponent from './ButtonComponent';
type Props = {
    height: any,
}

export default function Coverpage({ height }: Props) {
    return (
        <div>
            <div className='relative before:h-[900px] w-full'>
                <Image src='/cover.png' height={height} width={1580} />
                <div className=' absolute top-0 left-0 font-bold h-[715px] w-full bg-black opacity-50' ></div>
                <div className='absolute top-[150px] left-[393px]  w-[655px] h-[130px] font-jost text-white '>
                    <p className='font-bold font-jost not-italic text-[50px] leading-[65px] text-center' >We Store Notes and Spread All Over the World </p>
                </div>
                <div className='absolute top-[310px] left-[437px]  w-[566px] h-[45px] text-tgray '>
                    <p className='font-medium font-Inter text-base tracking-wider leading-[1.5rem] text-center' >It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout.</p>
                </div>
                <div className='absolute top-[405px] left-[544px]'>
                    <div className='flex'>
                        <div className='mr-4'>
                            <ButtonComponent buttontitle="Become Publisher" />
                        </div>
                        <div>
                            <ButtonComponent buttontitle="Read Notes" />
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
