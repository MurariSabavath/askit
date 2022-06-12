import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import {
  BtnContainer,
  Container,
  BottomContainer,
  FormControl,
  SocialAuth,
  Title,
  OrContainer,
} from "./styled";
import { apiInstance } from "../../services/axiosInstance";

const Login = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(
    () => {
      return apiInstance.post("/users/login", formInputData);
    },
    {
      onSuccess: (data) => {
        const access_token = data.headers["x-auth-token"];
        localStorage.setItem("access_token", JSON.stringify(access_token));
        navigate("/");
      },
      onError: (error) => toast.error(error.response.data.error),
    },
  );

  const [formInputData, setFormInputData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormInputData({
      ...formInputData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Title>Log In</Title>
      <SocialAuth href="https://askito.herokuapp.com/api/oauth/google">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          alt="Google"
        />
        Continue with Google
      </SocialAuth>
      <OrContainer>OR</OrContainer>
      <FormControl>
        <Input
          value={formInputData.email}
          name="email"
          type="text"
          placeholder="email"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <Input
          value={formInputData.password}
          name="password"
          type="password"
          placeholder="password"
          onChange={handleInputChange}
        />
      </FormControl>
      <BtnContainer>
        <Button handleClick={() => mutate()}>Login</Button>
      </BtnContainer>
      <BottomContainer>
        <p>
          Forgot your <Link to="/register">Password</Link> ?
        </p>
        <p>
          New to Askit ? <Link to="/register">Sign Up</Link>
        </p>
      </BottomContainer>
    </Container>
  );
};

export default Login;
