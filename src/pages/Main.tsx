import React from "react";
import Navbar from '../components/Navbar'
import Coverpage from "../components/Coverpage";
import Features1 from "../components/Features1";
import Features2 from "../components/Features2";
import CallAction from "../components/CallAction";



const Main = () => {
    return (
        <div>
            <Navbar />
            <Coverpage />
            <Features1 />
            <Features2 />
            <CallAction />

        </div>
    )
}
export default Main;