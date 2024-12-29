import { HomePage, DashboardPage } from "../pages";
import { Routes, Route } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Routes>
      {/* public pages  */}
      <Route path="/" element={<HomePage />} />

      {/* private pages  */}
      <Route path="/user" element={<DashboardPage />} />
    </Routes>
  );
};

export default AppRoutes;
