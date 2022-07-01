import styled from "styled-components";

export const Container = styled.div`
  max-width: 975px;
  margin: auto;
  padding-inline: 20px;
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
