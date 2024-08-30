import { About, Banner, Booking, Contact, Services } from "../components";
import { useAuthContext } from "../context";

const Home = () => {
  const { isLoggedIn } = useAuthContext();
  console.log(isLoggedIn);

  return (
    <>
      <Banner />
      <Services />
      <About />
      <Booking />
      <Contact />
      {/* 
      
       */}
    </>
  );
};

export default Home;
