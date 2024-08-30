import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Mechanic from "/mechanic.png";

//Rate your experience should be enabled when we are sure that the customer has actually used the service

const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-around md:justify-center pt-[3em]">
      <div className=" flex-col items-center justify-around">
        {[1, 2, 6, 3, 4, 6, 7].map(() => (
          <div className=" flex gap-5 max-w-xl py-5 px-4">
            <img
              src={Mechanic}
              alt=""
              className="w-20 h-20 rounded-full flex-shrink-0"
            />
            <div>
              <div className="flex gap-2">
                <h2 className="text-black font-semibold text-xl">
                  Sophia Gregory
                </h2>
                <div className="flex items-center gap-2 w-32">
                  <FaStar className="text-skyBlue900" />
                  <FaStar className="text-skyBlue900" />
                  <FaStar className="text-skyBlue900" />
                  <FaRegStar className="text-[gray]" />
                  <FaRegStar className="text-[gray]" />
                </div>
              </div>

              <p className="text-black font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati tenetur sed nihil a distinctio nulla?
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
