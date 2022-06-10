import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formInputData, setFormInputData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormInputData({
      ...formInputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegiseter = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/register`, formInputData)
      .then(() => {
        toast.success(
          "Your account has been created. Check your email for verification",
        );
        navigate("/login");
      })
      .catch((err) => toast.error(err.response.data.error));
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      <SocialAuth href={`${process.env.REACT_APP_API_URL}/oauth/google`}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          alt="Google"
        />
        Continue with Google
      </SocialAuth>
      <OrContainer>OR</OrContainer>
      <FormControl>
        <Input
          name="email"
          type="email"
          placeholder="email"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <Input
          name="name"
          type="text"
          placeholder="username"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <Input
          name="password"
          type="password"
          placeholder="password"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </FormControl>
      <BtnContainer>
        <Button handleClick={handleRegiseter}>Register</Button>
      </BtnContainer>
      <BottomContainer>
        <p>
          Already have an account ? <Link to="/login">Log In</Link>
        </p>
      </BottomContainer>
    </Container>
  );
};

export default Register;
