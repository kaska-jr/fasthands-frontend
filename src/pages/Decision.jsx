import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hiring from "./../assets/images/downloadhire.png";
import ArtisanHire from "./../assets/images/images.png";
import { FaArrowLeft, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiReturnArrow } from "react-icons/gi";
import { useAuthContext } from "../context";

function Decision() {
  const { makeDecision, userType } = useAuthContext();

  console.log(userType);

  const decisionConstant = [
    {
      type: "artisan",
      text: "I am an artisan looking for jobs",
      image: ArtisanHire,
    },
    {
      type: "client",
      text: "I am a client hiring for a project",
      image: Hiring,
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col items-center justify-center my-32">
      <NavLink
        to="/"
        className={
          "my-10 px-2 py-1 bg-skyBlue900 text-white rounded-md flex items-center gap-2"
        }
      >
        <GiReturnArrow />
        <span>Back</span>
      </NavLink>

      <div className=" border-skyBlue900 border-[1px] rounded-2xl flex flex-col gap-6 items-center justify-around p-4 md:p-10 mb-10">
        <p className="flex items-center justify-center text-lg md:text-2xl  text-pink900 font-bold">
          Join as a Client or an Artisan
        </p>

        <div className="flex items-center flex-col lg:flex-row justify-around gap-4">
          {decisionConstant.map((user) => {
            const { type, text, image } = user;
            return (
              <div
                key={type}
                className={`w-80 border-gray-400 border-[1px] p-4 rounded-xl cursor-pointer hover:border-skyBlue900 hover:bg-pink-100 ${
                  userType === type && "bg-pink-100"
                }`}
                onClick={() => makeDecision(type)}
              >
                <p className="w-[95%] flex justify-end pt-2">
                  <input
                    type="radio"
                    name={type}
                    className="radio border-pink900 border-[1px]"
                    checked={userType === type}
                    readOnly
                  />
                </p>
                <img
                  src={image}
                  alt="hire"
                  width={65}
                  className="relative left-4 rounded-sm"
                />
                <p className="text-lg text-md font-semibold text-black">
                  {text}
                </p>
              </div>
            );
          })}
        </div>

        <div className=" flex flex-col items-center justify-center gap-2">
          <NavLink
            to="/register"
            className="px-5 py-2 bg-skyBlue900 rounded-md flex items-center justify-center text-white font-bold lg:text-lg"
          >
            Register Here
          </NavLink>

          <span className="mb-1">
            Already have an Account{" "}
            <NavLink to="/login" className={"text-pink900"}>
              login
            </NavLink>
          </span>
          <div className="flex gap-3">
            <FcGoogle fontSize={25} />
            <FaTwitter fontSize={25} className="text-skyBlue900" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Decision;
