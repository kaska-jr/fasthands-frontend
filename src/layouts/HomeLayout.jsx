import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

function HomeLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default HomeLayout;
