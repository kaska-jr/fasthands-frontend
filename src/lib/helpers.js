import { locationOptions, skillsOption } from "./constants";

//Get token from local storage
export const getToken = () => {
  const token = JSON.parse(localStorage.getItem("fast-hands-token"));
  return token;
};

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("fast-hands-user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const getLocationById = (id) => {
  const locationOption = locationOptions.find((location) => location.id === id);
  return locationOption?.name;
};

export const getLocationsByName = (name) => {
  const locationOption = locationOptions.find(
    (location) => location.name === name
  );
  return locationOption?.id;
};

export const getSkillById = (id) => {
  const skillOption = skillsOption.find((skill) => skill.id === id);
  return skillOption?.name;
};

export const getSkillsByName = (name) => {
  const skillOption = skillsOption.find((skill) => skill.name === name);
  return skillOption?.id;
};
