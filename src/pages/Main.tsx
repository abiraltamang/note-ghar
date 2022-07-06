import React from "react";
import Navbar from '../components/main/Navbar'
import Coverpage from "../components/main/Coverpage";
import Features1 from "../components/main/Features1";
import Features2 from "../components/main/Features2";
import CallAction from "../components/main/CallAction";
import Work from "../components/main/Work";
import Footer from "../components/main/Footer";
import Testimonial from "../components/main/Testimonial";
import Courses from "../components/main/Courses";


const Main = () => {
    return (
        <div>
            <Navbar />
            <Coverpage height="755" />
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