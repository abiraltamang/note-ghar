import React from 'react'
import Navbar from '../components/main/Navbar'
import Notecover from '../components/notes/Notecover'
import Footer from '../components/main/Footer'
import Goal from '../components/aboutus/Goal'
import Built from '../components/aboutus/Built'
import Testimonial from '../components/main/Testimonial'
export default function Aboutus() {
    return (
        <>
            <Navbar />
            <Notecover detail="About Us" />
            <Goal />
            <Built />
            <Testimonial />
            <Footer />

        </>
    )
}
