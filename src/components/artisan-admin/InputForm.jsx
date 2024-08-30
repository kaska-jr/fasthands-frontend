import React from "react";

const InputForm = ({ name, label, type, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="capitalize text-skyBlue900 font-semibold"
      >
        {label}:
      </label>
      <input
        // disabled={true}
        type={type}
        name={name}
        className="focus:outline-none border border-[#F5F5F5] focus:border-skyBlue900 bg-[#F5F5F5] h-10 rounded-md px-3 text-black"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputForm;
