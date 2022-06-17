import styled from "styled-components";

export const Container = styled.section`
  max-width: 700px;
  margin: auto;
  border-radius: 5px;
  margin-bottom: 50px;
  overflow: hidden;

  @media (max-width: 700px) {
    margin: 20px;
  }
`;

export const Message = styled.p`
  text-align: center;
`;
