import React from "react";
import { Outlet } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import {
  ProfileInfo,
  ArtisanNav,
  ArtisanLogout,
  ToggleAvailability,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../redux/features/artisan-admin/ToggleMenuSlice";
import { IoNotifications, IoSettingsOutline } from "react-icons/io5";

const ArtisanLayout = () => {
  const dispatch = useDispatch();
  const { isNavBar } = useSelector((state) => state.toggleMenu);

  return (
    <div className={`flex h-screen flex-row`}>
      {/* NAVIGATION WRAPPER */}
      <nav
        className={`w-48 sm:w-60 lg:w-96 bg-skyBlue900 h-screen fixed ${
          isNavBar ? "translate-x-0" : "-translate-x-[200%]"
        } top-0 md:left-0 md:translate-x-0 transition duration-400 ease-in-out overflow-y-auto rounded-r-xl text-white z-[99999] pb-20 md:pb-0`}
      >
        <div className="min-h-screen flex flex-col relative">
          <IoIosClose
            className="absolute right-1 top-1 text-4xl cursor-pointer text-white md:hidden"
            onClick={() => dispatch(closeMenu())}
          />
          <ProfileInfo />
          <ArtisanNav />
          <div className="flex items-center justify-center gap-2 w-full">
            <div className="w-[80%] flex gap-4 lg:gap-4">
              <IoSettingsOutline className="text-2xl cursor-pointer text-white md:hidden flex flex-shrink-0" />
              <div className="relative md:hidden block">
                <IoNotifications className="text-2xl cursor-pointer text-white " />
                <div className="absolute -top-1 -right-0 bg-red-600 text-white h-4 w-4 rounded-full text-xs flex items-center justify-center">
                  <span>1</span>
                </div>
              </div>
              <div className="md:hidden block ">
                <ToggleAvailability />
              </div>
            </div>
          </div>
          <ArtisanLogout />
        </div>
      </nav>

      {/* OUTLET WRAPPER */}
      <div className="w-full md:ml-60 lg:ml-96 pt-0 flex-1 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default ArtisanLayout;
