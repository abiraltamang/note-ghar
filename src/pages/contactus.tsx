import React from "react";
import Notecover from "../components/frontend/notes/Notecover";
import Drop from "../components/frontend/contact/Drop";
import Navbar from "../components/frontend/main/Navbar";
import Footer from "../components/frontend/main/Footer";
export default function Contactus() {
  return (
    <div>
      <Navbar />
      <Notecover detail="Contact us" />
      <Drop />
      <Footer />
    </div>
  );
}
