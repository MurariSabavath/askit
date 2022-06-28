import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const AdminOutlet = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      const decoded = jwt_decode(token);
      if (!decoded?.isAdmin) {
        navigate("/");
      }
    }
  }, [navigate]);

  return <Outlet />;
};

export default AdminOutlet;
