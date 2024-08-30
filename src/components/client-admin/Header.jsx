import React from "react";
import { IoIosMenu } from "react-icons/io";
import { useDispatch } from "react-redux";
import { openMenu } from "../../redux/features/artisan-admin/ToggleMenuSlice";

const Header = ({ text }) => {
  const dispatch = useDispatch();

  return (
    <div className=" flex justify-between md:justify-center items-center">
      <IoIosMenu
        className="text-3xl cursor-pointer text-skyBlue900 md:hidden"
        onClick={() => dispatch(openMenu())}
      />
      <h1 className="text-xl font-bold capitalize">{text}</h1>
    </div>
  );
};

export default Header;
