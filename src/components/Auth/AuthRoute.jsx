import React from "react";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  //use real data
  // const user = {
  //     _id: "123abc"
  // }
  const isAuth = false;
  return isAuth ? children : <Navigate to="/login" />;
};
