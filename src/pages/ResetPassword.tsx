import React from 'react'
import Image from 'next/image'
import ButtonComponent from '../components/main/ButtonComponent'
import Link from 'next/link'

export default function Resetpassword() {
    return (
        <div className='grid grid-cols-2 '>
            <div className="object-cover  relative z-0 w-full h-[760px]">
                <Link href="Main">
                    <div className='absolute cursor-pointer top-12 left-10 z-10'>
                        <Image src="/logo.png" alt='' width={220} height={50} />
                    </div>
                </Link>
                <div>
                    <Image className='object-cover object-right ' alt='' src='/login page.png' layout="fill"></Image>
                </div>
            </div>
            <div className='flex flex-col m-10 mt-32 text-[#323232] space-y-6' >
                <div>
                    <h1 className='leading-[59px] text-5xl font-bold font-Jost'>Reset your password </h1>
                    <p className='  leading-6 font-Inter text-[#ABABAB]'>The verification email will be sent to the mailbox.</p>
                    <p className='  leading-6 font-Inter text-[#ABABAB]'> Please check it.</p>

                </div>

                <div className='mt-9'>
                    <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Enter your email</h2>
                    <input type="text" placeholder='Enter email' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-96' />
                </div>
                <div className='mt-9'>
                    <h2 className='text-md text-[#455A64] mb-2 text-Inter font-medium'>Enter verification code</h2>
                    <input type="password" placeholder='Enter code' className='outline-none border-b-2 border-tgray p-2 rounded-lg w-96' />
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
