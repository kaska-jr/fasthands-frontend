import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaBriefcase } from "react-icons/fa6";
import { Badge } from "@radix-ui/themes";

const Artisan = ({ id, username, location, skills, bio, is_available }) => {
  return (
    <figure className="flex flex-col md:flex-row md:justify-center gap-3 p-3 shadow-sm md:shadow-none bg-white border relative rounded-md overflow-hidden">
      <img
        src={"/Avatar.jpg"}
        alt="img"
        className="w-16 h-16 rounded-full flex-shrink-0 object-fit"
      />
      <figcaption className="flex-1 flex flex-col gap-2">
        <p className="text-pink900 font-bold text-lg md:text-lg capitalize">
          {username || `Artisan${id}`}
        </p>
        <p>{bio || "N/A"}</p>

        <div className="flex gap-2">
          <p className="rounded-full px-1 py-1 w-fit text-sm md:text-base flex items-center gap-1 capitalize">
            <FaBriefcase fontSize={20} className="text-skyBlue900 pr-1" />
            {skills.slice(0, 2).join(", ") || "N/A"}
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-none md:leading-none mb-2 flex items-end gap-1">
            <CiLocationOn fontSize={20} className="text-skyBlue900" />
            <span>{location?.name || "N/A"}</span>
          </p>
        </div>

        {is_available ? (
          <div className="absolute -top-1 right-0">
            <Badge color="green">Available</Badge>
          </div>
        ) : (
          <div className="absolute -top-1 right-0">
            <Badge color="red">Not Available</Badge>
          </div>
        )}

        <div className="flex gap-2 items-center">
          <Link to={`/client/profile-artisans/${id}`}>
            <button className="hover:bg-skyBlue900 w-full md:w-fit py-1 px-3 h-8 rounded-md text-skyBlue900 border border-skyBlue900 bg-white hover:text-white">
              Profile
            </button>
          </Link>
          <Link to={`/client/chat/${id}`}>
            <div className="hover:stroke-white cursor-pointer stroke-[#3498db] border border-skyBlue900 bg-white hover:bg-skyBlue900 hover:text-white w-fit px-3 rounded-md h-8 flex justify-center items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6H14M6 10H12M10.5 17.5L10 18L7 15H4C3.20435 15 2.44129 14.6839 1.87868 14.1213C1.31607 13.5587 1 12.7956 1 12V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H16C16.7956 1 17.5587 1.31607 18.1213 1.87868C18.6839 2.44129 19 3.20435 19 4V9.5M14 16H20M17 13V19"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>
      </figcaption>
    </figure>
  );
};

export default Artisan;
