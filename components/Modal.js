import React from 'react';


const Modal = ({ children, onClose, pose }) => (
  <section pose={pose} className="bg-modal shadow absolute z-30 w-full flex justify-center items-center h-full left-0 top-0">
    <div className="relative">
      <button className="absolute top-0 right-0 mr-6 mt-4 text-2xl color-brown" onClick={onClose}>&times;</button>
      <div className="bg-white p-8 shadow modal">
        {children}
      </div>
    </div>
  </section>
);

export default Modal;
