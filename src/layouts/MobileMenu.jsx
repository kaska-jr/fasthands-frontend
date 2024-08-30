import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinks } from "../lib/constants";
import { Button } from "../components";

const MobileMenu = ({ toggleMenu, isMenuOpen }) => {
  return (
    <div
      className={`fixed md:hidden top-0 ${
        isMenuOpen ? "right-0" : "right-[-100%]"
      }  h-screen flex flex-col bg-skyBlue900 text-white rounded w-60 z-[999999999] transition-all duration-1000000 ease-in-out px-4`}
    >
      <div className="self-end p-3 pr-2 pt-8 md:hidden ">
        <button
          onClick={toggleMenu}
          className="focus:outline-none font-bold border rounded-full w-8 h-8 border-white flex items-center justify-center"
        >
          &times;
        </button>
      </div>
      {NavLinks.map((Navlink) => {
        const { id, label, path } = Navlink;
        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleMenu}
            className="hover:text-pink900 py-2 transition duration-300"
          >
            {id === 5 ? "Find Artisan" : label}
          </NavLink>
        );
      })}

      <div className="flex flex-col gap-4 mt-6">
        <NavLink to={"/desicion"}>
          <Button
            onClick={toggleMenu}
            customStyle={
              "!bg-pink900 hover:opacity-80 text-white px-4 font-medium py-2 rounded-md w-36"
            }
          >
            Get Started
          </Button>
        </NavLink>
        <NavLink to={"/login"}>
          <Button
            onClick={toggleMenu}
            customStyle={
              "!text-pink900 border border-pink900 bg-white hover:opacity-80 text-white px-4 font-medium py-2 rounded-md  w-36"
            }
          >
            Login
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
