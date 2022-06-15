import styled, { css } from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
`;

export const inputStyle = css`
  height: 48px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.text};
  outline: none;
  border: 1px solid ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.inputContrast};
  border-radius: 5px;
  font-size: 14px;

  &::placeholder {
    text-transform: uppercase;
  }

  &:focus,
  &:active {
    border: 2px solid ${({ theme }) => theme.outline};
  }
`;
