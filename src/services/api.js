// This file talks to the backend server
import axios from "axios";
import { getToken } from "../lib/helpers";

const BASE_URL = "https://fasthands-234x.onrender.com/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const axiosInstanceWithToken = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the bearer token in the header
axiosInstanceWithToken.interceptors.request.use(
  (config) => {
    // Retrieve the token gotten back from the login stored in the local Storage
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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

export const searchArtisan = async (location, skills) => {
  const fullUrl = `profiles/artisan/search?location=${location}&skills=${skills}`;
  return await axiosInstance.get(fullUrl);
};
