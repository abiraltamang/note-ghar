import React from 'react';
import Eye from '../svg icons/Eye';
import Submit from '../svg icons/Submit';
import Upload from './Upload';
import Notedescription from './Notedescription';
import Preview from './Preview';
import Link from 'next/link';

export default function CreateNote() {
  return (
    <div className='w-full bg-white h-[668px] overflow-auto text-white font-Inter font-medium  p-4 rounded-lg'>
        <div className='bg-theme p-3 rounded-t-[5px] flex items-center justify-between'>
            <p> Create your note</p>
            <div className='flex space-x-5'> 
               <Link href='createnoteview'>
                <div className='flex cursor-pointer'>
                    <Eye />
                    <span>View Note</span>
                </div>
               </Link>
                <div className='flex items-center'>
                    <Submit/>
                    <span>Submit</span>
                </div>
            </div>
        </div>
        <div className='grid  grid-cols-2  lg:grid-cols-4 items-center justify-around text-[#323232] font-Inter font-normal py-6 space-x-4' >
            <div>
                <p>Note Title</p>
                <input type="text" placeholder='Enter note title' className='input-dashboard' />
            </div>
            <div>
                <p>Category</p>
                <input type="text" placeholder='Select categoty' className='input-dashboard' />
            </div>
            <div>
                <p>Price  of Note</p>
                <input type="text" placeholder='Enter price of note' className='input-dashboard' />
            </div>
            <div>
                <p>Duration of note</p>
                <input type="text" placeholder='Enter note title' className='input-dashboard' />
            </div>  
        </div>
        <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2'>
        <Upload />

            </div>
        <Preview />
        </div>
        <Notedescription />
    </div>
  )
}
