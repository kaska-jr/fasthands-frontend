import React from "react";
import { FaPaypal, FaWikipediaW } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { TiSpanner } from "react-icons/ti";
import Button from "../shared/Button";
import { NavLink } from "react-router-dom";

const servicesData = [
  {
    id: "s5",
    text: "Explore Artisans and viable Clients",
    icon: <FaWikipediaW />,
  },
  {
    id: "s1",
    text: "Connecting you to your customers with ease",
    icon: <TiSpanner />,
  },
  {
    id: "s2",
    text: "Connecting you as customer to your desire artisan",
    icon: <MdOutlineSettings />,
  },
  {
    id: "s3",
    text: "Making sure your works are properly delivered",
    icon: <IoCallOutline />,
  },
  {
    id: "s4",
    text: "Pay Utility Bills",
    icon: <FaPaypal />,
  },

  {
    id: "s6",
    text: "Making sure your works are properly delivered",
    icon: <IoCallOutline />,
  },
];

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white w-[95%] flex flex-col items-center justify-around py-10 md:py-20">
      <div className=" w-full flex flex-col items-center">
        <h3 className="text-3xl text-black font-bold tracking-wider leading-10">
          Our Services
        </h3>
        <div className="h-1 bg-red-500 w-24"></div>
        <p className="my-5 text-center text-lg text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ea
          quae quam praesentium non dolorum fugiat sit magni aliquam eaque
          expedita officia fuga odit nulla, necessitatibus tempore culpa cumque
          quaerat?
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:text-base text-xs py-20 pt-5 ">
        {servicesData.map((service) => (
          <div
            className="w-full flex items-center justify-center flex-1 rounded-md  drop-shadow-xl bg-white hover:scale-105 transition-all"
            key={service.id}
          >
            <div className="p-5 flex flex-col gap-5 items-center justify-around text-center text-black py-4">
              <div className="text-skyBlue900 font-bold text-4xl">
                {service.icon}
              </div>
              <span className="text-xl md:text-lg">{service.text}</span>
            </div>
          </div>
        ))}
      </div>

      <NavLink to={"/services"}>
        <Button
          customStyle={
            "!bg-pink900 hover:scale-105 text-white px-4 py-2 rounded-md text-lg transition-all ease-in-out duration-300 !px-12"
          }
        >
          Learn More
        </Button>
      </NavLink>
    </div>
  );
};

export default Services;
