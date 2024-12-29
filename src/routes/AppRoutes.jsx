import {
  HomePage,
  DashboardPage,
  SignUpPage,
  SignInPage,
  ForgotPasswordPage,
  BookLandingPage,
  Books,
  DefaultLayout,
  UserLayout,
  EditBookPage,
  NewBookPage,
  ReviewsPage,
  UserPage,
  Profile,
  BorrowPage,
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
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
      </Route>

      {/* private pages  */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="books" element={<Books />} />
        <Route path="book-landing" element={<BookLandingPage />} />
        <Route path="edit-book" element={<EditBookPage />} />
        <Route path="new-book" element={<NewBookPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="user-list" element={<UserPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="borrow" element={<BorrowPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
