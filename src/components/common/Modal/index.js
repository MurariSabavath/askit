import { ClickAwayListener } from "@mui/base";
import { forwardRef, useImperativeHandle, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { CloseContainer, InnerContainer, MainContainer } from "./styled";

const Modal = ({ children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    isOpen: isOpen,
    openModal: () => {
      setIsOpen(true);
    },
    closeModal: () => {
      setIsOpen(false);
    },
  }));

  return (
    <>
      {isOpen && (
        <MainContainer>
          <ClickAwayListener onClickAway={() => setIsOpen(false)}>
            <InnerContainer>
              <CloseContainer>
                <RiCloseFill size={30} onClick={() => setIsOpen(false)} />
              </CloseContainer>
              {children}
            </InnerContainer>
          </ClickAwayListener>
        </MainContainer>
      )}
    </>
  );
};
export default forwardRef(Modal);
