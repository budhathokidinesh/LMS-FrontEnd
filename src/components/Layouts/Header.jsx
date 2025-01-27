import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../assets/2.png";
import { IoMdHome } from "react-icons/io";
import { RiLoginBoxFill } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";
import { AiFillDashboard } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logoutApi } from "../../services/authApi.js";
import { setUser } from "../../features/user/userSlice.js";

export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const handleOnLogout = () => {
    logoutApi();
    // logout from frontend
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(setUser({}));

    //call api to logout from frontend
  };
  return (
    <Navbar expand="md" className="bg-dark" variant="dark">
      <Container>
        <Link to="/">
          <img src={logo} width="100px" height="50px" alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <IoMdHome />
              Home
            </Link>
            {user?._id ? (
              <>
                <Link className="nav-link" to="/user">
                  <AiFillDashboard />
                  Dashboard
                </Link>
                <Link className="nav-link" to="/" onClick={handleOnLogout}>
                  <RiLoginBoxFill />
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/signup">
                  <GiArchiveRegister />
                  SignUp
                </Link>
                <Link className="nav-link" to="/login">
                  <RiLoginBoxFill />
                  Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
