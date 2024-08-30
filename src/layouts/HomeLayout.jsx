import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default HomeLayout;
