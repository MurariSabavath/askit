import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { apiInstance, requestInterceptor } from "../../services/axiosInstance";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import {
  BtnContainer,
  Container,
  BottomContainer,
  FormControl,
  Title,
  PasswordShowBtn,
} from "./styled";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [showPassword, setShowPassword] = useState(false);
  const [pwd, setpwd] = useState({
    newpassword: "",
    confirmpassword: "",
  });
  const handleInputChange = (e) => {
    setpwd({
      ...pwd,
      [e.target.name]: e.target.value,
    });
  };
  const { mutate, isLoading } = useMutation(
    () => {
      apiInstance.interceptors.request.eject(requestInterceptor);
      return apiInstance.post(`/users/reset/${token}`, {
        password: pwd.newpassword,
      });
    },
    {
      onSuccess: () => {
        toast.success("Password reset successfull!");
        navigate("/login");
      },
      onError: (error) => toast.error(error.response.data.error),
    },
  );
  return (
    <Container>
      <Title>Change Password</Title>
      <FormControl>
        <Input
          value={pwd.newpassword}
          name="newpassword"
          type={showPassword ? "text" : "password"}
          placeholder="new password"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <Input
          value={pwd.confirmpassword}
          name="confirmpassword"
          type={showPassword ? "text" : "password"}
          placeholder="confirm password "
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
          disabled={
            isLoading ||
            pwd.confirmpassword.length === 0 ||
            pwd.newpassword.length === 0 ||
            pwd.confirmpassword !== pwd.newpassword
          }
          handleClick={() => {
            pwd.confirmpassword === pwd.newpassword
              ? mutate()
              : toast.error("password did not match");
          }}
        >
          Change Password
        </Button>
      </BtnContainer>
      <BottomContainer>
        <p>
          <Link to="/login">Log In</Link>
        </p>
      </BottomContainer>
    </Container>
  );
};

export default ResetPassword;
