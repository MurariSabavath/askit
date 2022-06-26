import styled from "styled-components";
import { btnStyles } from "../Button/styled";

export const AnsContainer = styled.div`
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  button {
    max-width: max-content;
    ${btnStyles}
    font-size: 12px;
    margin: 0;
    padding-inline: 20px;
    margin-right: 10px;
  }
`;
