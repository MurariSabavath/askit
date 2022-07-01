import jwt_decode from "jwt-decode";

export const isAdminUser = () => {
  const token = localStorage.getItem("access_token");
  if (token) {
    const decoded = jwt_decode(token);
    if (decoded.isAdmin) {
      return true;
    }
    return false;
  }
  return false;
};
