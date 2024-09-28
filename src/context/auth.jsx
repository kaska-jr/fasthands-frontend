import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";
import { QueryCache } from "@tanstack/react-query";

const queryCache = new QueryCache();

const defaultValues = {
  user: undefined,
  setUser: () => undefined,
  isLoggedIn: false,
  setIsLoggedIn: () => undefined,
  login: () => undefined,
  logout: () => undefined,
  setProfile: () => undefined,
};

export const AuthContext = createContext(defaultValues);

export default function AuthContextProvider({ children }) {
  const [userType, setUserType] = useState("artisan");

  const [isLoggedIn, setIsLoggedIn] = usePersistedState({
    key: "fast-hands-loggedIn",
    defaultValue: false,
  });

  const [user, setUser] = usePersistedState({
    key: "fast-hands-user",
    defaultValue: undefined,
  });

  const [token, setToken] = usePersistedState({
    key: "fast-hands-token",
    defaultValue: undefined,
  });

  const [profile, setProfile] = usePersistedState({
    key: "fast-hands-profile",
    defaultValue: undefined,
  });

  const login = (user) => {
    const { token } = user;
    if (token) {
      setToken(token);
      setUser(user);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    queryCache.clear();
    setToken(undefined);
    setUser(undefined);
  };

  const makeDecision = (userType) => {
    setUserType(() => {
      return userType;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        login,
        logout,
        makeDecision,
        userType,
        setProfile,
        profile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
