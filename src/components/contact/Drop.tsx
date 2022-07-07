import React from 'react'

export default function Drop() {
    return (
        <div className='my-20  space-y-10'>
            <h2 className="text-[45px] font-bold  leading-[51px] text-themetext text-center">Drop Us a Line</h2>
            <p className='mx-96 para font-Inter font-medium text-themetext text-center'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p >
            <div className='flex flex-col items-center justify-center'>
                <div className='grid grid-cols-2 gap-7'>
                    <input type="text" placeholder='First name' className='w-96 h-9 p-3 border-[1px] border-[#ABABAB] outline-none rounded-lg' />
                    <input type="text" placeholder='Last name' className='w-96 h-9 p-3 border-[1px] border-[#ABABAB] outline-none rounded-lg' />
                    <input type="text" placeholder='Email' className='w-96 h-9 p-3 border-[1px] border-[#ABABAB] outline-none rounded-lg' />
                    <input type="text" placeholder='Subject' className='w-96 h-9 p-3 border-[1px] border-[#ABABAB] outline-none rounded-lg' />

                </div>
                <div>
                    <textarea name="" id="" cols={100} rows={10} placeholder='Your message' className='p-3 mt-8 border-[1px] border-[#ABABAB] outline-none rounded-lg'></textarea>
                </div>
            </div>
            <div className='flex items-center justify-center'>

                <button className='h-[45px] text-white rounded-[5px] w-[145px] text-base leading-[23px] bg-[#FF6F06]'>Send</button>
            </div>


        </div >
    )
}
