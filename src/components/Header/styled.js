import styled from "styled-components";
import { btnStyles } from "../common/Button/styled";
import { inputStyle } from "../common/Input/styled";

export const HeaderContainer = styled.nav`
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-inline: 10px;
  z-index: 1;
  background: #ffffff;

  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 2.5fr 1fr;
  grid-gap: 20px;
  grid-template-areas:
    "one two three"
    ". . ."
    ". . .";
  justify-items: center;
  align-items: center;
  padding-top: 10px;

  box-shadow: 5px 5px 7px -6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 5px 5px 7px -6px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 5px 5px 7px -6px rgba(0, 0, 0, 0.3);
`;

export const GridOne = styled.div`
  grid-area: one;
  a {
    font-size: medium;
    text-decoration: none;
    color: black;
    font-weight: bolder;
  }
`;

export const GridTwo = styled.div`
  grid-area: two;
  width: 100%;
  position: relative;
`;

export const GridThree = styled.div`
  grid-area: three;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.3);
  max-width: 250px;
  width: 100%;
  height: 48px;
  border-radius: 5px;
  padding-inline: 10px;
  cursor: pointer;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      color: black;
    }
  }

  &:hover {
    border: 1px solid #0079d3;
  }
`;

export const ResultContainer = styled.div`
  position: absolute;
  background: #ffffff;
  width: 100%;
  z-index: 1;
  box-shadow: 4px 5px 13px 0px rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 4px 5px 13px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 4px 5px 13px 0px rgba(0, 0, 0, 0.19);
`;

export const ResultCard = styled.div`
  display: flex;
  padding: 10px;

  h4 {
    margin: 0;
    padding: 0;
  }

  span {
    padding-left: 5px;
    font-weight: bold;
  }
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

export const ProfileDropdown = styled(ResultContainer)`
  left: 0;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  button {
    ${btnStyles}
    display: block;
    border-radius: 0;
    font-size: 14px;
    margin: 0;
  }
`;

export const DropdownElement = styled.div`
  width: 100%;
  a {
    padding: 10px;
    text-align: left;
    display: block;
    width: 100%;
    text-decoration: none;
    color: black;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;
