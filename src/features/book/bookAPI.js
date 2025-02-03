import { apiProcessor } from "@services/api";

const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;
const bookApiEp = apiBaseUrl + "/api/v1/books";

export const postNewBookApi = async (payload) => {
  const obj = {
    url: bookApiEp,
    method: "post",
    showToast: true,
    isPrivateCall: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};
