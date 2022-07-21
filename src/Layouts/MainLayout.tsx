import React from "react";

import Navbar from "../components/frontend/main/Navbar";
import Footer from "../components/frontend/main/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: any;
};

const MainLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className="font-primary">
      <Navbar />

      <ToastContainer autoClose={20000} />

      {children}

      <Footer />
    </div>
  );
};

export default MainLayout;
