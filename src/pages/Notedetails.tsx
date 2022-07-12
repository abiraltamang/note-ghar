import React from 'react'
import Sidebar from '../components/backend/Sidebar'
import Details from '../components/backend/notes/Details'
import Search from '../components/backend/Search'

export default function Notedetails() {
    return (
        <div className='flex bg-[#EEF1F8] p-[30px] space-x-[20px]'>


            <Sidebar />
            <div className='space-y-[30px]'>
                <Search />
                <Details />
            </div>

        </div>

    )
}
