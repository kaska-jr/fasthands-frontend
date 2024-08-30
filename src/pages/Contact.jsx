import {
  MdOutlineEmail,
  MdOutlineLocalPhone,
  MdOutlineSocialDistance,
  MdOutlineLocationOn,
} from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <section className="contactpage w-[100%] ">
        <div className=" bg-black bg-opacity-[0.7]">
          <div className=" py-[5em]  bg-black  w-[100%] bg-opacity-[0.5] flex items-center justify-center">
            <section className="w-[90%]">
              <div>
                <h2 className="text-center text-white text-2xl py-10 md:mt-[2em]  font-bold">
                  Get In Touch
                </h2>
              </div>
              <section className=" w-[100%] flex md:flex-row flex-col items-center  justify-around">
                <div className="">
                  <div className="flex flex-col items-center">
                    <div className="w-[2em] h-[2em] rounded-full bg-white flex items-center justify-center">
                      <MdOutlineEmail className="text-gray-500" />
                    </div>
                    <h4 className="text-white font-bold">Email</h4>
                    <p className="text-white">Official Emails</p>
                    <p className="text-white">abigailnwadike@gmail.com</p>
                    <p className="text-white">abigailnwadike@gmail.com</p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <div className="w-[2em] h-[2em] rounded-full bg-white flex items-center justify-center">
                      <MdOutlineLocalPhone className="text-gray-500" />
                    </div>
                    <h4 className="text-white  font-bold">Phone</h4>
                    <p className="text-white">Management Desk</p>
                    <p className="text-white">08059941818</p>
                    <p className="text-white">08142920154</p>
                    <p className="text-white">Managers No</p>
                    <p className="text-white">08059941818</p>
                    <p className="text-white">08142920154</p>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <div className="w-[2em] h-[2em] rounded-full bg-white flex items-center justify-center">
                      <MdOutlineSocialDistance className="text-gray-500" />
                    </div>
                    <h4 className="text-white">Social Media</h4>
                    <div>
                      <i></i>
                      <p className="text-white">FastHands Inc</p>
                    </div>
                    <div>
                      <i></i>
                      <p className="text-white">FastHands Inc</p>
                    </div>
                    <div>
                      <i></i>
                      <p className="text-white">FastHands Inc</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <div className="w-[2em] h-[2em] rounded-full bg-white flex items-center justify-center">
                      <MdOutlineLocationOn className="text-gray-500" />
                    </div>
                    <h4 className="text-white  font-bold">Location</h4>
                    <p className="text-white">No 17 LearnFactory Brass</p>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </section>
      <section className=" w-[100%] bg-white flex items-center justify-center">
        <section className="w-[100%] md:w-[80%] lg:w-[60%] flex flex-col items-center justify-center">
          <div className="py-10">
            <h2 className="text-center text-2xl text-pink900 font-bold">
              Send us a message
            </h2>
            <p className="text-center text-black py-1">
              Have a question, suggestion or just want to say hello? We’d love
              to hear from you
            </p>
          </div>
          <form
            action=""
            className="bg-gray-200 flex flex-col items-center justify-around h-[80vh] lg:h-[90vh] w-[90%] rounded-xl"
          >
            <div className="bg-gray-200 flex flex-col items-center justify-around h-[75vh] lg:h-[75vh] w-[100%] rounded-xl">
              <input
                type="name"
                placeholder="Full Name"
                className="pl-10 w-[80%] h-[6vh] rounded-md bg-white outline-none"
              />
              <div className="w-[80%] flex items-center justify-between">
                <input
                  type="email"
                  placeholder="Email"
                  className="pl-10 w-[45%] h-[6vh] rounded-md bg-white outline-none"
                />
                <input
                  type="phone-number"
                  placeholder="Phone"
                  className="pl-10 w-[45%] h-[6vh] rounded-md bg-white outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="pl-10 w-[80%] h-[6vh] rounded-md bg-white outline-none"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message......"
                className="pl-10 w-[80%] h-[25vh] rounded-md bg-white outline-none pt-4"
              ></textarea>
              <button className="text-white bg-skyBlue900 rounded-md font-md w-[34%] lg:w-[17%] h-[8%]  relative right-[5em] md:right-[7.9em] lg:right-[14.4em]">
                Send Message
              </button>
            </div>
          </form>
        </section>
      </section>
      <section className="bg-white py-16">
        <div>
          <div className="text-2xl text-pink900 text-center">
            <h2 className=" text-pink900 font-bold">
              Follow us on social media
            </h2>
          </div>
          <div className="flex justify-around md:justify-center items-center ">
            <div className="lg:w-[10%] md:w-[20%] w-[50%] flex justify-between  items-center py-4">
              <div className="bg-skyBlue900 py-2 px-2 rounded-full">
                <CiFacebook className="text-white" />
              </div>
              <div className="bg-skyBlue900 py-2 px-2 rounded-full">
                <FaInstagram className="text-white" />
              </div>
              <div className="bg-skyBlue900 py-2 px-2 rounded-full">
                <FaXTwitter className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <section className="w-[100%] flex justify-center items-center">
          <div className="w-[60%] py-24 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.0387933036122!2d7.352199174124972!3d5.097430338092376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10429bd39c2683db%3A0xb8a19dc41b834ca2!2sAba-Owerri%20Rd%2C%20Aba%2C%20Abia!5e0!3m2!1sen!2sng!4v1705585565730!5m2!1sen!2sng"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
              className="w-[800px] h-[400px]"
            ></iframe>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
