import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/shared/Button";

const Banner = () => {
  return (
    <div className="hero-page min-h-[600px] h-[100vh] w-[100%]">
      <div className="h-full w-[100%] bg-blue-600 bg-opacity-[0.3] flex items-center justify-center">
        <div className="max-w-5xl flex flex-col items-center gap-5 justify-center text-3xl md:text-5xl lg:text-7xl font-extrabold ">
          <div className="text-center text-white">
            <p className="">
              Unlocks <span className="text-pink900 w-48"> endless</span>{" "}
              services,
            </p>
            <p>in One platform.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <NavLink to={"/decision"}>
              <Button
                customStyle={
                  "!bg-pink900 transition-all ease-in-out duration-100 text-white px-6 font-medium !py-3 rounded-md hover:scale-105 w-52 "
                }
                customTextStyle={"!text-white text-xl font-semibold"}
              >
                Get Started
              </Button>
            </NavLink>
            <NavLink to={"/login"}>
              <Button
                customStyle={
                  "!text-pink900 bg-white transition-all ease-in-out duration-100  px-6 font-medium !py-3 rounded-md hover:scale-105  w-52 md:!px-16 md:!py-3 border-2 border-pink900"
                }
                customTextStyle={"! text-xl font-semibold"}
              >
                Login
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
