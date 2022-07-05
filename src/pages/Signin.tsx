import React from 'react'
import Image from 'next/image'
import ButtonComponent from '../components/main/ButtonComponent'
import Link from 'next/link'
export default function Login() {
    return (
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
                    <p className='  leading-6 font-Inter text-[#ABABAB]'>Login to your account</p>

                </div>

                <div className='mt-9'>
                    <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Username</h2>
                    <input type="text" placeholder='Enter username' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-96' />
                </div>
                <div className='mt-9'>
                    <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Password</h2>
                    <input type="password" placeholder='Enter password' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-96' />
                    <Link href='ResetPassword'>
                        <p className=' leading-6  font-Inter cursor-pointer text-[#ABABAB] text-sm mt-2 ml-2'>Forget Password ?</p>
                    </Link>
                </div>
                <div>
                    <ButtonComponent buttontitle="Login" />
                </div>

                <div>
                    <p className=' leading-6 font-Inter text-[#ABABAB] text-sm mt-2 ml-2'>Don’t you have an account?
                        <Link href="Signup">
                            <span className='text-[#F42A41] ml-4 text-md cursor-pointer'>Signup</span>
                        </Link>
                    </p>
                </div>

            </div>


        </div>
    )
}
