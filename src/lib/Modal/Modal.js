import React from "react";
import ReactModal from "react-modal";

// ReactModal.setAppElement("#root");

export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} contentLabel="Modal">
      {children}
    </ReactModal>
  );
};
