import React from 'react'
import Search from '../components/backend/Search'
import Sidebar from '../components/backend/Sidebar'
import Transition from '../components/backend/transition/Transition'



export default function Transitions() {
    return (
        <div className='flex bg-[#EEF1F8] p-[30px] space-x-[20px]'>

            <Sidebar />
            <div className='space-y-[30px]'>
                <Search />
                <Transition />
            </div>

        </div>
    )
}
