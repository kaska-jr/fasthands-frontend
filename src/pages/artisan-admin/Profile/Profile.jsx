import React, { useEffect, useState } from "react";
import { Header } from "../../../components";
import { getUserFromLocalStorage } from "../../../lib/helpers";
import { useGetArtisanProfile } from "../../../services/queries";
import { IoMdCloseCircle } from "react-icons/io";
import { useUpdateProfile } from "../../../services/mutation";
import { Loader2 } from "lucide-react";
import InputForm from "./components/InputForm";

const Profile = () => {
  const [skill, setSkill] = useState("");

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  const { username } = getUserFromLocalStorage();

  const { data } = useGetArtisanProfile();

  const { mutate, isPending } = useUpdateProfile();

  const { location, skills, bio } = data?.data || {};

  const locationOptions = [
    {
      name: "Umuahia",
    },
    {
      name: "Aba",
    },
    {
      name: "Lagos",
    },
    {
      name: "Abuja",
    },
  ];

  const [ProfileData, setProfileData] = useState({
    location: {
      name: location?.name || "",
    },
    skills: skills || [],
    bio: bio || "",
  });

  const handleProfileDataChange = (e) => {
    const { name, value } = e.target;

    if (name === "location") {
      setProfileData((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          name: value,
        },
      }));
    } else {
      setProfileData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (skill && !ProfileData.skills.includes(skill)) {
        setProfileData((prev) => ({
          ...prev,
          skills: [...prev.skills, skill],
        }));
        setSkill(""); // Clear the input field after adding the skill
      }
    }
  };

  useEffect(() => {
    if (data?.data) {
      const { location, skills, bio } = data.data;
      setProfileData({
        location: {
          name: location?.name || "",
        },
        skills: skills || [],
        bio: bio || "",
      });
    }
  }, [data]);

  const removeSkill = (id) => {
    const filteredSkills = ProfileData.skills.filter(
      (_, index) => index !== id
    );
    setProfileData((prev) => ({
      ...prev,
      skills: filteredSkills,
    }));
  };

  const handleSubmit = (e) => {
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
        />

        {/* LOCATION */}
        <InputForm
          label="Location"
          type="select"
          name="location"
          value={ProfileData.location.name || ""}
          options={locationOptions}
          onChange={handleProfileDataChange}
        />

        {/* SKILLS LIST */}
        <div className="flex items-center gap-2">
          {ProfileData?.skills?.map((skill, index) => (
            <div
              key={index}
              className="rounded-full bg-[#F5F5F5] px-1 py-1 border border-skyBlue900 w-fit text-sm flex items-center gap-1"
            >
              <p className="capitalize px-2">{skill}</p>
              <IoMdCloseCircle
                className="text-skyBlue900 cursor-pointer"
                onClick={() => removeSkill(index)}
              />
            </div>
          ))}
        </div>

        {/* SKILLS INPUT */}
        <InputForm
          label="Skills"
          type="text"
          name="skills"
          value={skill}
          onChange={handleSkillChange}
          onKeyDown={handleEnterKeyPress}
          placeholder={"Type skill and press Enter"}
        />

        {/* BIO */}
        <InputForm
          label="Bio"
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
