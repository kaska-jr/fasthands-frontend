import React from "react";

const SpotlightArtisan = () => {
  return (
    <section className="py-10 bg-white-500">
      <div className="flex justify-center items-center pb-10">
        <h1 className="text-2xl text-gray-700 font-bold">Spotlight Artisans</h1>
      </div>
      <div className="mx-auto w-[90%] border-2 border-skyBlue900 h-[300px] md:h-[430px] rounded-[3rem] md:rounded-[5rem] p-8 md:p-10 flex items-end bg-[url('/artisan-banner.jpg')] bg-center bg-no-repeat bg-cover">
        <div className=" w-fit">
          <div className="w-full text-white">
            <h1 className=" md:text-2xl font-bold flex md:flex-row flex-col gap-1">
              <p>Spotlight on </p>{" "}
              <span className="text-pink900 md:text-2xl font-bold">
                AMY BEAUTY SALOON
              </span>
            </h1>
            <div className="">
              <p className="text-white">
                Professional hair dresser Makeup artist and Skin care therapist
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-skyBlue500 py-[0.4em] px-[1em] text-white rounded-md shadow-md ">
                Profile
              </button>
              <button className="bg-skyBlue500 py-[0.4em] px-[1em] text-white rounded-md shadow-md">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightArtisan;
