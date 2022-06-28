import { Container, VerifiedBtn } from "./styled";
import { useNavigate } from "react-router-dom";
import Button from "Components/common/Button";

const EmailVerification = () => {
  const navigate = useNavigate();

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
