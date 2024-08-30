// This file talks to the backend server
import axios from "axios";

const BASE_URL = "https://fasthands-234x.onrender.com/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const createUser = async (data) => {
  return await axiosInstance.post("accounts/register", data);
};

export const loginUser = async (data) => {
  return await axiosInstance.post("accounts/login", data);
};
