import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useSearchArtisan } from "../../../../services/queries";
import { locationOptions, skillsOption } from "../../../../lib/constants";
import { getLocationsByName, getSkillsByName } from "../../../../lib/helpers";

const SearchForm = ({ setArtisans, setIsLoading }) => {
  const { data, isLoading } = useSearchArtisan();

  console.log(data?.data);

  if (data) {
    console.log(data?.data);

    setArtisans(data?.data);
    setIsLoading(isLoading);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation();
  };

  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    console.log(name, value, checked);
    if (name === "location" && checked) {
      setLocation(value);
      return;
    }

    if (checked) {
      // check if skill is already selected
      if (skills.includes(value)) return;

      setSkills((prev) => {
        return [...prev, value];
      });
    }

    if (!checked) {
      setSkills((prev) => {
        return prev.filter((skill) => skill !== value);
      });
    }
  };

  const skillsIdArray = skills.map((skill) => getSkillsByName(skill));
  const locationId = getLocationsByName(location);

  console.log(locationId, skillsIdArray);

  return (
    <section className=" w-[100%] py-5 bg-white flex flex-col justify-center items-center gap-6">
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
      <section className="w-[100%] flex flex-col md:flex-row justify-center md:items-end gap-5 px-10">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="">
            <h1 className="text-lg text-gray-700 font-bold">Select Skills</h1>
            <div className="flex  gap-4">
              {skillsOption.map((skill) => {
                return (
                  <div key={skill.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={skill.name}
                      name={skill.name}
                      value={skill.name}
                      onChange={handleChange}
                      className="w-5 h-5"
                    />
                    <label htmlFor={skill.name}>{skill.name}</label>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h1 className="text-lg text-gray-700 font-bold">Select Location</h1>
            <div className="flex gap-4">
              {locationOptions.map((location) => {
                return (
                  <div key={location.id} className="flex items-center gap-2">
                    <input
                      type="radio"
                      id={location.name}
                      name="location"
                      value={location.name}
                      onChange={handleChange}
                      className="w-5 h-5"
                    />
                    <label htmlFor={"location"}>{location.name}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>{" "}
        <button
          type="submit"
          className="px-2 py-1 bg-skyBlue900 text-white rounded-md w-fit"
        >
          Search
        </button>
      </section>
    </section>
  );
};

export default SearchForm;
