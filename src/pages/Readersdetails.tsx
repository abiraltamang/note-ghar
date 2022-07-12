import React from 'react'
import Sidebar from '../components/backend/Sidebar'
import Search from '../components/backend/Search'
import Details from '../components/backend/readers/Details'

export default function Authordetails() {
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
