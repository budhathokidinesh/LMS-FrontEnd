import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import { CustomInput } from "@components/customInput/CustomInput.jsx";
import { useEffect, useRef, useState } from "react";
import useForm from "../../hooks/useForm";
import {
  requestPassResetOTPApi,
  resetPassApi,
} from "../../services/authApi.js";
import { useNavigate } from "react-router-dom";

const initialState = {};
const timeToRequestOTPAgain = 10;

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const [showResetForm, setShowResetForm] = useState(false);
  const [isOtpPending, setIsOtpPending] = useState(false);
  const [isOtpBtnDisabled, setisOtpBtnDisabled] = useState(false);
  const [counter, setCounter] = useState(0);
  // State to toggle the div
  const { form, passwordErrors, handleOnChange } = useForm(initialState);
  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setisOtpBtnDisabled(false);
    }
  }, [counter]);

  // this is for submitting the email
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    setIsOtpPending(true);
    setisOtpBtnDisabled(true);
    //call api
    const response = await requestPassResetOTPApi({ email });
    if (response?.status === "success") {
      setShowResetForm(true);
    }
    setIsOtpPending(false);
    // setisOtpBtnDisabled(false);
    setCounter(timeToRequestOTPAgain);

    // Show the reset form
  };

  //this is for submitting the reset form
  const handleOnPasswordResetSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    const payload = {
      email,
      otp: form.otp,
      password: form.password,
    };
    const response = await resetPassApi(payload);
    if (response?.status === "success") {
      //redirect user to login in 3 sec

      setTimeout(() => navigate("/login"), 3000);
    }
  };

  return (
    <div
      className="signIn-page d-flex
justify-content-center align-items-center"
    >
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>Forgot Password?🥺🥺🥺🥺 </Card.Title>

          <div>
            <p>
              Enter yout Email. You will get OTP and you can reset your
              password. Thanks
            </p>
            <hr />
            <Form onSubmit={handleOnSubmit}>
              <CustomInput
                label="Email"
                name="email"
                type="email"
                required
                placeholder="name@email.com"
                passRef={emailRef}
              />

              <div className="d-grid">
                <Button type="submit" disabled={isOtpBtnDisabled}>
                  {isOtpPending ? (
                    <Spinner variant="border" />
                  ) : counter > 0 ? (
                    `Request OTP in ${counter}`
                  ) : (
                    "Request OTP"
                  )}
                </Button>
              </div>
            </Form>
            <div className="text-end my-3">
              Ready to Login? &nbsp;
              <a href="/login">Reset Now.</a>
            </div>
          </div>

          <hr />
          {/* show this form below once when OTP is requested */}

          {showResetForm && (
            <>
              <Alert variant="success">
                {" "}
                We will send you an OTP to your email, if email is found in our
                system. Please check your junk/spam folder if you don't see
                email in your inbox. Thanks
              </Alert>
              <Form onSubmit={handleOnPasswordResetSubmit}>
                <CustomInput
                  label="OTP"
                  name="otp"
                  type="number"
                  required
                  placeholder="****"
                  onChange={handleOnChange}
                />
                <CustomInput
                  label="New Password"
                  name="password"
                  type="password"
                  required
                  placeholder="******"
                  onChange={handleOnChange}
                />
                <CustomInput
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  required
                  placeholder="******"
                  onChange={handleOnChange}
                />
                <div className="py-3">
                  <ul className="text-danger">
                    {passwordErrors.length > 0 &&
                      passwordErrors.map((msg) => <li key={msg}>{msg}</li>)}
                  </ul>
                </div>

                <div className="d-grid">
                  <Button type="submit" disabled={passwordErrors.length}>
                    Reset Password
                  </Button>
                </div>
              </Form>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
