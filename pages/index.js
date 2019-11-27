import React from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../store/ducks/modal/index';

export default function index() {
  const {
    toggleLoginModal,
  } = Actions;
  const dispatch = useDispatch();
  
  const openLoginModal = () => dispatch(
    toggleLoginModal(true),
  );

  return (
    <div className="pb-64 text-center">
      <p className="text-4xl font-medium w-full">
        Descubra e evolua<br/><span className="font-light">seu caminho</span> tech.
      </p>

      <button 
        className="uppercase text-2xl bg-transparent hover:bg-blueteal text-blueteal font-medium hover:text-white py-2 px-16 mt-8 border-4 border-blueteal hover:border-transparent"
        onClick={openLoginModal}
      >
        Vamos lá
      </button>
    </div>
  )
}


