import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
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

const Login = () => {
  const navigate = useNavigate();
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

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/login`, formInputData)
      .then((resp) => {
        localStorage.setItem(
          "access_token",
          JSON.stringify(resp.headers["x-auth-token"]),
        );
        toast.success(resp.data.message);
        navigate("/");
      })
      .catch((err) => toast.error(err.response.data.error));
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
        <Button handleClick={handleLogin}>Login</Button>
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
