import React from 'react';
import CourseHeading from './CourseHeading';
import Cards from './Cards';
import ButtonComponent from './ButtonComponent';

export default function Courses() {
    return (
        <>
            <CourseHeading />
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-5'>

                <Cards image='course1' />
                <Cards image='course2' />
                <Cards image='course3' />
                <Cards image='course4' />
                <Cards image='course1' />
                <Cards image='course2' />
                <Cards image='course3' />
                <Cards image='course4' />

            </div>
            <div className='flex items-center justify-center my-14 '>
                <button className='theme-btn'>More Notes</button>
            </div>
        </>
    )
}
