import React from 'react';
import Navbar from '../components/main/Navbar';
import Courses from '../components/main/Courses';
import Footer from '../components/main/Footer';
import Notecover from '../components/notes/Notecover';
export default function Notes() {
    return (
        <div>
            <Navbar />
            <Notecover detail="Notes" />
            <Courses />
            <Footer />
        </div>
    )
}
