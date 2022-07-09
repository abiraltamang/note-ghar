import React from 'react'
import Notes from './Notes'
import Feedback from './Feedback'
import Publisher from './Publisher'
import Topics from './Topics'
import Benefits from './Benefits'
import Categories from '../exam/Categories'
import Relatedexams from '../exam/Relatedexams'
import ExamdetailsTable from '../exam/ExamdetailsTable'

export default function All() {
    return (
        <>
            <div className='m-5 flex flex-col md:flex-row '>
                <div>
                    <Notes />
                    <Topics />
                    <Benefits />
                </div>
                <div className=''>
                    <div className='flex flex-col xs:flex-row justify-center md:flex-col xs:space-x-10 md:space-x-0'>
                        <div className='mb-5 xs:mb-0'>
                            <ExamdetailsTable />
                        </div>
                        <Categories />
                    </div>
                    <div className='mt-5 md:mt-5'>

                        <Relatedexams />
                    </div>
                </div>
            </div>
            <Publisher />
            <Feedback />
        </>
    )
}
