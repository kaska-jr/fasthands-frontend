import React, { useState } from "react";
import Header from "../layouts/Header";
import MobileMenu from "../layouts/MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed w-[95vw] lg:w-screen top-5 right-1/2 translate-x-1/2 z-[9999]">
        <Header
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          setMenuOpen={setMenuOpen}
        />
      </nav>
      {isMenuOpen && (
        <MobileMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      )}
    </>
  );
};

export default Navbar;
