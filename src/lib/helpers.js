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

export const formatPriceInNaira = (price) => {
  const nairaAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(price);
  return nairaAmount;
};

export function convertToNormalTime(isoString) {
  const date = new Date(isoString);
  // Extract date and time components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // HH:MM:SS
  const time = `${hours}:${minutes}:${seconds}`;
  console.log(time);
  // Format date and time as "YYYY-MM-DD"
  return {
    date: `${day}-${month}-${year}`,
    time: time,
  };
}
