import React from "react";
import Navbar from "../components/frontend/main/Navbar";
import Notecover from "../components/frontend/notes/Notecover";
import Footer from "../components/frontend/main/Footer";
import Goal from "../components/frontend/aboutus/Goal";
import Built from "../components/frontend/aboutus/Built";
import Testimonial from "../components/frontend/main/Testimonial";
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
  );
}
