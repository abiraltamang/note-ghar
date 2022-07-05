import React from 'react'
import Image from 'next/image'
type Props = {
    detail: any
}

export default function Notecover({ detail }: Props) {
    return (
        <div className='relative w-full h-[270px]'>
            <Image className='object-cover  object-center' src="/cover.png" layout='fill' style={{ filter: "brightness(0.3)" }} />
            <div className='absolute top-20 -ml-16 left-1/2 text-center'>
                <h2 className='font-Jost font-bold text-white text-3xl leading-[51px] tracking-wider'>Notes</h2>
                <h2 className='font-Jost font-medium text-white text-lg leading-[29px] '>Home - <span className='text-button'>{detail}</span></h2>
            </div>

        </div>
    )
} 
