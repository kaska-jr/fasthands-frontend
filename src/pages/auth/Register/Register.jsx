import React, { useEffect, useState } from "react";
import Logo from "../../../assets/images/Logo.png";
import { NavLink } from "react-router-dom";
import { useCreateUser } from "../../../services/mutation";
import { Loader2 } from "lucide-react";
import { useAuthContext } from "../../../context";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Register() {
  const { makeDecision, userType } = useAuthContext();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    user_type: userType,
  });

  useEffect(() => {
    setUser((user) => ({ ...user, user_type: userType }));
  }, [userType]);

  const { mutate: createUser, isPending: isLoading } = useCreateUser();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(user);
    createUser(user);
  };

  return (
    <>
      <div className="form min-h-[700px] h-screen">
        <div className="h-[100%] flex justify-end md:justify-center lg:justify-end ">
          <div className="w-full md:w-[60%] lg:w-1/2 h-[100%] flex items-center justify-center">
            <div className="w-[100%] h-[100%] md:h-fit lg:h-screen flex flex-col p-10 bg-skyBlue900 bg-opacity-[0.4]">
              <div className="flex flex-col mb-6">
                <NavLink to="/" className={"w-fit"}>
                  <img
                    src={Logo}
                    alt="Logo"
                    className="h-20 md:h-12 w-auto mr-4 flex-shrink-0"
                  />
                </NavLink>
                <p className="text-3xl lg:mr-[9.2em] md:mr-[5em] md:w-[50%] w-[100%] text-white">
                  Sign Up
                </p>
              </div>
              <form
                className="w-full h-[90%] flex flex-col gap-3 md:gap-2 justify-around items-center text-white"
                onSubmit={handleRegister}
                autocomplete="off"
              >
                <div className="w-[100%] flex flex-col">
                  <label htmlFor="name">
                    Username: <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    autocomplete="off"
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                    value={user.username}
                    className="border-b border-white outline-none bg-transparent autofill:!bg-transparent py-2"
                  />
                </div>

                <div className="w-[100%] flex flex-col">
                  <label htmlFor="email">
                    Email:<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    autocomplete="off"
                    name="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    className="border-b border-white outline-none bg-transparent autofill:bg-transparent py-2"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div className="w-[100%] flex flex-col">
                  <label htmlFor="user_type" className="">
                    How are you joining us?{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <select
                    name="user_type"
                    id="user_type"
                    onChange={(e) => makeDecision(e.target.value)}
                    value={user.user_type}
                    className="outline-none w-fit bg-transparent border border-white text-white py-1 px-2 mt-1"
                  >
                    <option className="text-black" value={"client"}>
                      Client
                    </option>
                    <option className="text-black" value={"artisan"}>
                      Artisan
                    </option>
                  </select>
                </div>

                <div className="w-[100%] flex flex-col">
                  <label htmlFor="password">
                    Password:<span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      id="password"
                      autocomplete="off"
                      name="password"
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                      value={user.password}
                      className="border-b border-white outline-none bg-transparent w-full autofill:bg-transparent py-2"
                    />
                    {isPasswordVisible ? (
                      <FaRegEyeSlash
                        className="absolute top-1/2 right-2 -translate-y-1/2 text-skyBlue900 cursor-pointer text-xl"
                        onClick={() => setIsPasswordVisible(false)}
                      />
                    ) : (
                      <FaRegEye
                        className="absolute top-1/2 right-2 -translate-y-1/2 text-skyBlue900 cursor-pointer text-xl"
                        onClick={() => setIsPasswordVisible(true)}
                      />
                    )}
                  </div>
                </div>

                <div className=" max-w-md mx-auto flex mt-5 flex-col gap-2 w-full">
                  <button
                    type="submit"
                    className="w-full border-2 border-skyBlue900 py-1 rounded-md flex items-center justify-center hover:bg-skyBlue900 "
                  >
                    {isLoading && (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    )}
                    Register
                  </button>
                  <p>
                    Already have an account?{" "}
                    <NavLink to="/login" className="text-pink900 font-semibold">
                      login
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
