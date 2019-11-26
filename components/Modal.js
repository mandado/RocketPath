import React from 'react';

const Modal = ({ children, onClose }) => (
  <section className="bg-modal shadow absolute z-30 w-full flex justify-center items-center h-full left-0 top-0">
    <div className="relative">
      <button className="absolute top-0 right-0 mr-4 mt-2 color-brown" onClick={onClose}>&times;</button>
      <div className="bg-white p-6 shadow modal">
        {children}
      </div>
    </div>
  </section>
);

export default Modal;
