import styled from "styled-components";
import { btnStyles } from "../Button/styled";
import { inputStyle } from "../Input/styled";

export const FormControl = styled.div`
  margin-top: 5px;
  margin-block: 20px;

  input {
    padding-left: 10px;
    ${inputStyle};

    &::placeholder {
      text-transform: capitalize;
    }
  }
`;

export const FormLabel = styled.label`
  display: block;
  padding-bottom: 5px;
  font-size: 18px;
  font-weight: 700;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    display: flex;
    text-transform: capitalize;
    background: ${({ theme }) => theme.specialBgContrast};
    padding: 5px;
    margin-right: 5px;
    border-radius: 5px;
    font-size: 12px;
    color: ${({ theme }) => theme.specialText};
  }
`;

export const BtnContainer = styled.div`
  width: 100%;

  button {
    ${btnStyles}
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0;
    font-size: 14px;
    margin-top: 10px;
  }
`;

export const MultiContainerContainer = styled.div`
  .optionContainer li:hover,
  .optionContainer .highlight {
    background: ${({ theme }) => theme.specialBg};
    color: ${({ theme }) => theme.text};
  }
`;
