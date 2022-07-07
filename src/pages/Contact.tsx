import React from 'react'
import Navbar from '../components/main/Navbar'
import Notecover from '../components/notes/Notecover'
import Footer from '../components/main/Footer'
import Drop from '../components/contact/Drop'
export default function Contact() {
    return (
        <div>
            <Navbar />
            <Notecover detail="Contact us" />
            <Drop />
            <Footer />
        </div>
    )
}

