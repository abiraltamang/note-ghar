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
            <div className='flex space-x-5 items-center justify-center'>
                <div>
                    <ButtonComponent buttontitle="All exams" />
                </div>
                <div>
                    <ButtonComponent buttontitle="Computer" />
                </div>
                <div>
                    <ButtonComponent buttontitle="Mathematics" />
                </div>
                <div>
                    <ButtonComponent buttontitle="Science" />
                </div>
                <div>
                    <ButtonComponent buttontitle="Economics" />
                </div>
                <div>
                    <ButtonComponent buttontitle="More notes" />
                </div>
            </div>
        </div>
    )
}
