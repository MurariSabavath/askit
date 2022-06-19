import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
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
import { apiInstance, requestInterceptor } from "../../services/axiosInstance";

const Register = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation(
    () => {
      apiInstance.interceptors.request.eject(requestInterceptor);
      return apiInstance.post("/users/register", formInputData);
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
  });

  const handleInputChange = (e) => {
    setFormInputData({
      ...formInputData,
      [e.target.name]: e.target.value,
    });
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
        <Button handleClick={() => mutate()}>Register</Button>
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
