//validate:
// -at leaset 6 characters
//-at least 1 Uppercase
//-at least 1 Lowercase
// 1 digit
// -special character !@#$%^&*()_{}<>|
// -password do no tmatch
export const validator = (password = "", confirmPassword = "") => {
  const error = [];
  password.length < 6 && error.push("At leaset 6 characters required");

  !/[A-Z]/.test(password) &&
    error.push("Password must contain at least one UPPERCASE LETTER");

  !/[a-z]/.test(password) &&
    error.push("Password must contain at least one lowercase letter");
  !/[!@#$%^&*()_{}<>|]/.test(password) &&
    error.push("Password must contain at least one special character");
  !/[0-9]/.test(password) &&
    error.push("Password must contain at least one digit");
  password !== confirmPassword && error.push("Password do not match");
  return error;
};
