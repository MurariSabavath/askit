import { Container, VerifiedBtn } from "./styled";
import { useNavigate } from "react-router-dom";
import Button from "Components/common/Button";
import { useEffect } from "react";

const EmailVerification = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <Container>
      <p style={{ textAlign: "center" }}>Your Email Verified successfully!</p>
      <VerifiedBtn>
        <Button handleClick={() => navigate("/login")}>
          Login to your account
        </Button>
      </VerifiedBtn>
    </Container>
  );
};

export default EmailVerification;
