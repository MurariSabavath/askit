import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { apiInstance, requestInterceptor } from "../../services/axiosInstance";
import {
  BtnContainer,
  Container,
  BottomContainer,
  FormControl,
  Title,
} from "./styled";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const { mutate, isLoading } = useMutation(
    () => {
      apiInstance.interceptors.request.eject(requestInterceptor);
      return apiInstance.post("/users/forgot", { email: email });
    },
    {
      onSuccess: (data) => {
        console.log(data);
        toast.success("email sent");
      },
      onError: (error) => toast.error(error.response.data.error),
    },
  );
  return (
    <Container>
      <Title>Forgot Password</Title>
      <FormControl>
        <Input
          value={email}
          name="email"
          type="email"
          placeholder="email"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </FormControl>
      <BtnContainer>
        <Button
          handleClick={() => mutate()}
          disabled={isLoading || email.length === 0}
        >
          Reset Password
        </Button>
      </BtnContainer>
      <BottomContainer>
        <p>
          Remember password ? <Link to="/login">Log In</Link>
        </p>
      </BottomContainer>
    </Container>
  );
};

export default ForgotPassword;
