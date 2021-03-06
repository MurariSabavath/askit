import { btnStyles } from "Components/common/Button/styled";
import { inputStyle } from "Components/common/Input/styled";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 975px;
  margin: auto;
  padding-inline: 20px;
`;

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

export const BtnContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  button {
    ${btnStyles}
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding-inline: 40px;
  }
`;

export const Border = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  padding: 10px 20px;
  margin-block: 20px;
`;

export const InputContianer = styled.div`
  position: relative;
  & > input {
    padding-left: 40px;
    ${inputStyle};
    &::placeholder {
      text-transform: capitalize;
    }
  }

  svg {
    position: absolute;
    left: 10px;
    top: 10px;
  }
`;
