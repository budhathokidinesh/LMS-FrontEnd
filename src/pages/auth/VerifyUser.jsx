import { useEffect, useRef, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { activateNewUserApi } from "@services/authApi";

const VerifyUser = () => {
  const [isPending, setIsPending] = useState(true);
  const [searchParams] = useSearchParams();
  const [response, setResponse] = useState({});
  const shouldFetchRef = useRef(true);
  const navigate = useNavigate();

  const sessionId = searchParams.get("sessionId");
  const t = searchParams.get("t");

  useEffect(() => {
    // call api
    // const callUserActivateApi = async () => {
    //   const result = await activateNewUserApi({ sessionId, t });
    // };
    // callUserActivateApi();
    if (sessionId && t && shouldFetchRef.current) {
      (async () => {
        const result = await activateNewUserApi({ sessionId, t });
        setResponse(result);
        setIsPending(false);
      })();
      shouldFetchRef.current = false;
    }
    if (response.status === "success") {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [sessionId, t, response.status, navigate]);
  console.log(response);
  return (
    <div className="py-5 p-5">
      {isPending && (
        <div
          className="m-auto"
          style={{
            width: "450px",
          }}
        >
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
          </div>

          <div>
            Please don not go back or refresh the brower. Please wait...
          </div>
        </div>
      )}
      {response?.message && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message}
        </Alert>
      )}
    </div>
  );
};

export default VerifyUser;
