import styled from "styled-components";

export const MainContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
`;

export const InnerContainer = styled.div`
  position: absolute;
  min-width: 600px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  left: 50%;
  top: 50%;
  padding: 20px;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.bg};
  margin-inline: 10px;

  @media (max-width: 660px) {
    min-width: 300px;
  }
`;

export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.specialBg};
    }
  }
`;
