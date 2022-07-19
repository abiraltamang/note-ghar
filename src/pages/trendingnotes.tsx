import React from "react";
import Navbar from "../components/frontend/main/Navbar";
import Notecover from "../components/frontend/notes/Notecover";
import Footer from "../components/frontend/main/Footer";
import Courses from "../components/frontend/main/Courses";

export default function Trendingnotes() {
  return (
    <div>
      <Navbar />
      <Notecover detail="Trending Notes" />
      <Courses />
      <Footer />
    </div>
  );
}
