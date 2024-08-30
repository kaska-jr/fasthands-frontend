import React, { useState } from "react";
import PaymentHeader from "./PaymentHeader";
import Footer from "./../layouts/Footer";
import { FaRegCreditCard } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { TbBrandVisa } from "react-icons/tb";
import { GrCheckmark } from "react-icons/gr";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

function Payment() {
  const [moblieWorkStarted, setMobileWorkStarted] = useState(false);
  const [mobileWorkInProgress, setMobileWorkInProgress] = useState(false);
  const [mobileWorkCompleted, setMobileWorkCompleted] = useState(false);
  const [payment, setPayment] = useState(true);
  const [jobstatus, setJobstatus] = useState(false);
  const [progress, setProgress] = useState(false);
  const [start, setStart] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [rating, setRating] = useState(false);
  const [star, setStar] = useState(false);
  const [liking, setLiking] = useState(0);
  const [chat, setChat] = useState(false),
    [isLike, setIsLike] = useState(false),
    like = () => {
      setLiking(liking + (isLike ? -1 : 1));
      setIsLike();
    };

  const mobileOpenWorkStarted = () => {
    setMobileWorkStarted(!moblieWorkStarted);
  };
  const mobileOpenWorkInProgress = () => {
    setMobileWorkInProgress(!mobileWorkInProgress);
  };
  const mobileOpenWorkCompleted = () => {
    setMobileWorkCompleted(!mobileWorkCompleted);
  };

  const openPayment = () => {
    setPayment(true);
    setJobstatus(false);
    setRating(false);
    setChat(false);
  };

  const openJobStatus = () => {
    setJobstatus(true);
    setPayment(false);
    setRating(false);
    setChat(false);
  };

  const openProgress = () => {
    setProgress(!progress);
  };

  const openStart = () => {
    setStart(!start);
  };

  const openCompleted = () => {
    setCompleted(!completed);
  };

  const openRating = () => {
    setRating(true);
    setJobstatus(false);
    setPayment(false);
    setChat(false);
  };

  const openChat = () => {
    setChat(true);
    setJobstatus(false);
    setRating(false);
    setPayment(false);
  };

  return (
    <div>
      <PaymentHeader />
      <div className="h-[115vh] w-[100%] bg-white flex items-center  lg:justify-end justify-center flex-col">
        <div className="lg:w-[50%] w-[80%] flex items-center justify-between text-black font-semibold">
          <p onClick={openPayment} className="cursor-pointer">
            Pay
          </p>
          <p onClick={openChat} className="cursor-pointer">
            Chat
          </p>
          <p onClick={openJobStatus} className="cursor-pointer">
            Job status
          </p>
          <p onClick={openRating} className="cursor-pointer">
            Rating
          </p>
        </div>
        {payment && (
          <div className="h-[80%] w-[90%] flex items-center justify-center">
            <div className="lg:w-[20%] w-[30%] h-[90%] bg-gray-200 flex justify-around flex-col lg:pl-12 pl-5 text-black font-semibold">
              <p className="flex items-center lg:text-base text-sm justify-center lg:pr-12  pr-2 font-medium">
                PAY WITH
              </p>
              <p className="relative flex items-center justify-between w-[32%]">
                {" "}
                <FaRegCreditCard />
                Card
              </p>
              <p className="relative flex items-center justify-between w-[32%]">
                <BsBank />
                Bank
              </p>
              <p className="relative flex items-center justify-between w-[66%]">
                <CiMobile4 />
                Mobile Money
              </p>
              <p className="relative flex items-center justify-between w-[22%]">
                <TbBrandVisa />
                QR
              </p>
            </div>
            <div className="w-[80%] h-[90%] flex flex-col items-center justify-around">
              <div className="flex flex-col items-end text-black  w-[100%]">
                <p>fasthands@paystack.com</p>
                <p>
                  pay <span className="text-skyBlue900 font-bold">NGN300</span>
                </p>
              </div>
              <div className="h-[85%] lg:w-[60%] w-[80%] flex flex-col items-center justify-around">
                <p className="text-black font-black lg:text-lg text-sm w-[70%]">
                  Enter your card details to pay
                </p>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="lg:w-[70%] w-[90%] h-[10vh] bg-white border-2 border-[#4b4848] rounded-xl placeholder:text-lg pl-5 whitespace-nowrap overflow-hidden text-ellipsis "
                />

                <div className="lg:h-[10vh] h-[25vh] lg:w-[70%] w-[90%] flex lg:flex-row flex-col items-center justify-between">
                  <input
                    type="text"
                    placeholder="CARD EXPIRY"
                    className="lg:w-[45%] w-[100%] lg:h-[100%] h-[40%] rounded-xl  bg-white border-2 border-[#4b4848] placeholder:text-lg pl-5"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="lg:w-[45%] w-[100%] lg:h-[100%] h-[40%] rounded-xl  bg-white border-2 border-[#4b4848] placeholder:text-lg pl-5"
                  />
                </div>
                <button className="w-[50%] bg-skyBlue900 rounded-md text-white text-lg font-semibold h-[6vh]">
                  Pay
                </button>
              </div>
            </div>
          </div>
        )}

        {jobstatus && (
          <div className="lg:h-[80%] h-[100%] w-[90%] flex flex-col lg:justify-around">
            <div className="w-[100%] h-[100%] flex flex-col lg:hidden items-center justify-between text-black relative">
              <div className=" flex-col h-[60%] w-[100%] flex items-center justify-around">
                <div className="w-[100%] h-[15%] flex items-center justify-around">
                  <div
                    className="border border-pink900 h-[100%] w-[15%] md:w-[10%]  cursor-pointer rounded-full"
                    onClick={mobileOpenWorkStarted}
                  >
                    {moblieWorkStarted && (
                      <div className="h-[100%] w-[100%] bg-skyBlue900 rounded-full"></div>
                    )}
                  </div>
                  <p>Work started</p>
                  <LiaLongArrowAltRightSolid className="text-8xl" />
                </div>
                <div className="w-[100%] h-[15%] flex items-center justify-around">
                  <div
                    className="border border-pink900 h-[100%] w-[15%] md:w-[10%]  cursor-pointer rounded-full"
                    onClick={mobileOpenWorkInProgress}
                  >
                    {mobileWorkInProgress && (
                      <div className="h-[100%] w-[100%] bg-skyBlue900 rounded-full"></div>
                    )}
                  </div>
                  <p>Work in progress</p>
                  <LiaLongArrowAltRightSolid className="text-8xl" />
                </div>
                <div className="w-[100%] h-[15%] flex items-center justify-around">
                  <div
                    className="border border-pink900 h-[100%] w-[15%] md:w-[10%] cursor-pointer rounded-full"
                    onClick={mobileOpenWorkCompleted}
                  >
                    {mobileWorkCompleted && (
                      <div className="h-[100%] w-[100%] bg-skyBlue900 rounded-full"></div>
                    )}
                  </div>
                  <p>Work completed</p>
                  <LiaLongArrowAltRightSolid className="text-8xl" />
                </div>
              </div>
              <div className="flex justify-between w-[100%] h-[40%] flex-col md:pl-[5em] pl-[1.5em]">
                {moblieWorkStarted && (
                  <div className="h-[28%] w-[40%] bg-[yellow]"></div>
                )}
                {mobileWorkInProgress && (
                  <div className="h-[28%] w-[60%] bg-skyBlue900"></div>
                )}
                {mobileWorkCompleted && (
                  <div className="h-[28%] w-[80%] bg-[green]"></div>
                )}
              </div>
            </div>
            <div className="w-[100%] h-[7%] lg:flex items-center justify-between text-black relative hidden">
              <div
                className="border border-pink900 h-[100%] w-[3.2%] cursor-pointer rounded-full"
                onClick={openStart}
              ></div>
              {start && (
                <div
                  className="border bg-skyBlue900 h-[100%] w-[3.2%] cursor-pointer rounded-full absolute left-0 flex items-center justify-center"
                  onClick={openStart}
                >
                  <GrCheckmark className="text-white font-bold text-lg" />
                </div>
              )}
              <p>Work started</p>
              <LiaLongArrowAltRightSolid className="text-8xl" />
              <div
                className="border border-pink900 h-[100%] w-[3.2%] cursor-pointer rounded-full"
                onClick={openProgress}
              >
                {progress && (
                  <div
                    className="border bg-skyBlue900 h-[100%] w-[3.2%] cursor-pointer rounded-full absolute left-[474.4px] bottom-[0.2px] flex items-center justify-center"
                    onClick={openProgress}
                  >
                    <GrCheckmark className="text-white font-bold text-lg" />
                  </div>
                )}
              </div>
              <p>Work in progress</p>
              <LiaLongArrowAltRightSolid className="text-8xl" />
              <div
                className="border border-pink900 h-[100%] w-[3.2%] cursor-pointer rounded-full"
                onClick={openCompleted}
              >
                {completed && (
                  <div
                    className="border bg-skyBlue900 h-[100%] w-[3.2%] cursor-pointer rounded-full absolute left-[978.3px] bottom-[0.2px] flex items-center justify-center"
                    onClick={openCompleted}
                  >
                    <GrCheckmark className="text-white font-bold text-lg" />
                  </div>
                )}
              </div>
              <p>Work completed</p>
            </div>

            <div className="h-[60%] flex flex-col justify-between">
              {start && <div className="w-[40%] h-[20%] bg-[yellow]"></div>}
              {progress && (
                <div className="w-[60%] h-[6%] bg-skyBlue900 absolute top-[33em]"></div>
              )}
              {completed && <div className="w-[90%] h-[20%] bg-[green]"></div>}
            </div>
          </div>
        )}

        {chat && (
          <div className="h-[80%] w-[90%] flex flex-col items-center justify-around"></div>
        )}

        {rating && (
          <div className="h-[80%] w-[90%] flex flex-col items-center justify-around">
            <div className="lg:w-[40%] w-[90%] bg-gray-200 h-[10%] flex items-center justify-around rounded-[3em]">
              <div className="w-[17%] h-[100%] flex items-center justify-center relative text-black">
                <CiStar className="text-2xl cursor-pointer" onClick={like} />
              </div>
              <div className="w-[17%] h-[100%] flex items-center justify-center relative text-black">
                <CiStar className="text-2xl cursor-pointer" onClick={like} />
              </div>
              <div className="w-[17%] h-[100%] flex items-center justify-center relative text-black">
                <CiStar className="text-2xl cursor-pointer" onClick={like} />
              </div>
              <div className="w-[17%] h-[100%] flex items-center justify-center relative text-black">
                <CiStar className="text-2xl cursor-pointer" onClick={like} />
              </div>
              <div className="w-[17%] h-[100%] flex items-center justify-center relative text-black">
                <CiStar className="text-2xl cursor-pointer" onClick={like} />
              </div>
              <p className="w-[10%] text-black">{liking}/5</p>
            </div>
            <div className="h-[60%] w-[100%] flex flex-col items-center justify-around">
              <div className="w-[90%] h-[10%] flex items-center justify-between">
                <p className="text-black">5 Star</p>
                <div className="w-[90%] h-[100%] bg-gray-300  rounded-2xl">
                  <div className="w-[70%] h-[100%] bg-skyBlue900 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-[90%] h-[10%] flex items-center justify-between">
                <p className="text-black">4 Star</p>
                <div className="w-[90%] h-[100%] bg-gray-300 flex items-center justify-between rounded-2xl">
                  <div className="w-[60%] h-[100%] bg-skyBlue900 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-[90%] h-[10%] flex items-center justify-between">
                <p className="text-black">3 Star</p>
                <div className="w-[90%] h-[100%] bg-gray-300 flex items-center justify-between rounded-2xl">
                  <div className="w-[50%] h-[100%] bg-skyBlue900 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-[90%] h-[10%] flex items-center justify-between">
                <p className="text-black">3 Star</p>
                <div className="w-[90%] h-[100%] bg-gray-300 flex items-center justify-between rounded-2xl">
                  <div className="w-[40%] h-[100%] bg-skyBlue900 rounded-2xl"></div>
                </div>
              </div>
              <div className="w-[90%] h-[10%] flex items-center justify-between">
                <p className="text-black">1 Star</p>
                <div className="w-[90%] h-[100%] bg-gray-300 flex items-center justify-between rounded-2xl">
                  <div className="w-[30%] h-[100%] bg-skyBlue900 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
