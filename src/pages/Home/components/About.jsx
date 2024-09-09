import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/shared/Button";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <div className=" bg-[#e6dede] lg:h-[80vh] min-h-[550px]">
      <div className="mx-auto max-w-7xl w-[95%] flex flex-col md:flex-row items-center justify-center md:px-10 h-full">
        <div className="flex-1 flex items-center justify-center md:justify-start h-full">
          <img
            src="/aboutus.png"
            alt="about image"
            className="h-full object-cover w-auto shrink-0"
          />
        </div>

        <div className="flex-1 flex items-center justify-center py-10">
          <div className="flex flex-col md:items-center justify-around ml-auto">
            <div className=" text-black md:text-base text-xs">
              <SectionHeader header={"About Us"} />
              <div className="  w-full max-w-lg py-5 text-lg text-justify">
                <p className="">
                  Fasthands is a response to the gradual integration of all
                  facets of the society into the digital space. It is meant to
                  give all artisans and local producers the same platform and
                  advantage of reach as the ICT sector.
                </p>
                <p className="py-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores aut architecto quae molestias optio ipsa aliquam
                  consequuntur similique alias totam? Optio molestiae aliquam
                  minima. Magnam sint sequi eaque recusandae! Quisquam, natus
                  architecto, ipsa reprehenderit tempora illum labore
                  praesentium velit eaque quia, quod recusandae possimus
                  distinctio alias tempore ratione. Expedita, ducimus?
                </p>
              </div>
            </div>

            <NavLink to={"/about"}>
              <Button
                customStyle={
                  "!bg-pink900 hover:scale-105 text-white px-4 py-2 rounded-md text-lg transition-all ease-in-out duration-300 !w-full !px-12"
                }
              >
                Know more
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
