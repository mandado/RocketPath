import React, { useState } from 'react';

const SelectInterests = ({ onOptionClick }) => (
  <>
    <h2 className="text-5xl mb-10 text-brown font-bold">
      Quais desses assuntos te<br/> 
      Interessam mais ?
    </h2>

    <div className="flex flex-wrap -mb-6 -mx-4">
      <div className="w-3/12 px-4 mb-6 block">
        <button onClick={onOptionClick} className="shadow bg-white rounded-lg p-6 text-2xl text-brown w-full">
          Quadrinhos
        </button>
      </div>
      <div className="w-3/12 px-4 mb-6 block">
        <button onClick={onOptionClick} className="shadow bg-white rounded-lg p-6 text-2xl text-brown w-full">
          Jogos
        </button>
      </div>
      <div className="w-3/12 px-4 mb-6 block">
        <button onClick={onOptionClick} className="shadow bg-white rounded-lg p-6 text-2xl text-brown w-full">
          Biologia
        </button>
      </div>
      <div className="w-3/12 px-4 mb-6 block">
        <button onClick={onOptionClick} className="shadow bg-white rounded-lg p-6 text-2xl text-brown w-full">
          Saúde
        </button>
      </div>
      <div className="w-3/12 px-4 mb-6 block">
        <button onClick={onOptionClick} className="shadow bg-white rounded-lg p-6 text-2xl text-brown w-full">
          Lógica
        </button>
      </div>
      <div className="w-3/12 px-4 mb-6 block">
        <button onClick={onOptionClick} className="shadow bg-white rounded-lg p-6 text-2xl text-brown w-full">
          Grays-Anatomy
        </button>
      </div>
      <div className="w-3/12 px-4 mb-6 block">
        <button onClick={onOptionClick} className="shadow bg-white rounded-lg p-6 text-2xl text-brown w-full">
          Quebra-Cabeças
        </button>
      </div>
      <div className="w-3/12 px-4 mb-6 block">
        <button onClick={onOptionClick} className="shadow bg-white rounded-lg p-6 text-2xl text-brown w-full">
          Dieta
        </button>
      </div>
    </div>

    <button onClick={onOptionClick} className="text-blueteal uppercase text-5xl mt-20">
      Avançar
    </button>
  </>
);

const ConfirmPathInterest = ({ onCancel }) => (
  <>
    <h2 className="text-5xl mb-24 text-brown font-bold">
      Hm… Que tal seguir o<br/> caminho Health-Tech?
    </h2>


    <div className="flex block -mx-4">
      <div className="w-1/2 px-4">
        <button className="shadow bg-blueteal rounded-lg p-4 text-2xl text-white w-full">
          Sim
        </button>
      </div>
      <div className="w-1/2 px-4">
        <button onClick={onCancel} className="shadow bg-white rounded-lg p-4 text-2xl text-brown w-full">
          Tente Novamente
        </button>
      </div>
    </div>
  </>
)

export default function pages() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="mb-64">
      {toggle ? <SelectInterests onOptionClick={() => setToggle(false)} /> : <ConfirmPathInterest onCancel={() => setToggle(true)} />}
    </div>
  );
}
