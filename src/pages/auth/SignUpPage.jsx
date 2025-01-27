import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CustomInput } from "@components/customInput/CustomInput";
import { signUpInputs } from "../../assets/customInputs/userSIgnUpInput.js";
import useForm from "../../hooks/useForm.js";
import { signUpNewUserApi } from "@services/authApi.js";

const initialState = {};
const SignUpPage = () => {
  //handle on change imported from the useform hook
  const { form, setForm, handleOnChange, passwordErrors } =
    useForm(initialState);

  //handle of submit
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password)
      return alert("password do not match");
    const result = await signUpNewUserApi(rest);

    // toast[status](message);
    // status === "success" && setForm(initialState);
  };
  console.log(passwordErrors);
  return (
    <div className="d-flex justify-content-center">
      <Form
        onSubmit={handleOnSubmit}
        style={{ width: "450px" }}
        className="card p-3 mt-5 shadow-lg"
      >
        <h1>Join Dinesh Library</h1>
        <hr />
        {signUpInputs.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <div className="py-3">
          <ul className="text-danger">
            {passwordErrors.length > 0 &&
              passwordErrors.map((msg) => <li key={msg}>{msg}</li>)}
          </ul>
        </div>

        <Button
          variant="primary"
          type="submit"
          disabled={passwordErrors.length}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUpPage;
