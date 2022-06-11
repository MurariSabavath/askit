import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Redirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = location.search.split("?")[1];
    localStorage.setItem("access_token", JSON.stringify(accessToken));
    navigate("/");
  }, [location.search, navigate]);

  return <p>Redirecting...</p>;
};

export default Redirect;
