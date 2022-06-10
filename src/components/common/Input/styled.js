import styled, { css } from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
`;

export const inputStyle = css`
height: 48px;
padding-right: 10px;
padding-top: 10px;
padding-bottom: 10px;
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 5px;
font-size: 14px;
outline: none;

&::placeholder {
  text-transform: uppercase;
}
&:focus,
&:active {
  border: 1px solid #0079d3;
}

&:-webkit-autofill,
&:-webkit-autofill:hover,
&:-webkit-autofill:focus,
&:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
}`;
