import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth2 } from "./ResAuth";

const PrivateRoute2 = () => {

  const user = useAuth2();

  // console.log(user)

  if (!user.token) return <Navigate to="/restaurant-login" />;
  return <Outlet />;
};

export default PrivateRoute2;