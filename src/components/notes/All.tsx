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
        <div className='flex mx-28 space-x-20 justify-start'>
            <div>
                <Notes />
                <Topics />
                <Benefits />
                <Publisher />
                <Feedback />
            </div>
            <div className='space-y-20 mt-10'>
                <ExamdetailsTable />
                <Categories />
                <Relatedexams />




            </div>


        </div>
    )
}
