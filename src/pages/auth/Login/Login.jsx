import React, { useState } from "react";
import Logo from "../../../assets/images/Logo.png";
import {
  FaInstagram,
  FaRegEye,
  FaRegEyeSlash,
  FaTwitter,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { MdOutlineFacebook } from "react-icons/md";
import { useLoginUser } from "../../../services/mutation";
import { Loader2 } from "lucide-react";

function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  const { mutate: loginUser, isPending: isLoading } = useLoginUser();

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(user);
  };

  return (
    <section className="relative">
      <div className="form min-h-[100vh] flex flex-col md:flex-row items-center justify-center">
        <div className="h-full flex items-center justify-center py-10 md:py-20 w-full">
          <div className="flex items-center justify-center w-full">
            <div className="w-[90%] md:w-[450px]  flex flex-col bg-white p-4 rounded-md flex-shrink-0 py-4">
              <div className="flex flex-col mb-6 w-fit">
                <NavLink to="/">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="h-10 md:h-20 w-auto mr-4 flex-shrink-0"
                  />
                </NavLink>

                <h1 className="text-2xl text-black mb-6 ml-1">Login</h1>
              </div>

              <form
                className=" flex flex-col justify-around items-center text-black w-full gap-5"
                onSubmit={handleLogin}
              >
                <div className="w-[100%] flex flex-col">
                  <label htmlFor="username" className="text-lg">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                    className="border-b border-black text-lg outline-none bg-white dark:bg-bg-white focus-within:bg-white focus-visible:bg-white py-2"
                  />
                </div>

                <div className="w-[100%] flex flex-col">
                  <label htmlFor="password" className="text-lg">
                    Password:
                  </label>

                  <div className="relative w-full">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      id="password"
                      autocomplete="off"
                      name="password"
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      value={user.password}
                      className="border-b border-black outline-none bg-transparent text-lg w-full py-2"
                    />
                    {isPasswordVisible ? (
                      <FaRegEyeSlash
                        className="absolute top-1/2 right-2 -translate-y-1/2 text-black cursor-pointer text-xl"
                        onClick={() => setIsPasswordVisible(false)}
                      />
                    ) : (
                      <FaRegEye
                        className="absolute top-1/2 right-2 -translate-y-1/2 text-black cursor-pointer text-xl"
                        onClick={() => setIsPasswordVisible(true)}
                      />
                    )}
                  </div>

                  <span className="text-pink900 ">Forget password</span>
                </div>

                <button
                  className=" bg-pink900 py-2 text-lg rounded-md w-full text-white flex items-center gap-2 justify-center"
                  type="submit"
                >
                  {isLoading && (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  )}
                  Login
                </button>
                <span className="mb-">
                  Don't have an Account,{" "}
                  <NavLink to="/decision" className={"text-pink900"}>
                    Register here
                  </NavLink>
                </span>
                <div className="flex gap-3">
                  <FcGoogle fontSize={25} />
                  <FaTwitter fontSize={25} className="text-skyBlue900" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="self-start px-4 block md:absolute md:left-[3%] md:bottom-[3%] text-white">
          <p className="font-extrabold">Welcome back!</p>
          <div>
            <p>Login to get access to your customers.</p>
            <p>Unlock endless services, One platform.</p>
          </div>
          <div className=" flex justify-between w-[20%]">
            <MdOutlineFacebook className="text-[blue] text-2xl" />
            <FaInstagram className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
