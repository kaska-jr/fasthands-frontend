import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createUser,
  loginUser,
  toggleArtisanAvailability,
  updateProfile,
} from "./api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../context";

//Create User Mutation Function
export function useCreateUser() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data) => createUser(data),
    onSuccess: () => {
      toast.success("Account created successfully");
      setTimeout(() => navigate("/login"), 5000);
    },
    onError: (error) => {
      if (error.response.status === 400) {
        const message = error.response.data;
        const errorKey = Object.keys(message)[0];
        const errorText = message[errorKey][0];
        toast.error(errorText);
      } else {
        toast.error(
          "Network Error: Please your internet connection and try again"
        );
      }
    },
  });
}

//Login Mutation Function
export function useLoginUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { login } = useAuthContext();
  return useMutation({
    mutationFn: (data) => loginUser(data),
    onSuccess: (data, variables) => {
      console.log(data, variables);
      const { username } = variables;
      toast.success("Login successful");
      console.log("login success");
      const { token, user_type } = data.data;
      login({ token, username, user_type });
      const navigatePath = user_type === "artisan" ? "/artisan" : "/client";
      setTimeout(() => navigate(navigatePath), 3000);
    },

    onError: (error) => {
      const message = error?.response?.data || {};
      const errorKey = Object.keys(message)[0];

      if (errorKey) {
        const errorText = Array.isArray(message[errorKey])
          ? message[errorKey][0]
          : message[errorKey];
        toast.error(`${errorKey}: ${errorText}`);
      } else {
        toast.error("An unknown error occurred");
      }
    },
  });
}

//Toggle Artisan Availability
export function useToggleArtisanAvailability() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => toggleArtisanAvailability(data),
    onSuccess: () => {
      toast.success("Availability updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["artisan-availability-status"],
      });
    },
    onError: (error) => {
      console.log(error);
      const message = error.response.data;
      const errorKey = Object.keys(message)[0];

      if (error.response.status === 400) {
        const message = error.response.data;
        const errorKey = Object.keys(message)[0];
        const errorText = message[errorKey][0];
        toast.error(errorText);
      }

      if (typeof message[errorKey] === "string") {
        const errorText = message[errorKey];
        toast.error(errorKey + ": " + errorText);
      }
    },
  });
}

//UpdateProfile
export function useUpdateProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateProfile(data),
    onSuccess: () => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["artisan-profile"],
      });
    },
    onError: (error) => {
      console.log(error);
      const message = error.response.data;
      const errorKey = Object.keys(message)[0];
      const errorText = message[errorKey];
      toast.error(errorKey + ": " + errorText);
    },
  });
}
