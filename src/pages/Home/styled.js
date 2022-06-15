import { Link } from "react-router-dom";
import styled from "styled-components";
import { btnStyles } from "../../components/common/Button/styled";

export const Container = styled.div`
  max-width: 700px;
  margin: auto;
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
