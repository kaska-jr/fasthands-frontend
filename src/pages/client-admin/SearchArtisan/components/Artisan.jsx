import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { getLocationById, getSkillById } from "../../../../lib/helpers";
import { FaBriefcase } from "react-icons/fa6";

const Artisan = ({ id, username, location, skills }) => {
  const skillsStr = skills.map((skill) => {
    return getSkillById(skill);
  });

  return (
    <figure className="flex flex-col md:flex-row md:justify-center gap-3 p-3 shadow-sm md:shadow-none bg-white">
      <img
        src={"/Avatar.jpg"}
        alt="img"
        className="w-16 h-16 rounded-full flex-shrink-0 object-fit"
      />
      <figcaption className="flex-1">
        <p className="text-pink900 font-bold text-lg md:text-lg capitalize">
          {username || `Artisan${id}`}
        </p>

        <p className="rounded-full px-1 py-1 w-fit text-sm md:text-base flex items-center gap-1">
          <FaBriefcase fontSize={20} className="text-skyBlue900 pr-1" />
          {skillsStr.join(", ") || "Unknown Skills"}
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-none md:leading-none mb-2 flex items-end gap-1">
          <CiLocationOn fontSize={25} className="text-skyBlue900" />
          <span>{getLocationById(location) || "Unknown"}</span>
        </p>

        <Link to={`/artisan-profile/${id}`}>
          <button className="bg-skyBlue900 w-full md:w-fit py-1 px-3 rounded-md text-white">
            View Profile
          </button>
        </Link>
      </figcaption>
    </figure>
  );
};

export default Artisan;
