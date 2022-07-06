import React from 'react'
import ButtonComponent from '../main/ButtonComponent'
import Rating from '../notes/Rating'


export default function Examdetailstable() {
    return (
        <div className='h-96 w-72 grid grid-rows-6  border-[#E0E0E0] rounded-b-md'>
            <div className='bg-theme rounded-t-md p-6 text-md font-medium text-white'>
                <p className=' '>Exam Details</p>
            </div>
            <div className=' text-sm p-8 border-x-[1px] border-b-[1px]  font-medium text-[#37474F] flex items-center justify-between'>
                <p >Page Count:</p>
                <p >896 Pages</p>
            </div>
            <div className=' text-sm p-8 border-x-[1px] border-b-[1px] font-medium text-[#37474F] flex items-center justify-between'>
                <p >Subject</p>
                <p >Economics</p>
            </div>
            <div className=' text-sm p-8  font-medium text-[#37474F] flex items-center justify-between'>
                <p >Current Status</p>
                <p >20 reading</p>
            </div>
            <div className=' row-span-2 text-sm p-3 border-b-[1px] border-x-[1px] font-medium text-[#37474F] flex flex-col items-center justify-between'>
                <div className='bg-[#00000082] w-56 h-14 rounded-md flex justify-around text-white items-center'>
                    <p>Price: Rs 5k</p>
                    <Rating />
                </div>
                <ButtonComponent buttontitle="Get Note" />
            </div>

        </div>
    )
}
