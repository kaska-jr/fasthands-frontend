import Testing from "../../assets/testing.png";
import Comb from "../../assets/comb.png";
// import { Booking, Services as HomeService } from "../../components";

const Services = () => {
  return (
    <div>
      <section className="py-[10em] bg-white flex lg:flex-row flex-col justify-center items-center">
        <h1 className="md:text-[4rem] text-3xl font-bold text-pink900 lg:hidden block lg:mt-0 mt-10">
          Our services
        </h1>
        <section className="w-[80%]">
          <div className="flex justify-around items-center">
            <h1 className="text-[4rem] font-bold text-pink900 hidden lg:block">
              Our services
            </h1>
            <div className="w-[100%] md:w-[50%] flex justify-around lg:mt-0 mt-10">
              <img src={Testing} alt="services1" width={300} className="" />
            </div>
            <img
              src={Comb}
              alt="services2"
              lg:width={300}
              md:width={100}
              width={125}
              className="mt-[12em]"
            />
          </div>
        </section>
      </section>
      {/* <HomeService />
      <Booking /> */}
    </div>
  );
};

export default Services;
