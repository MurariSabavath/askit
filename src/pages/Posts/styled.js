import { Link } from "react-router-dom";
import styled from "styled-components";
import { btnStyles } from "../../components/common/Button/styled";

export const MainContainer = styled.section`
  max-width: 700px;
  margin: auto;
  margin-bottom: 50px;
  overflow: hidden;

  @media (max-width: 700px) {
    margin: 20px;
  }
`;

export const PostContainerRow = styled.section`
  border-radius: 5px;
  overflow: hidden;

  p {
    text-align: center;
  }
`;

export const PostBody = styled.div`
  display: block;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-block: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 1px 2px 5px 0px ${({ theme }) => theme.shadow};
  -webkit-box-shadow: 1px 2px 5px 0px ${({ theme }) => theme.shadow};
  -moz-box-shadow: 1px 2px 5px 0px ${({ theme }) => theme.shadow};
`;

export const TagContainer = styled.div`
  margin-left: -5px;
  p {
    background: ${({ theme }) => theme.specialBgContrast};
    display: inline-block;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    font-size: 12px;
    color: ${({ theme }) => theme.specialText};
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    padding: 0;
  }
`;

export const PostLink = styled(Link)`
  ${btnStyles};
  color: ${({ theme }) => theme.specialText};
  width: fit-content;
  padding-inline: 20px;
  font-size: 14px;
  text-decoration: none;
  margin: 0;
`;
