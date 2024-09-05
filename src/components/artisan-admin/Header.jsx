import React from "react";
import { IoIosMenu } from "react-icons/io";
import { openMenu } from "../../redux/features/artisan-admin/ToggleMenuSlice";
import { FaSearch } from "react-icons/fa";
import { IoNotifications, IoSettingsOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { ToggleAvailability } from "../index";

const Header = ({ text }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between w-full border-b sticky top-0 px-4 md:px-10 py-6 bg-white z-10">
      <h1 className="text-xl font-bold capitalize">{text}</h1>
      <div className="flex-1 flex items-center justify-end gap-4">
        <ToggleAvailability />

        <div className="relative h-fit w-[30%] min-w-[100px]">
          <input
            type="text"
            className="w-full border outline-none focus:outline-none px-3 py-2  border-skyBlue900 bg-[#F5F5F5] rounded-lg"
          />
          <FaSearch className="absolute top-1/2 right-2 -translate-y-1/2 text-skyBlue900" />
        </div>
        <IoIosMenu
          className="text-3xl cursor-pointer text-skyBlue900 md:hidden"
          onClick={() => dispatch(openMenu())}
        />
        <IoSettingsOutline className="text-3xl cursor-pointer text-skyBlue900 hidden md:block" />
        <div className="relative hidden md:block">
          <IoNotifications className="text-3xl cursor-pointer text-skyBlue900" />
          <div className="absolute -top-1 -right-0 bg-red-600 text-white h-4 w-4 rounded-full text-xs flex items-center justify-center">
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
