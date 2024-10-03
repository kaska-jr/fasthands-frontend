import React from "react";

const About = () => {
  return (
    <>
      <div className=" w-[100%] bg-white lg:h-[380vh] h-[320vh] flex flex-col items-center">
        <div className="about-baber1 w-[100%] h-[440px]">
          <div className="w-[100%] h-[100%] bg-skyBlue900 bg-opacity-[0.5]">
            <div className="w-[100%] h-[100%] bg-black bg-opacity-[0.3]">
              <p className="text-center text-4xl font-semibold text-white pt-[4em]">
                ABOUT US
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] lg:w-[70%] lg:h-[90vh] h-[70vh] flex relative bottom-[6em]">
          <div className="w-[100%] md:w-[50%] h-[100%]  py-[5em] px-[2em] bg-gray-100 text-black font-semibold text-xl">
            <p className="text-3xl text-skyBlue900 font-bold">
              We are FastHands
            </p>
            <p className="md:w-[70%] pt-[2em]">
              FastHands is a response to the gradual integration of all facets
              of the society into the digital space.
            </p>
            <p className="md:w-[70%]">
              It is meant to give all artisans and local producers the same
              platform and advantage of reach as the ICT sector
            </p>
          </div>
          <div className="about-baber2 w-[50%] h-[100%] hidden sm:block"></div>
        </div>
        <div className="h-[230vh] flex flex-col items-center justify-around">
          <div className="lg:h-[110vh] h-[80vh] bg-skyBlue200 text-black flex flex-col items-center justify-center">
            <div className="h-[40vh] md:w-[90%] w-[95%] flex items-center justify-around">
              <div className="md:w-[50%] w-[70%]">
                <p className="w-[50%] md:text-3xl font-black text-skyBlue900">
                  Our Vision
                </p>
                <p className="md:w-[60%]">
                  Empowering skilled laborers by connecting them with their
                  potential clients, enabling them to thrive in the digital age
                  and fulfill their entrepreneurial dreams.{" "}
                </p>
              </div>
              <div className="vision w-[30%] h-[80%]"></div>
            </div>
            <div className="h-[40vh] md:w-[90%] w-[95%] flex items-center justify-around">
              <div className="mission w-[30%] h-[80%]"></div>
              <div className=" md:w-[50%] w-[70%]  flex flex-col text-end items-end justify-end">
                <p className="w-[70%] md:text-3xl font-black text-skyBlue900 lg:pr-[5em]">
                  Our Mission
                </p>
                <p className="md:w-[60%] w-[90%]">
                  To build the leading online platform that bridges the gap
                  between skilled laborers and their clients, fostering a
                  thriving digital marketplace for talent and services,
                  introducing a seamless scouting process and revolutionizing
                  the way people access and provide skilled labor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
