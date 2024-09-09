import Logo from "./../assets/images/Logo.png";
import Facebook from "./../assets/facebook.png";
import Instagram from "./../assets/instagram.png";
import Pajamas from "./../assets/pajamas.png";

const Footer = () => {
  return (
    <footer className="foot w-[100%]">
      <div className="w-[100%] bg-black bg-opacity-[0.8] lg:h-96 py-10 md:p-10 flex flex-col justify-center gap-10">
        <div className="w-[95%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="">
              <div>
                <img src={Logo} width={100} alt="logo" />
              </div>
              <div className="max-w-sm">
                <p className="text-[14px] text-white">
                  Fasthands is a response to the gradual integration of all
                  facets of the society into the digital space.{" "}
                </p>
                <p className="text-[14px] text-white">
                  it is meant to give all Artisans and local producers the same
                  platform and advantage of reach as the ICT sector.
                </p>
              </div>
            </div>

            <div className=" flex flex-col justify-center">
              <h4 className="text-3xl  text-white">Info</h4>
              <p className="text-white">About Us</p>
              <p className="text-white">Contact Us</p>
              <p className="text-white">Feedbacks</p>
            </div>

            <div className=" flex flex-col gap-3">
              <h4 className="text-white py-1">
                Get updated with our services, add your email
              </h4>
              <div className="relative">
                <form action="" className="">
                  <input
                    type="text"
                    className="py-2 px-10 bg-white rounded-full"
                    placeholder="Email"
                  />
                  <span className="bg-skyBlue900 py-1 px-4 text-white rounded-full absolute -ml-24 cursor-pointer  mt-2 text-[12px]">
                    Subscribe
                  </span>
                  <div className="flex items-center gap-2 py-2">
                    <input type="checkbox" name="" id="" className="h-4 w-4" />
                    <span className="text-white py-1 text-[12px]">
                      I agree to my email being stored to receive the update
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] flex-col flex justify-center items-center ">
          <div className="flex justify-between items-center gap-4">
            <img src={Facebook} alt="facebook" width={20} />
            <img src={Instagram} alt="" width={20} />
            <img src={Pajamas} alt="" width={20} />
          </div>
          <div>
            <p className="text-center py-1 text-white">Stay Conncted</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
