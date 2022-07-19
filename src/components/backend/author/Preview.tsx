import React from 'react'

export default function Preview() {
  return (
    <div className='border-[1px] border-[#E0E0E0] rounded-lg '>
        <div className='bg-theme p-3 rounded-t-[5px] w-full'>
            <p>Upload your note</p>     

        </div>
        <div className='m-5'>

        <p className='pb-3 text-[#ABABAB] border-b-[1px] border-[#E0E0E0]'>Seperate page with coma : 1 ,3 ,4</p> 
        <div className='py-5 flex flex-col items-center justify-center space-y-5'>
            <p className='text-[#263238]'>Enter Page Number</p>
            <input type="text" placeholder='1, 2, 3 .....'  className='px-4 border-[1px] border-[#263238] h-[40px] rounded-lg w-[13.542vw]'/>
        </div>
        </div>
      
    </div>
  )
}
