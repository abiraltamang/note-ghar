import React from 'react';
import Rating from '../notes/Rating';
type Props = {
    price: any,
}
export default function PriceRating({ price }: Props) {
    return (
        <>
            <div className='relative flex items-center w-[265px] h-[36px] justify-between px-5 rounded-[5px] '>
                <div className='absolute top-0 left-0 w-[265px] h-[36px] bg-black opacity-50'></div>
                <span className='text-sm font-medium font-Jost text-white '>Price: Rs {price}</span>
                <Rating textColor="text-white" />
            </div>
        </>
    )
}
