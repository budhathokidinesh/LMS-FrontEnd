import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "./Sidebar";
import { AuthRoute } from "../Auth/AuthRoute";

export const UserLayout = () => {
  return (
    <AuthRoute>
      {/* navbar  */}
      <Header />

      {/* main body  */}

      <div className="d-flex">
        <div
          className="bg-dark text-white p-2"
          style={{
            width: "200px",
          }}
        >
          <div className="p-3">
            <div>Welcome!</div>
            <h4>Dinesh Budhathoki</h4>
          </div>
          <hr />
          <Sidebar />
        </div>

        <main className="user-main">
          <Outlet />
        </main>
      </div>

      {/* footer  */}
      <Footer />
    </AuthRoute>
  );
};
