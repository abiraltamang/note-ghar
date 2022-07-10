import React from 'react';
import CourseHeading from './CourseHeading';
import Cards from './Cards';
import ButtonComponent from './ButtonComponent';

export default function Courses() {
    return (
        <>
            <CourseHeading />
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8 mx-[14px] sm:mx-[22px] md:mx-[26px] lg:mx-[32px] xl:mx-[50px]'>

                <Cards image='course1' />
                <Cards image='course2' />
                <Cards image='course3' />
                <Cards image='course4' />
                <Cards image='course1' />
                <Cards image='course2' />
                <Cards image='course3' />
                <Cards image='course4' />

            </div>
            <div className='flex items-center justify-center my-10  md:my-24 '>
                <button className='blue-btn w-[155px]'>More Notes</button>
            </div>
        </>
    )
}
