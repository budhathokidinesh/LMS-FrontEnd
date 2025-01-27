import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  //use real data
  // const user = {
  //     _id: "123abc"
  // }
  // this is for the pulling real user data
  const { user } = useSelector((state) => state.userInfo);
  const isAuth = user?._id;
  return isAuth ? children : <Navigate to="/login" />;
};
