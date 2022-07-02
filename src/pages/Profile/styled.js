import { btnStyles } from "Components/common/Button/styled";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 975px;
  margin: auto;
  padding-inline: 20px;
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
  margin-right: 5px;
  color: ${({ theme }) => theme.textSoft};
  transition: 0.2s linear;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.specialBg};
  }
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
