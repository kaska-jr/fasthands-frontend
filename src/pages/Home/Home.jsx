import { useAuthContext } from "../../context";
import Banner from "./components/Banner";

const Home = () => {
  const { isLoggedIn } = useAuthContext();
  console.log(isLoggedIn);

  return (
    <>
      <Banner />
    </>
  );
};

export default Home;
