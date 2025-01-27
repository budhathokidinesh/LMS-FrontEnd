import { apiProcessor } from "../../services/api.js";

const apiBaseUrl = "http://localhost:8000";
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
