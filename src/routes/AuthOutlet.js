import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthOutlet = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      navigate("/");
    }
  }, [navigate]);
  return <Outlet />;
};

export default AuthOutlet;
