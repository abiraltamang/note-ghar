import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ButtonComponent from '../components/main/ButtonComponent'

export default function Signup() {
    return (
        <div>
            <div className='grid grid-cols-2 '>
                <div className="object-cover  relative z-0 w-full h-[760px]">
                    <Link href="Main">
                        <div className='absolute cursor-pointer top-12 left-10 z-10'>
                            <Image src="/logo.png" width={220} height={50} />
                        </div>
                    </Link>
                    <div>
                        <Image className='object-cover object-right ' src='/login page.png' layout="fill"></Image>
                    </div>
                </div>
                <div className='flex flex-col m-10 mt-32 text-[#323232] space-y-6' >
                    <div>
                        <h1 className='leading-[59px] text-5xl font-bold font-Jost'>Welcome Back </h1>
                        <p className='  leading-6 font-Inter text-[#ABABAB]'>Create your account</p>

                    </div>
                    <div className='flex space-x-10 mt-9'>
                        <div>
                            <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Username</h2>
                            <input type="text" placeholder='Enter username' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-72' />
                        </div>
                        <div >
                            <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Full Name</h2>
                            <input type="text" placeholder='John Deo' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-72' />
                        </div>
                    </div>
                    <div className='flex space-x-10 mt-9'>
                        <div>
                            <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Email</h2>
                            <input type="email" placeholder='Enter email' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-72' />
                        </div>
                        <div >
                            <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Phone</h2>
                            <input type="number" placeholder='Enter phone' className=' outline-none border-b-2 border-tgray p-2 rounded-lg w-72' />
                        </div>
                    </div>
                    <div className='flex space-x-10 mt-9'>
                        <div>
                            <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Role</h2>
                            <input type="text" placeholder='Choose role' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-72' />
                        </div>
                        <div >
                            <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Password</h2>
                            <input type="password" placeholder='Enter password' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-72' />
                        </div>
                    </div>
                    <div>
                        <ButtonComponent buttontitle="Login" />
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
