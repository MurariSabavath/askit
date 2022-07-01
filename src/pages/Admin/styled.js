import { BtnContainer } from "Pages/EditProfile/styled";
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

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NewBtnContainer = styled(BtnContainer)`
  width: max-content;
  margin-top: 20px;

  button {
    background: ${({ background }) => background};
    font-size: 14px;
    margin-left: 10px;
  }
`;
