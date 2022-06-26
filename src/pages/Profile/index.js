import { useQuery } from "react-query";
import { apiInstance } from "../../services/axiosInstance";

const Profile = () => {
  const { data } = useQuery("profile-data", () => apiInstance("users/get/me"));

  console.log(data?.data);
  return <h1>hello world</h1>;
};

export default Profile;
