import React from "react";
import Scepter from "./../assets/scepter.png";
import { BsTelephone } from "react-icons/bs";

function PaymentHeader() {
  return (
    <div className="h-[15vh] w-[100%] bg-white flex lg:flex-row flex-col items-center justify-around shadow-2xl">
      <p className="w-[35%] flex items-center justify-start lg:text-2xl font-black text-skyBlue900">
        Book Artisan
      </p>
      <div className="lg:w-[25%] w-[85%] flex items-center justify-between">
        <div className="flex items-center justify-between lg:w-[43%] md:w-[25%] w-[48%]">
          <img src={Scepter} alt="" className="h-12 rounded-full w-12" />
          <p className="text-skyBlue700 font-semibold">SG Makeup</p>
        </div>
        <div className="w-[40%] md:w-[25%] lg:w-[40%] flex items-center justify-between font-semibold">
          {" "}
          <BsTelephone className="md:text-sm text-black lg:font-semibold" />
          <p className="text-black">07087657868</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentHeader;
