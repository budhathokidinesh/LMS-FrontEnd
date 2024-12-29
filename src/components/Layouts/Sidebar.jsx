import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

export const Sidebar = () => {
  return (
    <Stack gap={1}>
      <div className="p-2">
        <Link className="nav-link" to="/user">
          <MdOutlineCheckBoxOutlineBlank /> Dashboard
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/books">
          <MdOutlineCheckBoxOutlineBlank /> Books
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/reviews">
          <MdOutlineCheckBoxOutlineBlank /> Reviews
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/user-list">
          <MdOutlineCheckBoxOutlineBlank /> All Users
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/borrow">
          <MdOutlineCheckBoxOutlineBlank /> Borrow
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/profile">
          <MdOutlineCheckBoxOutlineBlank /> Profile
        </Link>
      </div>
    </Stack>
  );
};
