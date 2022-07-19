import React from 'react'
import Link from 'next/link'
import Save from '../../svg icons/Save'
import Eye from '../../svg icons/Eye'

export default function Notedetail2() {
  return (
    <div>
         <div className='bg-theme  w-full p-3 rounded-t-[5px] flex items-center justify-between text-white'>
          <div className='flex items-center justify-between  '>
                  <Link href="Authors">
                      <h2 className='text-[#F0F0F0]'>My Notes </h2>
                  </Link>
                  <div className=' mx-2 w-2 h-2  bg-white rounded-[50%]'></div>
                  <Link href="Notedetails">
                      <span>Note details</span>
                  </Link>
          </div>
          <div className='flex space-x-4'>
              <div className='flex items-center'>
                  <Save />
                  <p>Save details</p>
              </div>
              
              <div className='flex'>
                  <Eye />
                  <p>View Note</p>
              </div>
          </div>
       </div>
      <div className='flex w-full  p-4 dashboard-border font-Inter font-normal text-[#263238] space-x-8  '>
                <div className=' pb-2'>
                    <p>Note Title</p>
                    <input type="text" placeholder='Physics note ' className='input-dashboard' />
                </div>
                <div className=' pb-2'>
                    <p>Category</p>
                    <input type="text" placeholder='Physics note ' className='input-dashboard' />
                </div>
                <div className=' pb-2'>
                    <p>Price</p>
                    <input type="text" placeholder='Physics note ' className='input-dashboard' />
                </div>
                <div className=' pb-2'>
                    <p>Duration of time</p>
                    <input type="text" placeholder='Physics note ' className='input-dashboard' />
                </div>


            </div>
    </div>
  )
}
