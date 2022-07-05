import React from 'react';
import Navbar from '../components/main/Navbar';
import Footer from '../components/main/Footer';
import Notecover from '../components/notes/Notecover';
import Feedback from '../components/notes/Feedback';
import Publisher from '../components/notes/Publisher';

export default function ExamDetails() {
    return (
        <>
            <Navbar />
            <Notecover detail="Economics Complete Note" />
            <Publisher />
            <Feedback />
            <Footer />
        </>
    )
}
