import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  border: 1px solid;
  border-color: ${({ theme }) => theme.border};
  margin-top: 20px;
  border-radius: 6px;
  overflow: hidden;
`;

export const Header = styled.div`
  max-width: 100%;
  padding: 10px;
  border-bottom: 1px solid black;
  border-bottom-color: ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.mark};
  color: white;
  font-size: 14px;

  a {
    font-weight: 400;
    font-size: 15px;
    cursor: pointer;
    border-bottom-width: 2px;
    &:hover {
      color: ${({ theme }) => theme.specialBg};
      text-decoration: underline;
    }
  }
`;

export const Profile = styled(Link)`
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
  border-bottom-width: 2px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.specialBg};
    font-weight: 400;
    text-decoration: underline;
  }
`;
export const SampleText = styled.span`
  margin-inline: 4px;
  color: ${({ theme }) => theme.textStrongContrast};
`;
export const Body = styled.div`
  max-width: 100%;
  padding: 16px;
  font-size: 14px;
`;
