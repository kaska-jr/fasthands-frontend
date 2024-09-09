import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import { NavLinks } from "../../lib/constants";

const Header = ({ toggleMenu }) => {
  return (
    <header className="bg-white w-full lg:max-w-[1100px] mx-auto text-black p-2 px-6 md:px-10 md:py-4 flex items-center justify-between drop-shadow-md rounded-full z-[9999999999999999999]">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 md:h-12 mr-4" />
      </div>
      <div className="hidden md:flex items-center  md:text-sm lg:text-base text-textGray">
        {NavLinks.map((Navlink) => {
          const { id, label, path } = Navlink;
          return (
            <NavLink
              to={path}
              key={id}
              className="hover:text-skyBlue900 px-3 py-2 transition duration-300 active"
            >
              {label}
            </NavLink>
          );
        })}
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none font-bold text-2xl md:text-3xl"
        >
          <span className="block">☰</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
