
import Input from "../../components/common/Input";
import { toast } from "react-toastify";
import Button from "../../components/common/Button";
import { Link, useParams } from "react-router-dom";
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

const ResetPassword= ()=>{
    const {token} = useParams();
    const [pwd, setpwd] = useState({
        newpassword:'',
        confirmpassword:'',
    })
    const handleInputChange=(e)=>{
        setpwd({
            ...pwd,
            [e.target.name]:e.target.value,
        })
    }
  const { mutate } = useMutation(
    () => {
      apiInstance.interceptors.request.eject(requestInterceptor);
      return apiInstance.post(`/users/reset/${token}`, {'password':pwd.newpassword});
    },
    {
      onSuccess: (data) => {
        console.log(data)
        toast.success(
            console.log("password reset successfull")
        );
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
          type="password"
          placeholder="new password"
          autoComplete="off"
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl>
        <Input
          value={pwd.confirmpassword}
          name="confirmpassword"
          type="password"
          placeholder="confirm password "
          autoComplete="off"
          onChange={handleInputChange}
        />
      </FormControl>
      <BtnContainer>
        <Button handleClick={()=>{pwd.confirmpassword==pwd.newpassword?mutate():toast.error('password did not match')}}>Change Password</Button>
      </BtnContainer>
      <BottomContainer>
        <p>
          Already have an account ? <Link to="/login">Log In</Link>
        </p>
      </BottomContainer>
    </Container>
  );
}

export default ResetPassword;