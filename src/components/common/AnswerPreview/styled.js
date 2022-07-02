import styled from "styled-components";
import { Profile } from "../comment/styled";

export const Container = styled.div`
  position: relative;
  border: 1px solid;
  border-color: ${({ theme }) => theme.border};
  border-radius: 6px;
  width: 100%;
  padding: 10px 6px;
  margin-block: 20px;
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

export const UserName = styled(Profile)`
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  border-bottom-width: 2px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  padding-left: 3px;

  &:hover {
    color: ${({ theme }) => theme.specialBg};
    text-decoration: underline;
  }
`;

export const MarkdownPreview = styled.div`
  width: 100%;
`;
