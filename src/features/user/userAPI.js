import { apiProcessor } from "../../services/api.js";

// const apiBaseUrl = "http://localhost:8000";
//this is done in the .env file
const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;
const userApiEp = apiBaseUrl + "/api/v1/users";
// call api processor to fetch the user
//GET {{rootURl}}/api/v1/users/profile

export const fetchUserApi = async () => {
  const obj = {
    url: userApiEp + "/profile",
    method: "get",
    showToast: false,
    isPrivateCall: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
