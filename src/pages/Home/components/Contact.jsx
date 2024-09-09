import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl w-[95%] mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col justify-around flex-1 order-2 md:order-1 py-4 text-black text-base">
          <div>
            <b className="text-3xl text-black font-bold">Contact Us</b>
            <div className="py-3">
              <p>
                We're always here to assist with concerns, questions and
                feedbacks you might have.
              </p>
              <p>Our top priority is your best interest.</p>
            </div>
          </div>
          <div className=" flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="p-2 w-12 h-12 bg-pink900 flex items-center justify-center">
                <MdOutlineMailOutline className="text-white text-3xl" />
              </div>
              <div className="flex flex-col">
                <b className="text-black font-bold">Email Us</b>
                <p>fasthands@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="p-2 w-12 h-12 bg-pink900 flex items-center justify-center">
                <IoCallOutline className="text-white text-3xl" />
              </div>
              <div className="flex flex-col">
                <b className="text-black font-bold">Call Us</b>
                <p>08059941818</p>
                <p>08142920154</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-end order-1 md:order-2">
          <img
            src="/telephone.png"
            alt="telephone"
            className="block w-full md:w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
