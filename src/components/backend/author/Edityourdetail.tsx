import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiSave} from 'react-icons/fi'

export default function Edityourdetail() {
  return (
    <div className='p-4 h-full w-full bg-white rounded-lg font-Inter text-[15px] overflow-auto '>
    <div className='w-[75.556vw] h-[40px] bg-theme font-medium text-white rounded-t-md flex items-center justify-between px-10 '>
        <div className='flex items-center justify-between  '>
                <Link href="Authors">
                    <h2 className='text-[#F0F0F0]'>My accounts </h2>
                </Link>
                <div className=' mx-2 w-2 h-2  bg-white rounded-[50%]'></div>
                <Link href="Notedetails">
                    <span>Edit your details</span>
                </Link>
        </div>
            <div className='flex'>
            <FiSave />
                <p>Save your details</p>
            </div>
           

    </div>

    <div className='flex space-x-5 my-6'>
        <div >
            <div className='relative h-[228px] w-[255px]'>
                <Image src='/publisher image.png' alt='publishers' layout='fill' />
            </div>
        </div>
        <div className=' grid  grid-cols-2 xl:grid-cols-3 gap-5 font-normal col-span-3 '>
            <div>
                <p>Salutation</p>
                <input type="text" placeholder='Mr' className='input-dashboard ' disabled />
            </div>
            <div>
                <p>User Name</p>
                <input type="text" placeholder='John006' className='input-dashboard' disabled />
            </div>
            <div>
                <p>First Name</p>
                <input type="text" placeholder='John' className='input-dashboard' disabled />
            </div>
            <div>
                <p>Middle Name</p>
                <input type="text" placeholder='Enter middle name' className='input-dashboard' disabled />
            </div>
            <div>
                <p>Last Name</p>
                <input type="text" placeholder='Deo' className='input-dashboard' disabled />
            </div>
            <div>
                <p>Email</p>
                <input type="text" placeholder='johndeo@testmail.com' className='input-dashboard' disabled />
            </div>
            <div>
                <p>Phone </p>
                <input type="text" placeholder='+97952545155    ' className='input-dashboard' disabled />
            </div>
            <div>
                <p>Address</p>
                <input type="text" placeholder='Shantinagar, Baneshwor  ' className='input-dashboard' disabled />
            </div>
        </div>
    </div>
</div >
  )
}
