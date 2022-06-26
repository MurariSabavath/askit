import styled from "styled-components";
import { btnStyles } from "../../components/common/Button/styled";
import { inputStyle } from "../../components/common/Input/styled";

export const Container = styled.div`
  max-width: 400px;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 40px 25px;
  border-radius: 5px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.bgContrast};
  box-shadow: 0px 2px 9px 1px ${({ theme }) => theme.shadow};
  -webkit-box-shadow: 0px 2px 9px 1px ${({ theme }) => theme.shadow};
  -moz-box-shadow: 0px 2px 9px 1px ${({ theme }) => theme.shadow};

  @media (max-width: 450px) {
    width: 90%;
    margin: auto;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;

  button {
    ${btnStyles}
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
  }
`;

export const VerifiedBtn = styled(BtnContainer)`
  button {
    width: max-content;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
`;

export const FormControl = styled.div`
  margin-top: 5px;

  input {
    padding-left: 10px;
    ${inputStyle};
  }
`;

export const BottomContainer = styled.section`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  letter-spacing: 0.5px;

  a {
    color: ${({ theme }) => theme.special};
    text-decoration: none;
  }
`;

export const SocialAuth = styled.a`
  background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.bg};
  border-radius: 5px;
  display: block;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  img {
    margin-right: 10px;
    width: 16px;
  }
`;

export const OrContainer = styled.div`
  margin-block: 10px;
  overflow: hidden;
  text-align: center;

  &:before,
  &:after {
    background-color: ${({ theme }) => theme.light};
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }
  &:before {
    right: 0.5em;
    margin-left: -50%;
  }
  &:after {
    left: 0.5em;
    margin-right: -50%;
  }
`;

export const PasswordShowBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    ${btnStyles}
    width: max-content;
    font-size: 12px;
    height: 20px;
    text-align: center;
    margin: 0;
    padding: 0 10px;
    margin-top: 5px;
    border-radius: 2px;
  }
`;
