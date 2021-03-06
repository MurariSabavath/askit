import ReactPaginate from "react-paginate";
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

export const Pagination = styled(ReactPaginate).attrs({
  activeClassName: "active",
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: ${({ theme }) => theme.specialBg};
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
