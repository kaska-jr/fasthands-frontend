import React from "react";
import { Collection, Header } from "../../components";
import { MdKeyboardArrowDown } from "react-icons/md";

const collections = [
  {
    id: 1,
    title: "Bridal Make-Up",
    images: [
      "/collection.png",
      "/collection.png",
      "/collection.png",
      "/collection.png",
    ],
  },

  {
    id: 2,
    title: "Birthday Make-Up",
    images: [
      "/collection.png",
      "/collection.png",
      "/collection.png",
      "/collection.png",
    ],
  },

  {
    id: 3,
    title: "Natural Make-Up",
    images: [
      "/collection.png",
      "/collection.png",
      "/collection.png",
      "/collection.png",
    ],
  },

  {
    id: 4,
    title: "Fashion/Runaway Make-Up",
    images: [
      "/collection.png",
      "/collection.png",
      "/collection.png",
      "/collection.png",
    ],
  },
];

const Gallery = () => {
  return (
    <div className="bg-white">
      <Header text="Services Gallery" />
      <main className="m-10 w-[90%] max-w-3xl mx-auto">
        <div className="">
          {collections.map((collection) => {
            return <Collection {...collection} key={collection.id} />;
          })}
        </div>
        <div className="flex justify-end">
          <button className="flex items-center gap-2">
            <span className="font-bold">More</span>
            <MdKeyboardArrowDown className="font-light" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
