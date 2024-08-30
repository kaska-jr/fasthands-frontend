import { createContext, useState } from "react";
import usePersistedState from "../hooks/usePersistedState";

const defaultValues = {
  user: undefined,
  setUser: () => undefined,
  isLoggedIn: false,
  setIsLoggedIn: () => undefined,
  login: () => undefined,
  logout: () => undefined,
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

  const login = (token) => {
    if (token) {
      setToken(token);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
