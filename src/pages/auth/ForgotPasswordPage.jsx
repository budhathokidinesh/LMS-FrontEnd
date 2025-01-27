import { Alert, Button, Card, Form } from "react-bootstrap";
import { CustomInput } from "@components/customInput/CustomInput.jsx";
import { useRef, useState } from "react";
import useForm from "../../hooks/useForm";

const initialState = {};
const ForgotPasswordPage = () => {
  const emailRef = useRef("");
  const [showResetForm, setShowResetForm] = useState(false); // State to toggle the div
  const { form, passwordErrors, handleOnChange } = useForm(initialState);
  // this is for submitting the email
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    setShowResetForm(true); // Show the reset form
  };
  //this is for submitting the reset form
  const handleOnPasswordResetSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div
      className="signIn-page d-flex
justify-content-center align-items-center"
    >
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <Card.Title>Forgot Password?🥺🥺🥺🥺 </Card.Title>

          {!showResetForm && (
            <>
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
                  <Button type="submit">Request for OTP</Button>
                </div>
              </Form>
              <div className="text-end my-3">
                Ready to Login? &nbsp;
                <a href="/login">Reset Now.</a>
              </div>
            </>
          )}

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
                  label="Password"
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
