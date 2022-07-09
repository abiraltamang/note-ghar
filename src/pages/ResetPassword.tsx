import React from 'react'
import Image from 'next/image'
import ButtonComponent from '../components/main/ButtonComponent'
import Link from 'next/link'

export default function Resetpassword() {
    return (
        <div className='grid sm:grid-cols-8 '>
            <div className="object-cover hidden sm:inline-block  relative z-0 w-full h-[760px] sm:col-span-2 md:col-span-3 lg:col-span-4">
                <Link href="Main">
                    <div className='absolute cursor-pointer top-12 left-10 z-10'>
                        <Image src="/logo.png" alt='' width={220} height={50} />
                    </div>
                </Link>
                <div>
                    <Image className='object-cover  object-right ' alt='' src='/login page.png' layout="fill"></Image>
                </div>
            </div>
            <div className='flex flex-col m-10 md:mt-32 text-[#323232] space-y-6 col-span-3  md:col-span-5 lg:col-span-4' >
                <Link href='Main'>
                    <div className='md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                </Link>
                <div>
                    <h1 className='text-xl mb-5 sm:mb-0 leading-[40px] sm:leading-[59px] sm:text-5xl font-bold font-Jost'>Reset your password </h1>
                    <p className='  leading-6 font-Inter text-[#ABABAB]'>The verification email will be sent to the mailbox.</p>
                    <p className='  leading-6 font-Inter text-[#ABABAB]'> Please check it.</p>

                </div>

                <div className='mt-9'>
                    <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Enter your email</h2>
                    <input type="text" placeholder='Enter email' className='outline-none border-b-2 border-tgray p-2 rounded-lg  w-48 sm:w-60 md:w-96' />
                </div>
                <div className='mt-9'>
                    <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Enter verification code</h2>
                    <input type="password" placeholder='Enter code' className='outline-none border-b-2 border-tgray p-2 rounded-lg   w-48 sm:w-60 md:w-96' />
                </div>
                <div>
                    <button className='purple-btn'>Verify</button>
                </div>

                <div>
                    <Link href="Signin">
                        <div>
                            <p className=' leading-6 font-Inter text-[#ABABAB] text-sm mt-2 cursor-pointer ml-2'>Back to login </p>
                        </div>
                    </Link>
                </div>

            </div>


        </div >
    )
}
