import React from "react";
import { FaCamera } from "react-icons/fa";
import { useGetArtisanProfile } from "../../services/queries";
import { getUserFromLocalStorage } from "../../lib/helpers";

const ProfileInfo = () => {
  // const response = useGetArtisanProfile();
  // console.log(response);

  const { username, user_type } = getUserFromLocalStorage();

  return (
    <div className="my-10 flex flex-col items-center gap-3">
      <div className="flex justify-center items-center h-28 w-28 lg:h-36 lg:w-36 bg-white rounded-full relative">
        <img
          src="/black.png"
          alt={username || ""}
          className="h-24 w-24 lg:h-32 lg:w-32 rounded-full object-cover shrink-0"
        />
        <FaCamera className="absolute bottom-0 right-3 cursor-pointer text-3xl text-[#2F2F2F]" />
      </div>
      <div>
        <h1 className="text-base lg:text-2xl font-bold">{username || ""}</h1>
        <div className="w-[70%]">
          <p className="text-sm lg:text-lg capitalize">{user_type || ""}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
