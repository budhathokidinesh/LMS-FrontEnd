import { setUser } from "./userSlice.js";
import { fetchUserApi } from "./userAPI.js";
import { fetchNewAccessJWTApi } from "@services/authApi.js";

export const fetchUserAction = () => async (dispatch) => {
  // call api
  //   const userInfo = await fetchUserApi();
  const { status, payload } = await fetchUserApi();

  //recieve user

  //dispatch user to the redux
  status === "success" && payload?._id && dispatch(setUser(payload));
};

//this is for autologin feature
export const autoLoginUser = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");

  if (accessJWT) {
    dispatch(fetchUserAction());
    return;
  }
  const refreshJWT = localStorage.getItem("refreshJWT");
  if (refreshJWT) {
    //fetch accessJWT and set in the sessionStorage
    const { payload } = await fetchNewAccessJWTApi();

    if (payload) {
      sessionStorage.setItem("accessJWT", payload);
      dispatch(fetchUserAction());
    }
  }
};
