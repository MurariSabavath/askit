import Input from "../../components/common/Input";
import { toast } from "react-toastify";
import Button from "../../components/common/Button";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { apiInstance, requestInterceptor } from "../../services/axiosInstance";
import { useEffect, useState } from "react";
import {
  BtnContainer,
  Container,
  BottomContainer,
  FormControl,
  Title,
} from "./styled";

const ForgotPassword = ()=>{
    const [email, setEmail] = useState('');
    const handleInputChange=(e)=>{
        setEmail(e.target.value);
    }
  const { mutate } = useMutation(
    () => {
      apiInstance.interceptors.request.eject(requestInterceptor);
      return apiInstance.post("/users/forgot", {'email':email});
    },
    {
      onSuccess: (data) => {
        console.log(data)
        toast.success(
            'email sent'
        );
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
        <Button handleClick={()=>mutate()}>Reset Password</Button>
      </BtnContainer>
      <BottomContainer>
        <p>
          Already have an account ? <Link to="/login">Log In</Link>
        </p>
      </BottomContainer>
    </Container>
  );
}

export default ForgotPassword;