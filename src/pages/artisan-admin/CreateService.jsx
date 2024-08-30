import React from "react";
import { Header } from "../../components";
import { TbCurrencyNaira } from "react-icons/tb";

const CreateService = () => {
  return (
    <div className="bg-white">
      <Header text="Create Service" />
      <main className="m-10 w-[90%] max-w-3xl mx-auto gap-5 flex flex-col">
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-x-5">
          <div className="col-span-2">
            <label
              htmlFor="title"
              className="capitalize text-skyBlue900 font-semibold text-base md:text-xl"
            >
              Service Title
            </label>

            <input
              name="title"
              id="title"
              className="focus:outline-none focus:bg-[#F5F5F5] bg-[#F5F5F5] h-10 rounded-md p-3 text-black w-full border border-[#F5F5F5] focus:border-skyBlue900"
              placeholder="Enter Service Name"
            />
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="price"
              className="capitalize text-skyBlue900 font-semibold text-base md:text-xl"
            >
              Price
            </label>
            <div className="h-fit w-full relative">
              <input
                name="price"
                id="price"
                type="number"
                className="focus:outline-none focus:bg-[#F5F5F5] bg-[#F5F5F5] h-10 rounded-md p-3 pl-6 text-black w-full border border-[#F5F5F5] focus:border-skyBlue900"
                placeholder="Enter Service Price"
              />
              <TbCurrencyNaira className="absolute top-1/2 -translate-y-1/2 left-1 text-gray-400 text-lg" />
            </div>
          </div>
        </div>

        <div className="w-full">
          <label
            htmlFor="description"
            className="capitalize text-skyBlue900 font-semibold text-base md:text-xl"
          >
            Service Description
          </label>

          <textarea
            name="description"
            id="description"
            rows="10"
            className="focus:outline-none focus:bg-[#F5F5F5] bg-[#F5F5F5] h-40 rounded-md p-3 text-black w-full border border-[#F5F5F5] focus:border-skyBlue900"
            placeholder="Brief Description of your service"
          ></textarea>
        </div>

        <div className="w-full">
          <label
            htmlFor="images"
            className="capitalize text-skyBlue900 font-semibold text-base md:text-xl"
          >
            Upload Images of your Previous work
          </label>

          <div className=" bg-[#F5F5F5] h-40 rounded-md p-3 text-black w-full border border-[#F5F5F5] focus:border-skyBlue900">
            <input type="file" name="images" id="images" />
          </div>
        </div>
        <div className="w-full my-5 grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2  flex justify-start w-full">
            <button className="bg-skyBlue900 px-2 py-2 lg:px-3 lg:py-2 text-white text-sm lg:text-base font-medium rounded-md gap-3 w-full md:w-fit">
              Create a service
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateService;
