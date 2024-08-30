import React from "react";
import { Header, InputForm } from "../../components";

const Profile = () => {
  return (
    <div className="bg-white">
      <Header text="Profile" />
      <main className="m-10 w-[90%] max-w-3xl mx-auto flex flex-col gap-4">
        {/* NAME */}
        <InputForm
          label="name"
          type="text"
          name="name"
          placeholder="Obiete Sophia Chinyere"
        />

        {/* USERNAME */}
        <InputForm
          label="Username"
          name="username"
          type="text"
          placeholder="Sophieluv"
        />

        {/* BIO - textArea*/}
        <div className="w-full">
          <label
            htmlFor="bio"
            className="capitalize text-skyBlue900 font-semibold"
          >
            Bio:
          </label>

          <textarea
            name="bio"
            id="bio"
            rows="10"
            className="focus:outline-none focus:bg-[#F5F5F5] bg-[#F5F5F5] h-40 rounded-md p-3 text-black w-full border border-[#F5F5F5] focus:border-skyBlue900"
            placeholder="Neque porro quisquam est qui dolorem ipsum quia dolor"
          ></textarea>
        </div>

        {/* EMAIL */}
        <InputForm
          label="Email"
          type="email"
          name="email"
          placeholder="sophiagregory15193@gmail.com"
        />

        {/* PHONE NO */}
        <InputForm
          label="Phone No"
          name="phoneno"
          type="number"
          placeholder="09033238876"
        />

        {/* LOCATION */}
        <InputForm
          label="Location"
          type="text"
          name="location"
          placeholder="No 10 Calabar Street Opp Abia Poly "
        />

        {/* YEARS OF EXPERIENCE */}
        <InputForm
          label="Years Of Experience"
          type="text"
          name="yearsofexperience"
          placeholder="5 Years"
        />

        {/* PASSWORD */}
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder=".........."
        />
      </main>
    </div>
  );
};

export default Profile;
