import { ModalWrapper,
         ModalComponent,
 } from  "./styles";
import { ModalProps } from "./types";

function Modal({ children, closeModal }: ModalProps) {
  return (
    <ModalWrapper onClick={closeModal}>
      <ModalComponent>{children}</ModalComponent>
    </ModalWrapper>
  );
}

export default Modal;