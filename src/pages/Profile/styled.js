import { btnStyles } from "Components/common/Button/styled";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 975px;
  margin: auto;

  @media (max-width: 600px) {
    margin-inline: 20px;
  }
`;

export const ProfileHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 30px;
    font-weight: 400;
    margin: 0;
  }
`;

export const BtnContainer = styled.div`
  button {
    ${btnStyles};
    font-size: 12px;
  }
`;

export const ContactContent = styled.div`
  padding-top: 10px;
`;

export const ContactLink = styled.a`
  text-decoration: none;
  font-size: 1.25rem;
  margin-right: 15px;
  color: ${({ theme }) => theme.textSoft};
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.specialBg};
  }
`;
