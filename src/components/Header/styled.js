import styled from "styled-components/macro";
import { Link } from "react-router-dom";
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
  background: ${({ theme }) => theme.bg};

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

  box-shadow: 5px 5px 7px -6px ${({ theme }) => theme.shadow};
  -webkit-box-shadow: 5px 5px 7px -6px ${({ theme }) => theme.shadow};
  -moz-box-shadow: 5px 5px 7px -6px ${({ theme }) => theme.shadow};
`;

export const GridOne = styled.div`
  grid-area: one;
  a {
    font-size: medium;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
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
  border: 1px solid ${({ theme }) => theme.text};
  max-width: 250px;
  width: 100%;
  height: 48px;
  border-radius: 5px;
  padding-inline: 10px;
  cursor: pointer;

  & > div {
    min-width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.outline};
  }
`;

export const ResultContainer = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.bg};
  width: 100%;
  z-index: 1;
  box-shadow: 0px 5px 13px 0px ${({ theme }) => theme.shadow};
  -webkit-box-shadow: 0px 5px 13px 0px ${({ theme }) => theme.shadow};
  -moz-box-shadow: 0px 5px 13px 0px ${({ theme }) => theme.shadow};
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
    text-align: left;

    &:hover {
      background: ${({ theme }) => theme.specialBgContrast};
    }
  }
`;

export const DropDownLinkContainer = styled.div`
  width: 100%;
  & > a {
    padding: 10px;
    text-align: left;
    display: block;
    width: 100%;
    text-decoration: none;
    background: ${({ theme }) => theme.specialBg};
    color: ${({ theme }) => theme.specialText};

    &:hover {
      background: ${({ theme }) => theme.specialBgContrast};
    }
  }
`;

export const DropDownElement = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
