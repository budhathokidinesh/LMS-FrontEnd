import "./App.css";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify"; //improting react toatify as container
import { AiFillAccountBook } from "react-icons/ai";
function App() {
  toast.success("Hellow world");
  return (
    <>
      <h1>Comming Soon</h1>
      <Button>
        click me <AiFillAccountBook />
      </Button>
      <ToastContainer />
    </>
  );
}

export default App;
