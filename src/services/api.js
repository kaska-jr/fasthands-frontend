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
export const createService = async (data) => {
  return await axiosInstanceWithToken.post("profiles/services", data);
};

// PUT REQUESTS
export const updateProfile = async (data) => {
  return await axiosInstanceWithToken.put("profiles/artisan", data);
};
export const updateService = async (data, id) => {
  return await axiosInstanceWithToken.put(`profiles/services/${id}`, data);
};

export const updateClientProfile = async (data) => {
  return await axiosInstanceWithToken.put("profiles/client", data);
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
export const getArtisanPricing = async () => {
  return await axiosInstanceWithToken.get("/profiles/services");
};
export const getArtisanServiceById = async (id) => {
  return await axiosInstanceWithToken.get(`profiles/services/${id}`);
};
export const searchArtisan = async () => {
  return await axiosInstanceWithToken.get("profiles/artisans/search");
};

export const getClientProfile = async () => {
  return await axiosInstanceWithToken.get("profiles/client");
};

//DELETE REQUESTS
export const deleteService = async (id) => {
  return await axiosInstanceWithToken.delete(`profiles/services/${id}`);
};

//CHAT
export const getChatRooms = async () => {
  return await axiosInstanceWithToken.get("chats/rooms");
};
