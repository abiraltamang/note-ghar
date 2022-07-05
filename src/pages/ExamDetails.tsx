import React from 'react';
import Navbar from '../components/main/Navbar';
import Footer from '../components/main/Footer';
import Notecover from '../components/notes/Notecover';
import All from '../components/notes/All';

export default function Examdetails() {
    return (
        <>
            <Navbar />
            <Notecover detail="Economics Complete Note" />
            <All />
            <Footer />
        </>
    )
}
