import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ButtonComponent from '../components/main/ButtonComponent'

export default function Signup() {
    return (
        <div>
            <div className='grid sm:grid-cols-8 '>
                <div className="object-cover hidden md:inline-block relative z-0 w-full h-[760px] sm:col-span-2 md:col-span-3 lg:col-span-4">
                    <Link href="Main">
                        <div className='absolute cursor-pointer top-12 left-10 z-10'>
                            <Image src="/logo.png" alt='logo' width={220} height={50} />
                        </div>
                    </Link>
                    <div>
                        <Image className='object-cover object-right' alt='login page' src='/login page.png' layout="fill"></Image>
                    </div>
                </div>
                <div className='flex flex-col m-10 mt-32 text-[#323232] space-y-6 col-span-5  md:col-span-5 lg:col-span-4' >
                    <Link href='Main'>
                        <div className='md:hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </div>
                    </Link>
                    <div>
                        <h1 className='leading-[59px] text-5xl font-bold font-Jost'>Welcome Back </h1>
                        <p className='  leading-6 font-Inter text-[#ABABAB]'>Create your account</p>

                    </div>
                    <div className='flex space-x-10 mt-9'>
                        <div>
                            <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Username</h2>
                            <input type="text" placeholder='Enter username' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-72' />
                        </div>
                        <div >
                            <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Full Name</h2>
                            <input type="text" placeholder='John Deo' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-72' />
                        </div>
                    </div>
                    <div className='flex space-x-10 mt-9'>
                        <div>
                            <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Email</h2>
                            <input type="email" placeholder='Enter email' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-72' />
                        </div>
                        <div >
                            <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Phone</h2>
                            <input type="number" placeholder='Enter phone' className=' outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-72' />
                        </div>
                    </div>
                    <div className='flex space-x-10 mt-9'>
                        <div>
                            <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Role</h2>
                            <input type="text" placeholder='Choose role' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-72' />
                        </div>
                        <div >
                            <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Password</h2>
                            <input type="password" placeholder='Enter password' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-72' />
                        </div>
                    </div>
                    <div>
                        <button className='purple-btn'>Signup</button>
                    </div>

                    <div>
                        <p className=' leading-6 font-Inter text-[#ABABAB] text-sm mt-2 ml-2'>Already have an account?
                            <Link href="Signin">
                                <span className='text-[#F42A41] ml-4 cursor-pointer text-md'>Login</span>
                            </Link>
                        </p>
                    </div>

                </div>


            </div>
        </div>
    )
}
