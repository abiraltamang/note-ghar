import React from 'react';
import CourseHeading from './CourseHeading';
import Cards from './Cards';
import ButtonComponent from './ButtonComponent';

export default function Courses() {
    return (
        <>
            <CourseHeading />
            <Cards />
            <div className='flex items-center justify-center my-14 '>
                <ButtonComponent buttontitle="More Notes" />
            </div>
        </>
    )
}
