import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

//LIMITS NUMBER OF WORDS IN A ON THE PROFILE TEMPLATE TO 2 WORDS
function limitToTwoWords(str) {
  const words = str.trim().split(/\s+/);
  const result = words.slice(0, 2).join(" ");
  return result;
}
const Artisan = ({ id }) => {
  return (
    <figure className="flex flex-col md:flex-row md:justify-center gap-3 p-3 shadow-sm md:shadow-none bg-white">
      <img
        src={"/Avatar.jpg"}
        alt="img"
        className="w-16 h-16 rounded-full flex-shrink-0 object-fit"
      />
      <figcaption className="flex-1">
        <p className="text-pink900 font-bold text-lg md:text-lg capitalize">
          Scepter
        </p>
        <p className="text-skyBlue900 font-bold text-sm md:text-base capitalize">
          Mechanic
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-none md:leading-none mb-2 flex items-end gap-1">
          <CiLocationOn fontSize={25} className="text-skyBlue900" />
          <span>Aba</span>
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
