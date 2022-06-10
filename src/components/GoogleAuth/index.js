import { LoginSocialGoogle } from "reactjs-social-login";
import axios from "axios";

const GoogleSocialAuth = () => {
  console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
  const handleLoginSuccess = ({ provider, data }) => {
    console.log(provider, data);
    axios
      .post("http://127.0.0.1:8000/api/auth/google/", {
        access_token: data.access_token,
      })
      .then((resp) => console.log(resp))
      .catch((err) => err);
  };

  return (
    <LoginSocialGoogle
      onResolve={handleLoginSuccess}
      client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onReject={(err) => {
        console.log(err);
      }}
    >
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
        alt="Google"
      />
      Continue with Google
    </LoginSocialGoogle>
  );
};

export default GoogleSocialAuth;
