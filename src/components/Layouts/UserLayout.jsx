import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "./Sidebar";

export const UserLayout = () => {
  return (
    <div>
      {/* navbar  */}
      <Header />

      {/* main body  */}
      <Container fluid>
        <Row>
          <Col md={3} xl={2} className="bg-dark text-white">
            <div className="p-3">
              <div>Welcome!</div>
              <h4>Dinesh Budhathoki</h4>
            </div>
            <hr />
            <Sidebar />
          </Col>
          <Col md={9} xl={10}>
            <main className="main">
              <Outlet />
            </main>
          </Col>
        </Row>
      </Container>

      {/* footer  */}
      <Footer />
    </div>
  );
};
