import { FC } from 'react'
import Modal from "react-modal";
import "./modal.css";
import { useContext } from "react";
import ModalContext from "../../../../../core/context/ModalContext";

type PropsModalTemplate = {
  children?: React.ReactNode
}
const ModalTemplate: FC<PropsModalTemplate> = ({
  children,
}) => {

  const { modalState, closeModal } = useContext(ModalContext)

  return (
    <Modal
      isOpen={modalState.open}
      onRequestClose={closeModal}
      contentLabel="Modal"
      className={{
        base: "modal-base",
        afterOpen: "modal-base_after-open",
        beforeClose: "modal-base_before-close"
      }}
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-base_after-open",
        beforeClose: "overlay-base_before-close"
      }}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={2000}
    >
      {children}
    </Modal>
  );
};

export default ModalTemplate