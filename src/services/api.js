// This file talks to the backend server
import axios from "axios";
import { getToken } from "../lib/helpers";

const BASE_URL = "https://fasthands-234x.onrender.com/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

console.log(getToken());

const axiosInstanceWithToken = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Token ${getToken()}`,
  },
});

// POST REQUESTS
export const createUser = async (data) => {
  return await axiosInstance.post("accounts/register", data);
};

export const loginUser = async (data) => {
  return await axiosInstance.post("accounts/login", data);
};

export const toggleArtisanAvailability = async (data) => {
  return await axiosInstanceWithToken.post(
    "profiles/artisan/toggle-availability",
    data
  );
};

export const updateProfile = async (data) => {
  return await axiosInstanceWithToken.put("profiles/artisan", data);
};

// GET REQUESTS
export const getArtisanProfile = async () => {
  return await axiosInstanceWithToken.get("profiles/artisan");
};

export const getArtisanAvailability = async () => {
  return await axiosInstanceWithToken.get(
    "profiles/artisan/toggle-availability"
  );
};
