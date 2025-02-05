import React from 'react';
import './Modal.css';

const Modal = ({isOpen, togglePopup,content}) => {


  return (
    <>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <p>{content}</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
