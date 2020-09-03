import React, { useRef } from 'react';
import useOnClickOutside from '../utils/useOnClickOutside';
import { ModalStyles } from '../styles/Modal.styles.js';

const Modal = ({ showModal, setShowModal, close, children }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (showModal) {
      setShowModal(false);
    }
  });
  console.log(showModal);

  return (
    <ModalStyles>
      {showModal && (
        <div className="popup">
          <div className="popup_inner" ref={ref}>
            <div className="exit" onClick={() => setShowModal(false)}>
              <i className="fas fa-times">X</i>
            </div>
            {children}
          </div>
        </div>
      )}
    </ModalStyles>
  );
};

export default Modal;
