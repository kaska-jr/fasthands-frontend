import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useAuthContext } from "../../context";
import { useNavigate } from "react-router-dom";

const ClientLogout = () => {
  const { logout } = useAuthContext();

  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      className="h-28 flex items-center cursor-pointer"
      onClick={handleLogout}
    >
      <div className="w-[70%] items-center flex justify-center">
        <button className="border border-red-600 px-2 py-1 lg:px-3 lg:py-2 text-red-600 text-base lg:text-xl font-medium rounded-md flex items-center justify-between gap-3">
          <span>Logout</span>
          <IoIosArrowRoundForward />
        </button>
      </div>
    </div>
  );
};

export default ClientLogout;
