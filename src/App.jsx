import "./App.css";
// import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify"; //improting react toatify as container
import AppRoutes from "./routes/AppRoutes";
// import { AiFillAccountBook } from "react-icons/ai";
function App() {
  toast.success("Hellow world");
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
