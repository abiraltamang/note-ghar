import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function MyAccount() {
  return (
    <div className='author-container'>
        <div className='bg-theme p-3 rounded-t-[5px] flex items-center justify-between text-white'>
            <p> My account</p>
            <div className='flex space-x-5'> 
               <Link href='edityourdetails'>
                <div className='flex cursor-pointer'>
                    <Link href='edityourdetails'>
                        <div className='flex items-center cursor-pointer '>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    <span>Edit your details</span>
                        </div>
                    </Link>
                </div>
               </Link>
            </div>
        </div>
        <div className='flex items-start space-x-5  py-3'>
            <div className='relative'>
                <Image src='/publisher image.png' width={255} height={228} alt="publisher"></Image>
            </div>
            <div className=' w-[650px] xl:w-[804px] h-full p-4 dashboard-border font-Inter font-normal text-[#263238]  '>
                <div className='flex border-b-[1px] border-[#E0E0E0] pb-2'>
                    <p>Full Name</p>
                    <p>: Mr Sachin Ray</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Email</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Phone</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className=' flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Address</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Role</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Date of Joining</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Readings</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex pt-2'>
                    <p>Subscriptions</p>
                    <p>: Mr John Deo</p>
                </div>


            </div>
        </div>

    </div>
  )
}
