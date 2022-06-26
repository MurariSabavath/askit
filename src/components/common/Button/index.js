import { ThreeDots } from "react-loader-spinner";
import { MainBtn } from "./styled";

const Button = ({ children, handleClick, isLoading, disabled }) => {
  return (
    <MainBtn type="submit" onClick={handleClick} disabled={disabled}>
      {isLoading ? <ThreeDots height={25} color="#ffffff" /> : <>{children}</>}
    </MainBtn>
  );
};

export default Button;
