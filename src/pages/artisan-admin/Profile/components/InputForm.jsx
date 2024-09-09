import React from "react";

const InputForm = ({
  name,
  label,
  type,
  placeholder,
  disabled,
  value,
  options = [],
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="capitalize text-skyBlue900 font-semibold"
      >
        {label}:
      </label>
      {type === "textArea" ? (
        <textarea
          name={name}
          id={name}
          rows="10"
          className="focus:outline-none focus:bg-[#F5F5F5] bg-[#F5F5F5] h-40 rounded-md p-3 text-black w-full border border-[#F5F5F5] focus:border-skyBlue900"
          value={value}
          onChange={onChange}
          disabled={disabled ? true : false}
        />
      ) : type === "select" ? (
        <select
          name={name}
          id={name}
          onChange={onChange}
          className="focus:outline-none focus:bg-[#F5F5F5] bg-[#F5F5F5] h-10 rounded-md text-black w-full border border-[#F5F5F5] focus:border-skyBlue900"
        >
          {options.map((option) => (
            <option
              key={option.id}
              value={option.id}
              selected={value === option.id}
            >
              {option.name}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          className="focus:outline-none border border-[#F5F5F5] focus:border-skyBlue900 bg-[#F5F5F5] h-10 rounded-md px-3 text-black"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled ? true : false}
        />
      )}
    </div>
  );
};

export default InputForm;
