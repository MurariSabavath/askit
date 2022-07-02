import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import Input from "Components/common/Input";
import Button from "Components/common/Button";
import { apiInstance, requestInterceptor } from "Services/axiosInstance";
import {
  BtnContainer,
  Container,
  BottomContainer,
  FormControl,
  SocialAuth,
  Title,
  OrContainer,
  PasswordShowBtn,
  LogoContainer,
} from "./styled";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isLoading } = useMutation(
    () => {
      apiInstance.interceptors.request.eject(requestInterceptor);
      return apiInstance.post("/users/register", {
        name: formInputData.name,
        email: formInputData.email,
        password: formInputData.password,
      });
    },
    {
      onSuccess: () => {
        toast.success(
          "Your account has been created. Check your email for verification",
        );
        navigate("/login");
      },
      onError: (error) => toast.error(error.response.data.error),
    },
  );

  const [formInputData, setFormInputData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormInputData({
      ...formInputData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <LogoContainer>
        <img src="./logo.png" alt="" width={100} />
      </LogoContainer>
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
          type={showPassword ? "text" : "password"}
          placeholder="password"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <Input
          name="confirmPassword"
          type={showPassword ? "text" : "password"}
          placeholder="confirm password"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </FormControl>
      <PasswordShowBtn>
        <Button handleClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"} Password
        </Button>
      </PasswordShowBtn>
      <BtnContainer>
        <Button
          handleClick={() => mutate()}
          isLoading={isLoading}
          disabled={
            isLoading ||
            formInputData.email.length === 0 ||
            formInputData.password.length === 0 ||
            formInputData.name.length === 0 ||
            formInputData.password !== formInputData.confirmPassword
          }
        >
          Sign Up
        </Button>
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
