import styled from "styled-components";
import { btnStyles } from "../Button/styled";
import { inputStyle } from "../Input/styled";

export const Container = styled.div`
  max-width: 700px;
  margin: auto;
  margin-bottom: 50px;

  @media (max-width: 700px) {
    margin: 20px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
  input {
    ${inputStyle};
    padding-left: 10px;

    &::placeholder {
      text-transform: capitalize;
    }
  }
`;

export const BtnContainer = styled.div`
  button {
    ${btnStyles};
    width: 150px;
    margin: none;
    display: inline-block;
  }
`;

export const MultiContainerContainer = styled.div`
  .optionContainer li:hover,
  .optionContainer .highlight {
    background: ${({ theme }) => theme.specialBg};
    color: ${({ theme }) => theme.text};
  }
`;
