import React from 'react'
import Image from 'next/image'
export default function Rating() {
    return (
        <div className='w-16 h-7  rounded-md justify-self-start flex items-center justify-center  '>
            <Image src='/filledstar.png' className='' alt='start' width={15} height={15} />
            <span className='text-xs ml-2'>4.5</span>
        </div>
    )
}
