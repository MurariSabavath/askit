import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { inputStyle } from "../common/Input/styled";

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

export const SearchResultLink = styled(Link)`
  display: block;
  margin: 5px;
  margin-left: 10px;
  padding: 5px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  border-radius: 5px;

  &:hover {
    background: ${({ theme }) => theme.hoverBg};
  }
`;

export const ResultCard = styled.div`
  display: flex;
  padding: 10px;
  background: ${({ theme }) => theme.hoverBg};

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
