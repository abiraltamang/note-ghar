import React from "react";
import Courses from "../../components/frontend/main/Courses";
import Notecover from "../../components/frontend/notes/Notecover";
import Navbar from "../../components/frontend/main/Navbar";

const Notes = () => {
  return (
    <div>
      <Navbar />
      <Notecover detail="Notes" />
      <Courses />
    </div>
  );
};
export default Notes;
