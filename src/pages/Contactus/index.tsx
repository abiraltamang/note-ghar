import React from "react";
import Notecover from "../../components/frontend/notes/Notecover";
import Drop from "../../components/frontend/contact/Drop";
import MainLayout from "../../Layouts/MainLayout";

const Contactus = () => {
  return (
    <MainLayout>
      <Notecover detail="Contact us" />
      <Drop />
    </MainLayout>
  );
};
export default Contactus;
