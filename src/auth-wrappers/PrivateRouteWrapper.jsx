import { ReactElement, ReactNode } from "react";
import { useAuthContext } from "../context";
import { Navigate } from "react-router-dom";

const PrivateRouteWrapper = ({ component }) => {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{component}</>;
};

export default PrivateRouteWrapper;
