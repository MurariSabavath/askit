import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";

export const HeaderContainer = styled.nav`
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-inline: 50px;
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

  @media (max-width: 600px) {
    padding-inline: 20px;
  }
`;

export const GridOne = styled.div`
  grid-area: one;
  width: 100%;

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
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  svg {
    fill: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }
`;

export const ResultContainer = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.bg};
  padding-block: 10px;
  width: 100%;
  z-index: 1;
  box-shadow: 0px 5px 13px 0px ${({ theme }) => theme.shadow};
  -webkit-box-shadow: 0px 5px 13px 0px ${({ theme }) => theme.shadow};
  -moz-box-shadow: 0px 5px 13px 0px ${({ theme }) => theme.shadow};

  p {
    margin-left: 10px;
  }

  h4 {
    margin: 0;
    margin-left: 10px;
  }
`;

export const ProfileDropdown = styled(ResultContainer)`
  right: 0;
  top: 70px;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 200px;

  button {
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

export const dropDownStyles = css`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  margin-inline: 5px;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;

  p {
    margin: 0;
    margin-left: 5px;
    white-space: nowrap;
  }

  &:hover {
    background: ${({ theme }) => theme.hoverBg};
  }
`;

export const DropDownLinkContainer = styled(Link)`
  ${dropDownStyles}
`;

export const DropdownBtn = styled.div`
  ${dropDownStyles}

  div {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const DropDownElement = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileBox = styled.div`
  display: flex;
  margin: 15px;
  align-items: center;
  svg {
    background: ${({ theme }) => theme.specialBgContrast};
    stroke: #fff;
    color: #fff;
    padding: 5px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  p {
    margin: 0;
    margin-left: 10px;
  }
`;

export const Line = styled.div`
  height: 0.5px;
  width: 85%;
  margin: auto;
  margin-block: 10px;
  border-radius: 1px;
  background: ${({ theme }) => theme.borderContrast};
`;
