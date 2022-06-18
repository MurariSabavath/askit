import { MainContainer } from "./styled";

const Loading = ({ children }) => {
  return (
    <MainContainer>
      <p>{children}</p>
    </MainContainer>
  );
};

export default Loading;
