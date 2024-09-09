import React from "react";

const SectionHeader = ({ header, text }) => {
  return (
    <div className=" w-full flex flex-col items-center">
      <h3 className="text-3xl text-black font-bold tracking-wider leading-10">
        {header}
      </h3>
      <div className="h-1 bg-red-500 w-24"></div>
      {text && <p className="my-5 text-center text-lg text-black">{text}</p>}
    </div>
  );
};

export default SectionHeader;
