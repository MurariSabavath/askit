import styled from "styled-components";
import { btnStyles } from "../../components/common/Button/styled";
import { inputStyle } from "../../components/common/Input/styled";

export const Container = styled.section`
  max-width: 700px;
  margin: auto;
  border-radius: 5px;
  margin-bottom: 50px;
  overflow: hidden;

  @media (max-width: 700px) {
    margin: 20px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;

  button {
    ${btnStyles}
    white-space: nowrap;
    font-size: 12px;
    margin: 0;
    padding-inline: 20px;
    margin-right: 10px;
    max-width: max-content;
  }
`;

export const BtnFlex = styled.section`
  display: flex;
  justify-content: flex-start;
`;

export const CommentInputBox = styled.div`
  input {
    ${inputStyle};
    margin-top: 10px;
    width: 100%;
    padding-left: 10px;
  }
`;
