import React from 'react'
import Image from 'next/image'
import ButtonComponent from '../components/main/ButtonComponent'
import Link from 'next/link'
export default function Login() {
    return (
        <div className='grid md:grid-cols-8  '>
            <div className="object-cover hidden md:inline-block relative z-0 w-full h-[760px] sm:col-span-2 md:col-span-3 lg:col-span-4">
                <Link href="/">
                    <div className='absolute cursor-pointer top-12 left-10 z-10'>
                        <Image src="/logo.png" alt='logo' width={228} height={45} layout='fixed' />
                    </div>
                </Link>
                <div>
                    <Image className='object-cover object-right' alt='loginpage' src='/login page.png' layout="fill"></Image>
                </div>
            </div>
            <div className='flex flex-col m-10 md:mt-32 text-[#323232] space-y-6   md:col-span-5 lg:col-span-4' >
                <Link href='Main'>
                    <div className='md:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                </Link>
                <div>
                    <h1 className='sm:leading-[59px] text-4xl  xs:text-5xl font-bold font-Jost'>Welcome Back </h1>
                    <p className='  leading-6 font-Inter text-[#ABABAB]'>Login to your account</p>

                </div>

                <div className='mt-9'>
                    <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Username</h2>
                    <input type="text" placeholder='Enter username' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-96 ' />
                </div>
                <div className='mt-9'>
                    <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Password</h2>
                    <input type="password" placeholder='Enter password' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-48 sm:w-60 md:w-96' />
                    <Link href='Resetpassword'>
                        <p className=' leading-6  font-Inter cursor-pointer text-[#ABABAB] text-sm mt-2 ml-2'>Forget Password ?</p>
                    </Link>
                </div>
                <div>
                    <button className='purple-btn'>login</button>
                </div>

                <div>
                    <p className=' leading-6 font-Inter text-[#ABABAB] text-sm mt-2 ml-2'>Don’t you have an account?
                        <Link href="Signup">
                            <span className='text-[#F42A41] xs:ml-4 text-md cursor-pointer'>Signup</span>
                        </Link>
                    </p>
                </div>

            </div>


        </div >
    )
}
