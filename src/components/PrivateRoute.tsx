import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
