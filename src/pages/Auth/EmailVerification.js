import { Container, VerifiedBtn } from "./styled";
import Button from "../../components/common/Button";
import { useNavigate } from "react-router-dom";

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
