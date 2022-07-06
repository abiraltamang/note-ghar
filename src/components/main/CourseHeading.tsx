import React from 'react'
import ButtonComponent from './ButtonComponent'

export default function Courses1() {
    return (
        <div className='flex flex-col items-center space-y-6 my-10 text-[#37474F]'>
            <h2 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold font-Jost  lg:mb-4 leading-10 md:leading-[40px] lg:leading-[50px]  '>Choose Your Course Below</h2>
            <div className='mx-8 sm:mx-24 md:mx-32 lg:mx-40 xl:mx-52'>
                <p className='text-xs xs:text-sm sm:text-md md:text-xl text-center mb-5' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

            </div>
            <div className='grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-6  md:grid-cols-3 xl:grid-cols-6 gap-5 '>
                <div>
                    <button className='small-blue-btn rounded-lg md:hidden text-xs'>All Exams</button>
                    <button className='theme-btn hidden md:block'>All Exams</button>
                </div>

                <div>
                    <button className='small-transparent-btn2 rounded-lg md:hidden text-xs '>Computer</button>
                    <button className='blue-outline-btn hidden md:block'>Computer</button>
                </div>

                <div>
                    <button className='small-transparent-btn2 rounded-lg md:hidden text-xs'>Mathematics</button>
                    <button className='blue-outline-btn hidden md:block'>Mathematics</button>
                </div>

                <div>
                    <button className='small-transparent-btn2 rounded-lg md:hidden text-xs'>Science</button>
                    <button className='blue-outline-btn hidden  md:block'>Science</button>
                </div>

                <div>
                    <button className='small-transparent-btn2 rounded-lg md:hidden text-xs'>Economics</button>
                    <button className='blue-outline-btn hidden md:block'>Economics</button>
                </div>

                <div>
                    <button className='small-transparent-btn2 rounded-lg md:hidden text-xs'>More Notes</button>
                    <button className='blue-outline-btn hidden md:block'>More Notes</button>
                </div>

            </div>
        </div>
    )
}
