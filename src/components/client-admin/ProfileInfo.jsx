import React from "react";
import { FaCamera } from "react-icons/fa";

const ProfileInfo = ({ name, profession, profileImg }) => {
  return (
    <div className="my-10 flex flex-col items-center gap-3">
      <div className="flex justify-center items-center h-28 w-28 lg:h-36 lg:w-36 bg-white rounded-full relative">
        <img
          src={profileImg}
          alt={name}
          className="h-24 w-24 lg:h-32 lg:w-32 rounded-full object-cover shrink-0"
        />
        <FaCamera className="absolute bottom-0 right-3 cursor-pointer text-3xl text-[#2F2F2F]" />
      </div>

      <div className="w-full text-center">
        <h1 className="text-base lg:text-2xl font-bold capitalize">
          {name || ""}
        </h1>
        <p className="text-sm lg:text-lg capitalize">{profession || ""}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
