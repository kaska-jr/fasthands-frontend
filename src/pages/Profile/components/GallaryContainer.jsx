import React from "react";
import Bridal1 from "/bridal1.png";
import Bridal2 from "/bridal3.png";
import Birthday1 from "/birthday1.png";
import Birthday2 from "/birthday1.png";
import Birthday3 from "/birthday3.png";

const GallaryContainer = () => {
  return (
    <div className="w-[100%] h-[67%] mb-10">
      <div className="flex flex-col items-center justify-around h-[50%]">
        <p className="font-semibold text-xl text-black py-10">Bridal Make-Up</p>
        <div className="w-[85%] h-[70%] flex items-center justify-between flex-wrap">
          <div className="h-[40%] lg:h-[100%] w-[30%] md:w-[26%] lg:w-[12%] bg-skyBlue200 border-pink900 border-[2px] flex items-center justify-center">
            <img
              src={Bridal1}
              alt=""
              className="items-center w-[100%] h-[100%]"
            />
          </div>
          <div className="h-[40%] lg:h-[100%] w-[30%] md:w-[26%] lg:w-[12%] bg-skyBlue200 border-pink900 border-[2px] flex items-center justify-center">
            <img
              src={Bridal2}
              alt=""
              className="items-center w-[100%] h-[100%]"
            />
          </div>
          <div className="h-[40%] lg:h-[100%] w-[30%] md:w-[26%] lg:w-[12%] bg-skyBlue200 border-pink900 border-[2px] flex items-center justify-center">
            <img
              src={Bridal1}
              alt=""
              className="items-center w-[100%] h-[100%]"
            />
          </div>
          <div className="h-[40%] lg:h-[100%] w-[30%] md:w-[26%] lg:w-[12%] bg-skyBlue200 border-pink900 border-[2px] flex items-center justify-center">
            <img
              src={Bridal2}
              alt=""
              className="items-center w-[100%] h-[100%]"
            />
          </div>
          <div className="h-[40%] lg:h-[100%] w-[30%] md:w-[26%] lg:w-[12%] bg-skyBlue200 border-pink900 border-[2px] flex items-center justify-center">
            <img
              src={Bridal1}
              alt=""
              className="items-center w-[100%] h-[100%]"
            />
          </div>
          <div className="h-[40%] lg:h-[100%] w-[30%] md:w-[26%] lg:w-[12%] bg-skyBlue200 border-pink900 border-[2px] flex items-center justify-center">
            <img
              src={Bridal2}
              alt=""
              className="items-center w-[100%] h-[100%]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around h-[50%]">
        <p className="font-semibold text-xl text-black py-10">
          Birthday Make-Up
        </p>
        <div className="w-[85%] h-[70%] flex items-center justify-between flex-wrap">
          <div className="h-[40%] lg:h-[100%] w-[30%] md:w-[26%] lg:w-[12%] bg-skyBlue200 border-pink900 border-[2px] flex items-center justify-center">
            <img
              src={Birthday1}
              alt=""
              className="items-center w-[100%] h-[100%]"
            />
          </div>
          <div className="h-[40%] lg:h-[100%] w-[30%] md:w-[26%] lg:w-[12%] bg-skyBlue200 border-pink900 border-[2px] flex items-center justify-center">
            <img
              src={Birthday2}
              alt=""
              className="items-center w-[100%] h-[100%]"
            />
          </div>
          <div className="h-[40%] lg:h-[100%] w-[30%] md:w-[26%] lg:w-[12%] bg-skyBlue200 border-pink900 border-[2px] flex items-center justify-center">
            <img
              src={Birthday3}
              alt=""
              className="items-center w-[100%] h-[100%]"
            />
          </div>
          <div className="h-[40%] lg:h-[100%] w-[30%] md:w-[26%] lg:w-[12%] bg-skyBlue200 border-pink900 border-[2px] flex items-center justify-center">
            <img
              src={Birthday1}
              alt=""
              className="items-center w-[100%] h-[100%]"
            />
          </div>
          <div className="h-[40%] lg:h-[100%] w-[30%] md:w-[26%] lg:w-[12%] bg-skyBlue200 border-pink900 border-[2px] flex items-center justify-center">
            <img
              src={Birthday2}
              alt=""
              className="items-center w-[100%] h-[100%]"
            />
          </div>
          <div className="h-[40%] lg:h-[100%] w-[30%] md:w-[26%] lg:w-[12%] bg-skyBlue200 border-pink900 border-[2px] flex items-center justify-center">
            <img
              src={Birthday1}
              alt=""
              className="items-center w-[100%] h-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallaryContainer;
