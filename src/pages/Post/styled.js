import styled from "styled-components";
import { inputStyle } from "../../components/common/Input/styled";

export const Container = styled.div`
  max-width: 700px;
  margin: auto;

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
