import { css } from "styled-components";

export const btnStyles = css`
  width: 100%;
  box-sizing: border-box;
  font-size: 20px;
  display: block;
  margin: auto;
  color: ${({ theme }) => theme.specialText};
  background: ${({ theme }) => theme.specialBg};
  padding: 8px;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 5px;

  &:hover {
    background: ${({ theme }) => theme.special};
  }
`;
