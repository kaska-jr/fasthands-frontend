import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useSearchArtisan } from "../../../../services/queries";
import { locationOptions } from "../../../../lib/constants";
import { toast } from "react-toastify";
import { useEffect } from "react";

const SearchForm = ({ setArtisans, setIsLoading }) => {
  const [location, setLocation] = useState("all");
  const [skill, setSkill] = useState("");
  const [searchParams, setSearchParams] = useState({});
  const { data, isLoading, isSuccess } = useSearchArtisan(searchParams);

  useEffect(() => {
    setIsLoading(isLoading);
    if (data) {
      setArtisans(data?.data);
    }
  }, [isLoading, data, isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location && skill && location !== "all") {
      setSearchParams({ skill, location });
    } else if (location === "all") {
      setSearchParams({});
      setSkill("");
    } else if (!skill && location !== "all") {
      toast.error("skill must be selected");
    } else {
      toast.error("Please select location and skill");
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "location" && checked) {
      setLocation(value);
    }
    if (name === "skill") {
      setSkill(value);
    }
  };

  return (
    <section className=" w-[100%] py-5 bg-white flex flex-col justify-center items-center gap-6">
      <section className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-center text-base md:text-xl font-bold text-skyBlue900">
            Lets help you locate your desired Artisan
          </h1>
          <p className="text-center">
            Select Location, Enter Skill keyword and Search
          </p>
        </div>
        <form
          className="flex justify-center items-center gap-2 mt-[1em]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col lg:flex-row justify-center items-center w-fit gap-6">
            <div className="flex flex-col md:flex-row gap-5">
              <div>
                <h1 className="text-lg text-gray-700 font-bold">
                  Select Location
                </h1>
                <div className="flex gap-4">
                  {locationOptions.map((location) => {
                    return (
                      <div
                        key={location.id}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          id="location"
                          name="location"
                          value={location.name}
                          onChange={handleChange}
                          className="w-4 h-4 bg-white dark:bg-white appearance-none rounded-full border border-gray-200 checked:border-pink900 checked:ring checked:ring-skyBlue900 checked:bg-pink900 checked:hover:bg-pink900 checked:focus:bg-pink900"
                        />
                        <label
                          htmlFor={"location"}
                          className="text-gray-700 capitalize"
                        >
                          {location.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="search"
                placeholder="Search skill..."
                name="skill"
                value={skill}
                onChange={handleChange}
                className="border focus:border-pink900 h-10 w-60 lg:h-12 lg:w-96 px-3 border-gray-200 bg-gray-200  rounded-full placeholder:px-2 placeholder:italic outline-none"
              />
              <button
                className="shadow-md flex justify-center items-center bg-skyBlue900 text-white h-10 w-10 lg:h-12 lg:w-12 rounded-full"
                type="submit"
              >
                <IoSearch className=" text-xl md:text-2xl  text-white right-3" />
              </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default SearchForm;
