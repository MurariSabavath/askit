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
