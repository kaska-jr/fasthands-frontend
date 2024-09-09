import { useState } from "react";
import Mechanic from "../../assets/mechanic.png";
import { LuFacebook } from "react-icons/lu";
import {
  BsFillTelephoneOutboundFill,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
// import Footer from "./../layouts/Footer";
import GalleryContainer from "./components/GallaryContainer";
import LocationContainer from "./components/LocationContainer";
import Reviews from "./components/Reviews";

//TAB INDEX DATA-ARRAY
const tabLink = [
  {
    id: 1,
    tab: "gallery",
  },
  {
    id: 2,
    tab: "location",
  },
  {
    id: 3,
    tab: "reviews",
  },
];

//HANDLES LIKE FUNCTIONALITY
function Profile() {
  const [liking, setLiking] = useState(0),
    [isLike, setIsLike] = useState(false),
    like = () => {
      setLiking(liking + (isLike ? -1 : 1));
      setIsLike(!isLike);
    };

  const [activeTab, setActiveTab] = useState("gallery");

  //HANDLES TAB FUNCTIONALITY
  const handleTab = (activeTab) => {
    if (activeTab === "gallery") {
      setActiveTab("gallery");
    }
    if (activeTab === "location") {
      setActiveTab("location");
    }
    if (activeTab === "reviews") {
      setActiveTab("reviews");
    }
  };

  //ACCESS PAGE LOADER DATA

  return (
    <>
      <div className=" bg-white flex flex-col items-center justify-center">
        <div className="text-black mt-[4em] ">
          <img
            src={Mechanic}
            alt=""
            className="rounded-full  h-28 w-28 md:h-40 md:w-40 object-cover mx-auto"
          />
          <p className="font-semibold text-center md:text-start text-lg md:text-2xl">
            mikel
          </p>
          <p className="font-semibold text-center md:text-start text-base md:text-lg capitalize">
            Mechanic
          </p>
          <div className="mr-[8em] font-medium text-center md:text-start text-xs md:text-base w-full">
            <p>
              6 <span className="text-[gray]">Likes</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-4/5 max-w-xs mt-5">
          <div className=" flex flex-col gap-3 w-fit h-16">
            <button
              className="py-1 bg-[#b8b2b2] rounded-md w-28 md:w-32 text-black"
              onClick={like}
            >
              Like
            </button>
            <div className="flex items-center w-full gap-4 justify-center md:justify-start">
              <LuFacebook className="text-md md:text-xl" />
              <BsInstagram className="text-md md:text-xl" />
              <BsTwitter className="text-md md:text-xl" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-around w-fit h-16 gap-3">
            <button className=" w-32 md:w-32 py-1 bg-pink900 text-white rounded-md">
              Book
            </button>
            <div className="w-full flex items-center justify-around ">
              <BsFillTelephoneOutboundFill className="text-md font-bold text-sky-500" />
              <span className="text-sm">08142458737</span>
            </div>
          </div>
        </div>

        <div className="w-4/5 max-w-xs flex items-center justify-between my-10 font-medium">
          {tabLink.map(({ id, tab }) => (
            <span
              key={id}
              onClick={() => handleTab(tab)}
              className={`${
                activeTab === tab && "text-skyBlue900"
              } cursor-pointer capitalize`}
            >
              {tab}
            </span>
          ))}
        </div>

        {activeTab === "gallery" && <GalleryContainer />}
        {activeTab === "location" && <LocationContainer />}
        {activeTab === "reviews" && <Reviews />}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Profile;
