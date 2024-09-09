import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className=" w-[100%] bg-white lg:h-[380vh] h-[320vh] flex flex-col items-center">
        <div className="about-baber1 w-[100%] h-[440px]">
          <div className="w-[100%] h-[100%] bg-skyBlue900 bg-opacity-[0.5]">
            <div className="w-[100%] h-[100%] bg-black bg-opacity-[0.3]">
              {" "}
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
          <div className="w-[100%] lg:h-[144vh] h-[125vh] flex flex-col items-center justify-around bg-white">
            <p className="text-3xl font-black text-skyBlue900 text-center border-x-4 border-skyBlue900 px-4 mt-[2em]">
              Meet Our Team
            </p>

            <div className="carousel w-full relative top-[1.5em] hidden lg:flex">
              <div id="item1" className="carousel-item w-full">
                <div className="w-[100%] h-[90vh] bg-gray-300 flex items-center justify-around">
                  <figure className="chima h-[85%] w-[25%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200 flex items-center justify-around text-black">
                      <div>
                        <p className="font-bold">Scepter Onyewuch</p>
                        <p className="text-sm">CEO of FastHands</p>
                      </div>
                      <div className="flex w-[4vw] items-center justify-between">
                        <MdOutlineFacebook className="text-[blue]" />
                        <FaInstagramSquare className="text-[#f0405d]" />
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="cynthea h-[85%] w-[25%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200 flex items-center justify-around text-black">
                      <div>
                        <p className="font-bold">Igbebu Cynthea</p>
                        <p className="text-sm">Backend developer</p>
                      </div>
                      <div className="flex w-[4vw] items-center justify-between">
                        <MdOutlineFacebook className="text-[blue]" />
                        <FaInstagramSquare className="text-[#f0405d]" />
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="scepter h-[85%] w-[25%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200 flex items-center justify-around text-black">
                      <div>
                        <p className="font-bold">Ndukwe Chima</p>
                        <p className="text-sm">Front-end developer</p>
                      </div>
                      <div className="flex w-[4vw] items-center justify-between">
                        <MdOutlineFacebook className="text-[blue]" />
                        <FaInstagramSquare className="text-[#f0405d]" />
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div id="item2" className="carousel-item w-full">
                <div className="w-[100%] h-[90vh] bg-gray-300 flex items-center justify-around">
                  <figure className="h-[85%] w-[25%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                  <figure className="h-[85%] w-[25%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                  <figure className="h-[85%] w-[25%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                </div>
              </div>
              <div id="item3" className="carousel-item w-full">
                <div className="w-[100%] h-[90vh] bg-gray-300 flex items-center justify-around">
                  <figure className="h-[85%] w-[25%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                  <figure className="h-[85%] w-[25%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                  <figure className="h-[85%] w-[25%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                </div>
              </div>
              <div id="item4" className="carousel-item w-full">
                <div className="w-[100%] h-[90vh] bg-gray-300 flex items-center justify-around">
                  <figure className="h-[85%] w-[25%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                  <figure className="h-[85%] w-[25%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                  <figure className="h-[85%] w-[25%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="h-[5vh] lg:flex justify-center w-full  gap-2 hidden">
              <a href="#item1" className="btn btn-xs">
                1
              </a>
              <a href="#item2" className="btn btn-xs">
                2
              </a>
              <a href="#item3" className="btn btn-xs">
                3
              </a>
              <a href="#item4" className="btn btn-xs">
                4
              </a>
            </div>
            <div className="carousel w-full relative top-[1.5em] lg:hidden">
              <div id="item1i" className="carousel-item w-full">
                <div className="w-[100%] h-[90vh] bg-gray-300 flex items-center justify-around">
                  <figure className="chima h-[85%]  w-[47%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200 flex items-center justify-around text-black">
                      <div>
                        <p className="font-bold">Scepter Onyewuch</p>
                        <p className="text-sm">CEO of FastHands</p>
                      </div>
                      <div className="flex flex-col w-[8vw] items-center justify-between">
                        <MdOutlineFacebook className="text-[blue] text-2xl" />
                        <FaInstagramSquare className="text-[#f0405d] text-2xl" />
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="cynthea h-[85%]  w-[47%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200 flex items-center justify-around text-black">
                      <div>
                        <p className="font-bold">Igbebu Cynthea</p>
                        <p className="text-sm">Backend developer</p>
                      </div>
                      <div className="flex flex-col w-[8vw] items-center justify-between">
                        <MdOutlineFacebook className="text-[blue] text-2xl" />
                        <FaInstagramSquare className="text-[#f0405d] text-2xl" />
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div id="item2i" className="carousel-item w-full">
                <div className="w-[100%] h-[90vh] bg-gray-300 flex items-center justify-around">
                  <figure className="scepter h-[85%] w-[47%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200 flex items-center justify-around text-black">
                      <div>
                        <p className="font-bold">Ndukwe Chima</p>
                        <p className="text-sm">Front-end developer</p>
                      </div>
                      <div className="flex flex-col w-[8vw] items-center justify-between">
                        <MdOutlineFacebook className="text-[blue] text-2xl" />
                        <FaInstagramSquare className="text-[#f0405d] text-2xl" />
                      </div>
                    </figcaption>
                  </figure>

                  <figure className="h-[85%] w-[47%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                </div>
              </div>
              <div id="item3i" className="carousel-item w-full">
                <div className="w-[100%] h-[90vh] bg-gray-300 flex items-center justify-around">
                  <figure className="h-[85%]  w-[47%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                  <figure className="h-[85%]  w-[47%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                </div>
              </div>
              <div id="item4i" className="carousel-item w-full">
                <div className="w-[100%] h-[90vh] bg-gray-300 flex items-center justify-around">
                  <figure className="h-[85%]  w-[47%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                  <figure className="h-[85%] w-[47%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                </div>
              </div>
              <div id="item5" className="carousel-item w-full">
                <div className="w-[100%] h-[90vh] bg-gray-300 flex items-center justify-around">
                  <figure className="h-[85%] w-[47%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                  <figure className="h-[85%] w-[47%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                </div>
              </div>
              <div id="item6" className="carousel-item w-full">
                <div className="w-[100%] h-[90vh] bg-gray-300 flex items-center justify-around">
                  <figure className="h-[85%] w-[47%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                  <figure className="h-[85%] w-[47%] bg-gray-400 flex items-end">
                    <figcaption className="w-[100%] h-[10%] bg-gray-200"></figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="h-[5vh] flex justify-center w-full  gap-2 lg:hidden">
              <a href="#item1i" className="btn btn-xs">
                1
              </a>
              <a href="#item2i" className="btn btn-xs">
                2
              </a>
              <a href="#item3i" className="btn btn-xs">
                3
              </a>
              <a href="#item4i" className="btn btn-xs">
                4
              </a>
              <a href="#item5" className="btn btn-xs">
                5
              </a>
              <a href="#item6" className="btn btn-xs">
                6
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
