// All API call related to signup, login and token

import { apiProcessor } from "./api";
const apiBaseUrl = "http://localhost:8000";
const authApiEp = apiBaseUrl + "/api/v1/auth";
export const signUpNewUserApi = async (payload) => {
  const obj = {
    url: authApiEp + "/register",
    method: "post",
    payload,
  };
  const result = await apiProcessor(obj);
  console.log(result);
};
