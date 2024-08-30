import { useMutation } from "@tanstack/react-query";
import { createUser, loginUser } from "./api";
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
  const navigate = useNavigate();
  const { login } = useAuthContext();
  return useMutation({
    mutationFn: (data) => loginUser(data),
    onSuccess: (data) => {
      toast.success("Login successful");
      const { token, user_type } = data.data;
      console.log(token, user_type);
      login(token);

      if (user_type === "artisan") {
        navigate("/artisan");
      }

      if (user_type === "client") {
        navigate("/client");
      }
    },
    onError: (error) => {
      const message = error.response.data;
      const errorKey = Object.keys(message)[0];
      if (typeof message[errorKey] === "string") {
        const errorText = message[errorKey];
        toast.error(errorKey + ": " + errorText);
      } else {
        const errorText = message[errorKey][0];
        toast.error(errorKey + ": " + errorText);
      }
    },
  });
}
