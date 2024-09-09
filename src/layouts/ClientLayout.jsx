import React from "react";
import { Outlet } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { ProfileInfo, ClientNav, ClientLogout } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../redux/features/artisan-admin/ToggleMenuSlice";

const user = {
  name: "Obiete Sophia Chinyere",
  profession: "Make-Up Artist",
  profileImg: "/black.jpg",
};

const ClientLayout = () => {
  const dispatch = useDispatch();
  const { isNavBar } = useSelector((state) => state.toggleMenu);

  return (
    <div className={`flex h-screen flex-row`}>
      {/* NAVIGATION WRAPPER */}
      <nav
        className={`w-48 sm:w-60 lg:w-96 bg-skyBlue900 h-screen fixed ${
          isNavBar ? "translate-x-0" : "-translate-x-[200%]"
        } top-0 md:left-0 md:translate-x-0 transition duration-400 ease-in-out overflow-y-auto rounded-r-xl text-white z-10`}
      >
        <div className="min-h-screen flex flex-col relative">
          <IoIosClose
            className="absolute right-1 top-1 text-4xl cursor-pointer text-white md:hidden"
            onClick={() => dispatch(closeMenu())}
          />
          <ProfileInfo {...user} />
          <ClientNav />
          <ClientLogout />
        </div>
      </nav>

      {/* OUTLET WRAPPER */}
      <div className="w-full md:ml-60 lg:ml-96  flex-1 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default ClientLayout;
