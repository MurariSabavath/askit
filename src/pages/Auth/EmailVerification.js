import { Link } from "react-router-dom";

const EmailVerification = () => {
  return (
    <>
      Email Verified successfully
      <Link to="/login">Login to your account</Link>
    </>
  );
};

export default EmailVerification;
