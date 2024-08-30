import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchForm = () => {
  return (
    <section className=" w-[100%] py-5 bg-white flex justify-center items-center border ">
      <section className=" flex flex-col items-center justify-center">
        <div>
          <h1 className="text-center text-base md:text-xl font-bold text-skyBlue900">
            Lets help you locate your desired Artisan
          </h1>
        </div>
        <div className="flex justify-center items-center mt-[1em] relative w-fit">
          <input
            type="text"
            placeholder="Enter your city... "
            className="border focus:border-pink900 h-10 w-60 lg:h-12 lg:w-96 px-3 border-gray-200 bg-gray-200  rounded-full placeholder:px-2 placeholder:italic outline-none"
          />
          <IoSearch className=" text-xl md:text-2xl  text-pink900 absolute right-3" />
        </div>
        {false && (
          <p className="text-center italic text-red-500 text-xs md:text-sm my-2">
            Sorry, No Artisan found in the Location you provided
          </p>
        )}
      </section>
    </section>
  );
};

export default SearchForm;
