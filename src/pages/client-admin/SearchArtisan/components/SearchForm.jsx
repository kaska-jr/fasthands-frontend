import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useSearchArtisan } from "../../../../services/queries";

const SearchForm = () => {
  const [location, setLocation] = useState(1);
  const [skills, setSkills] = useState([]);

  const { data } = useSearchArtisan();

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation();
  };

  return (
    <section className=" w-[100%] py-5 bg-white flex justify-center items-center">
      <section className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-center text-base md:text-xl font-bold text-skyBlue900">
            Lets help you locate your desired Artisan
          </h1>
        </div>
        <form
          className="flex justify-center items-center gap-2 mt-[1em]"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center items-center w-fit">
            <input
              type="search"
              placeholder="Enter your city..."
              className="border focus:border-pink900 h-10 w-60 lg:h-12 lg:w-96 px-3 border-gray-200 bg-gray-200  rounded-full placeholder:px-2 placeholder:italic outline-none"
            />
          </div>
          <button
            className="shadow-md flex justify-center items-center bg-skyBlue900 text-white h-10 w-10 lg:h-12 lg:w-12 rounded-full"
            type="submit"
          >
            <IoSearch className=" text-xl md:text-2xl  text-white right-3" />
          </button>
        </form>
      </section>
    </section>
  );
};

export default SearchForm;
