import { Profile } from "Components/common/comment/styled";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { btnStyles } from "../../components/common/Button/styled";
import { inputStyle } from "../../components/common/Input/styled";

export const Container = styled.section`
  max-width: 700px;
  margin: auto;
  margin-top: 20px;
  position: relative;
  border-radius: 5px;
  margin-bottom: 50px;
  /* overflow: hidden; */
  border: 1px solid;
  padding: 10px;
  border-color: ${({ theme }) => theme.border};

  @media (max-width: 700px) {
    margin: 20px;
  }
`;

export const UserName = styled(Link)`
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  border-bottom-width: 2px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.specialBg};
    text-decoration: underline;
  }
`;

export const Para = styled.div`
  position: absolute;
  top: -10px;
  left: 1.5rem;
  z-index: 2;
  font-size: 13px;
  background-color: ${({ theme }) => theme.bg};
  padding-inline: 10px;
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;

  button {
    ${btnStyles}
    white-space: nowrap;
    font-size: 12px;
    margin: 0;
    padding-inline: 20px;
    margin-right: 10px;
    max-width: max-content;
  }
`;

export const BtnFlex = styled.section`
  display: flex;
  justify-content: flex-start;
`;

export const CommentInputBox = styled.div`
  input {
    ${inputStyle};
    margin-top: 10px;
    width: 100%;
    padding-left: 10px;
  }
`;
