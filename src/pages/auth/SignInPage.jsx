import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { Card, Form } from "react-bootstrap";
import { CustomInput } from "@components/customInput/CustomInput.jsx";
import useForm from "../../hooks/useForm.js";
import { signInUserApi } from "@services/authApi.js";
import {
  autoLoginUser,
  fetchUserAction,
} from "../../features/user/userAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const initialState = {};
const SignInPage = () => {
  const { form, handleOnChange } = useForm(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showLoaderRef = useRef(true);
  //to redirect in correct page while refreshing or open in new tab
  const location = useLocation();
  // console.log(location);
  const path = location?.state?.from ?? "/user";

  // this is for pulling user information
  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    user?._id ? navigate(path) : dispatch(autoLoginUser());
    //this is for showing loader while refresing the page
    if (
      sessionStorage.getItem("accessJWT") ||
      localStorage.getItem("refreshJWT")
    ) {
      setTimeout(() => {
        showLoaderRef.current = false;
      }, 2000);
    } else {
      showLoaderRef.current = false;
    }
  }, [user?._id, navigate, dispatch]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    if (form.email && form.password) {
      const { payload } = await signInUserApi(form);

      if (payload?.accessJWT) {
        sessionStorage.setItem("accessJWT", payload.accessJWT);
        localStorage.setItem("refreshJWT", payload.refreshJWT);

        //call api to get the user profile(this is done from userAction file)
        dispatch(fetchUserAction());
      }

      // get user and redirecting to dashboard
    } else {
      alert("Both input must be filled");
    }
  };

  if (showLoaderRef.current) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div
      className="signIn-page d-flex
    justify-content-center align-items-center"
    >
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Welcome Back to the Library</Card.Title>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              required
              placeholder="name@email.com"
              onChange={handleOnChange}
            />
            <CustomInput
              label="Password"
              name="password"
              type="password"
              placeholder="******"
              onChange={handleOnChange}
            />
            <div className="d-grid">
              <Button type="submit">Sign In</Button>
            </div>
          </Form>
          <div className="text-end my-3">
            Forgot Password? &nbsp;
            <a href="/forgot-password">Reset Now.</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignInPage;
