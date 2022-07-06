import React from 'react'
import ButtonComponent from './ButtonComponent'

export default function Courses1() {
    return (
        <div className='flex flex-col items-center space-y-6 my-10 text-[#37474F]'>
            <h2 className='leading-[59px] text-5xl font-bold font-Jost '>Choose Your Course Below</h2>
            <div className='leading-6 font-Inter text-center'>
                <p >It is a long established fact that a reader will be distracted by the readable</p>
                <p>content of a page when looking at its layout.</p>
            </div>
            <div className='grid grid-cols-3 space-y-5'>
                <div>
                    <button className='theme-btn'>ALl Exams</button>
                </div>
                <div>
                    <button className='blue-outline-btn'>Computer</button>
                </div>
                <div>
                    <button className='blue-outline-btn'>Mathematics</button>
                </div>
                <div>
                    <button className='blue-outline-btn'>Science</button>
                </div>
                <div>
                    <button className='blue-outline-btn'>Economics</button>
                </div>
                <div>
                    <button className='blue-outline-btn'>More Notes</button>
                </div>
            </div>
        </div>
    )
}
