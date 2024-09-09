import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/shared/Button";

const Booking = () => {
  return (
    <div className="bg-skyBlue900 grid grid-cols-1 md:grid-cols-5 md:pl-10 items-center">
      <div className="flex-1 flex md:hidden justify-end col-span-2">
        <img
          src="/tools2.png"
          alt=""
          className="w-full md:w-[80%] h-48 md:h-fit object-cover shrink-0 block"
        />
      </div>
      <div className="text-white col-span-3 p-5 md:p-0">
        <p className="font-bold textA">Book appointments on-the-go, and</p>
        <p className="font-bold textA">discover a world of expert services.</p>
        <p className="text-white opacity-95 py-3 text-sm lg:text-[20px]">
          Your satisfaction is our concern.
        </p>
        <div className="flex flex-col gap-5">
          <div className="w-fit flex items-center justify-between font-medium sm:font-bold gap-4 text-white">
            <NavLink className="border border-pink900 w-20 h-8 flex items-center justify-center rounded-full">
              Artisan
            </NavLink>
            <NavLink
              className={
                "border border-pink900 w-24 h-8 flex items-center justify-center rounded-full"
              }
            >
              Customer
            </NavLink>
          </div>
          <NavLink to={"/services"}>
            <Button
              customStyle={
                "!bg-pink900 hover:scale-105 text-white px-4 py-2 rounded-md text-lg transition-all ease-in-out duration-300 !px-12"
              }
            >
              Join Us
            </Button>
          </NavLink>
        </div>
      </div>
      <div className="flex-1 md:flex justify-end col-span-2 hidden">
        <img
          src="/tools2.png"
          alt=""
          className="w-full md:w-[80%] object-cover shrink-0 block"
        />
      </div>
    </div>
  );
};

export default Booking;
