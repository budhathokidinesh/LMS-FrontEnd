// All API call related to signup, login and token

import { apiProcessor } from "./api";

const apiBaseUrl = "http://localhost:8000";
const authApiEp = apiBaseUrl + "/api/v1/auth";

//this is for the signUp new user
export const signUpNewUserApi = async (payload) => {
  const obj = {
    url: authApiEp + "/register",
    method: "post",
    payload,
    showToast: true,
  };
  return apiProcessor(obj);
};
// this is for the activate new user
export const activateNewUserApi = async (payload) => {
  const obj = {
    url: authApiEp + "/activate-user",
    method: "post",
    payload,
  };
  return apiProcessor(obj);
};
// this is for signin new user
export const signInUserApi = async (payload) => {
  const obj = {
    url: authApiEp + "/login",
    method: "post",
    payload,
    showToast: true,
  };
  return apiProcessor(obj);
};
// this is for request new accessJWT api
export const fetchNewAccessJWTApi = async () => {
  const obj = {
    url: authApiEp + "/renew-jwt",
    method: "get",
    isPrivateCall: true,
    isRefreshJWT: true,
  };
  return apiProcessor(obj);
};

//this is for the logout user
export const logoutApi = async () => {
  const obj = {
    url: authApiEp + "/logout",
    method: "get",
    isPrivateCall: true,
  };
  return apiProcessor(obj);
};
//this is for request password reset otp
export const requestPassResetOTPApi = async (payload) => {
  const obj = {
    url: authApiEp + "/otp",
    method: "post",
    payload,
  };
  return apiProcessor(obj);
};
// reset password
export const resetPassApi = async (payload) => {
  const obj = {
    url: authApiEp + "/reset-password",
    method: "post",
    payload,
    showToast: true,
  };
  return apiProcessor(obj);
};
