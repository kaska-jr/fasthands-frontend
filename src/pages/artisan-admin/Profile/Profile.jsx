import React, { useEffect, useState } from "react";
import { Header } from "../../../components";
import { getUserFromLocalStorage } from "../../../lib/helpers";
import { useGetArtisanProfile } from "../../../services/queries";
import { IoMdCloseCircle } from "react-icons/io";
import { useUpdateProfile } from "../../../services/mutation";
import { Loader2 } from "lucide-react";
import InputForm from "./components/InputForm";

const Profile = () => {
  const toString = (value) => {
    if (typeof value === "number") {
      return value.toString();
    }
    return value;
  };

  const { username } = getUserFromLocalStorage();

  const { data } = useGetArtisanProfile();

  const { mutate, isPending } = useUpdateProfile();

  const { location, skills, bio } = data?.data || {};

  const strLocation = toString(location);

  console.log(typeof strLocation, strLocation);

  const locationOptions = [
    {
      id: "1",
      name: "Umuahia",
    },
    {
      id: "2",
      name: "Aba",
    },
  ];

  const skillsOption = [
    {
      id: 1,
      name: "Hair Dresser",
    },
    {
      id: 2,
      name: "Hair Stylist",
    },
  ];

  const [ProfileData, setProfileData] = useState({
    location: location || "",
    skills: skills || [],
    bio: bio || "",
  });

  const handleProfileDataChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    if (name === "skills") {
      if (ProfileData.skills.includes(Number(value))) return;
      setProfileData((prev) => {
        return {
          ...prev,
          skills: [...prev.skills, Number(value)],
        };
      });
      return;
    }
    if (name === "location") {
      value = Number(value);
      setProfileData((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
    setProfileData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (data?.data) {
      const { location, skills, bio } = data.data;
      setProfileData({
        location: location ? toString(location) : "",
        skills: skills || [],
        bio: bio || "",
      });
    }
  }, [data]);

  const getSkill = (skillId) => {
    const skillOption = skillsOption.find((skill) => skill.id === skillId);
    return skillOption?.name;
  };

  const removeSkill = (id) => {
    const filteredSkills = ProfileData.skills.filter((skill) => skill !== id);
    setProfileData((prev) => {
      return {
        ...prev,
        skills: [...filteredSkills],
      };
    });
  };

  const handleSubmit = (e) => {
    console.log(ProfileData);
    e.preventDefault();
    mutate(ProfileData);
  };

  return (
    <div className="bg-white">
      <Header text="Profile" />
      <form
        className="m-10 pb-10 w-[90%] max-w-3xl mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        {/* USERNAME */}
        <InputForm
          label="Username"
          name="username"
          type="text"
          disabled={true}
          value={username || ""}
          onChange={handleProfileDataChange}
        />

        {/* LOCATION */}
        <InputForm
          label="Location"
          type="select"
          name="location"
          value={ProfileData.location ? ProfileData.location.toString() : ""}
          options={locationOptions}
          onChange={handleProfileDataChange}
        />

        <div className="flex items-center gap-2">
          {ProfileData.skills.map((id) => (
            <div
              key={id}
              className="rounded-full bg-[#F5F5F5] px-1 py-1 border border-skyBlue900 w-fit text-sm flex items-center gap-1"
            >
              <p>{getSkill(id)}</p>
              <IoMdCloseCircle
                className=" text-skyBlue900 cursor-pointer"
                onClick={() => removeSkill(id)}
              />
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <InputForm
          label="Skills"
          type="select"
          name="skills"
          options={skillsOption}
          selectedValues={ProfileData.skills}
          onChange={handleProfileDataChange}
        />

        {/* BIO */}
        <InputForm
          label="bio"
          type="textArea"
          name="bio"
          value={ProfileData.bio}
          onChange={handleProfileDataChange}
        />

        <button
          className="bg-skyBlue900 px-3 py-1 lg:px-3 lg:py-1 text-white text-base lg:text-lg font-medium rounded-md flex items-center justify-between gap-2 w-fit"
          disabled={isPending}
        >
          {isPending ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
