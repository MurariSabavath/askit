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
  background: rgba(0, 0, 0, 0.05);
  box-shadow: 4px 2px 9px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 4px 2px 9px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 4px 2px 9px 1px rgba(0, 0, 0, 0.1);

  @media (max-width: 450px) {
    width: 90%;
    margin: auto;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;

  button {
    ${btnStyles}
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
    ${inputStyle}
  }
`;

export const BottomContainer = styled.section`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 400;
  letter-spacing: 0.5px;

  a {
    color: #0079d3;
    text-decoration: none;

    &:hover {
      color: #0079d390;
    }
  }
`;

export const SocialAuth = styled.a`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  color: #0079d3;
  display: block;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
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
    background-color: rgba(0, 0, 0, 0.2);
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
