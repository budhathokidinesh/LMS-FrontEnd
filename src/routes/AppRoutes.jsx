import { DefaultLayout } from "../components/Layouts/DefaultLayout";
import {
  HomePage,
  DashboardPage,
  SignUpPage,
  SignInPage,
  ForgotPasswordPage,
} from "../pages";
import { Routes, Route } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Routes>
      {/* public pages  */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="forgotpassword" element={<ForgotPasswordPage />} />
      </Route>

      {/* private pages  */}
      <Route path="/user" element={<DashboardPage />} />
    </Routes>
  );
};

export default AppRoutes;
