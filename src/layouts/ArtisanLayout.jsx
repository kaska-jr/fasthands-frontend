import React from "react";
import { Outlet } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { ProfileInfo, ArtisanNav, ArtisanLogout } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../redux/features/artisan-admin/ToggleMenuSlice";
import { IoNotifications, IoSettingsOutline } from "react-icons/io5";

const user = {
  name: "Obiete Sophia Chinyere",
  profession: "Make-Up Artist",
  profileImg: "/black.jpg",
};

const ArtisanLayout = () => {
  const dispatch = useDispatch();
  const { isNavBar } = useSelector((state) => state.toggleMenu);

  return (
    <div className={`flex h-screen flex-row`}>
      {/* NAVIGATION WRAPPER */}
      <nav
        className={`w-48 sm:w-60 lg:w-96 bg-skyBlue900 h-screen fixed ${
          isNavBar ? "translate-x-0" : "-translate-x-[200%]"
        } top-0 md:left-0 md:translate-x-0 transition duration-400 ease-in-out overflow-y-auto rounded-r-xl text-white z-[99999]`}
      >
        <div className="min-h-screen flex flex-col relative">
          <IoIosClose
            className="absolute right-1 top-1 text-4xl cursor-pointer text-white md:hidden"
            onClick={() => dispatch(closeMenu())}
          />
          <ProfileInfo {...user} />
          <ArtisanNav />
          <div className="flex items-center justify-center gap-2 w-full">
            <div className="w-[70%] flex gap-4 lg:gap-4">
              <IoSettingsOutline className="text-2xl cursor-pointer text-white md:hidden block" />
              <div className="relative md:hidden block">
                <IoNotifications className="text-2xl cursor-pointer text-white " />
                <div className="absolute -top-1 -right-0 bg-red-600 text-white h-4 w-4 rounded-full text-xs flex items-center justify-center">
                  <span>1</span>
                </div>
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
