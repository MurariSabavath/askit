import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: auto;

  @media (max-width: 600px) {
    margin-inline: 20px;
  }
`;

export const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  margin-bottom: 100px;
  gap: 20px;

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  h2 {
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
