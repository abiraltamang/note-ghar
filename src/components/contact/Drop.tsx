import React from 'react'

export default function Drop() {
    return (
        <div className='my-4 sm:my-8 md:my-12 lg:my-16 space-y-3 sm:space-y-5  md:space-y-10'>
            <h2 className="text-2xl sm:text-3xl lg:text-heading   font-Jost font-bold  lg:leading-[51px] text-themetext text-center">Drop Us a Line</h2>

            <p className=' mx-4  xs:mx-14 sm:mx-24 md:mx-36 lg:mx-72 xl:mx-96 font-Inter font-medium text-themetext text-center  text-sm xs:text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p >
            <div className='flex flex-col items-center justify-center'>
                <div className='grid grid-cols-1 xs:grid-cols-2 xs:gap-x-4 sm:gap-x-[50px] gap-y-5 xs:gap-y-[32px] '>
                    <div>
                        <input type="text" placeholder='First name' className='w-full  xl:w-[400px] h-9 p-3 border-[1px] border-[#ABABAB] outline-none rounded-lg' />
                    </div>
                    <div>
                        <input type="text" placeholder='Last name' className='w-full xl:w-[400px] h-9 p-3 border-[1px] border-[#ABABAB] outline-none rounded-lg' />
                    </div>
                    <div>
                        <input type="text" placeholder='Email' className='w-full xl:w-[400px] h-9 p-3 border-[1px] border-[#ABABAB] outline-none rounded-lg' />
                    </div>
                    <div>
                        <input type="text" placeholder='Subject' className='w-full xl:w-[400px] h-9 p-3 border-[1px] border-[#ABABAB] outline-none rounded-lg' />
                    </div>
                    <div className='xs:col-span-2'>
                        <textarea name="" id="" placeholder='Your message' className='h-full w-full lg:h-[200px] lg:w-[850px] p-3  border-[1px] border-[#ABABAB] outline-none rounded-lg '></textarea>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>

                <button className='h-[45px] text-white rounded-[5px] w-[145px] text-base leading-[23px] bg-[#FF6F06]'>Send</button>
            </div>


        </div >
    )
}
