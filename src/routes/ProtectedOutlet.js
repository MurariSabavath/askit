import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      navigate("/login", { state: { from: "/question/ask" } });
    }
  }, [navigate]);

  return <Outlet />;
};

export default ProtectedRoutes;
