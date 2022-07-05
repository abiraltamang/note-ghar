import React from "react";
import Navbar from '../components/Navbar'
import Coverpage from "../components/Coverpage";
import Features1 from "../components/Features1";
import Features2 from "../components/Features2";
import CallAction from "../components/CallAction";
import Work from "../components/Work";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Courses from "../components/Courses";
import ButtonComponent from "../components/ButtonComponent";


const Main = () => {
    return (
        <div>
            <Navbar />
            <Coverpage />
            <Features1 />
            <Features2 />
            <Courses />
            <CallAction />
            <Work />
            <Testimonial />
            <Footer />
        </div>
    )
}
export default Main;