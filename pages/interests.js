import React from 'react';

export default function pages() {
  return (
    <div className="mb-64">
      <h2 className="text-5xl mb-10 color-brown font-bold">
        Quais desses assuntos te<br/> 
        Interessam mais ?
      </h2>

      <div className="flex flex-wrap -mb-6 -mx-4">
        <div className="w-3/12 px-4 mb-6">
          <div className="shadow bg-white rounded-lg p-6 text-2xl color-brown">
            Quadrinhos
          </div>
        </div>
        <div className="w-3/12 px-4 mb-6">
          <div className="shadow bg-white rounded-lg p-6 text-2xl color-brown">
            Jogos
          </div>
        </div>
        <div className="w-3/12 px-4 mb-6">
          <div className="shadow bg-white rounded-lg p-6 text-2xl color-brown">
            Biologia
          </div>
        </div>
        <div className="w-3/12 px-4 mb-6">
          <div className="shadow bg-white rounded-lg p-6 text-2xl color-brown">
            Saúde
          </div>
        </div>
        <div className="w-3/12 px-4 mb-6">
          <div className="shadow bg-white rounded-lg p-6 text-2xl color-brown">
            Lógica
          </div>
        </div>
        <div className="w-3/12 px-4 mb-6">
          <div className="shadow bg-white rounded-lg p-6 text-2xl color-brown">
            Grays-Anatomy
          </div>
        </div>
        <div className="w-3/12 px-4 mb-6">
          <div className="shadow bg-white rounded-lg p-6 text-2xl color-brown">
            Quebra-Cabeças
          </div>
        </div>
        <div className="w-3/12 px-4 mb-6">
          <div className="shadow bg-white rounded-lg p-6 text-2xl color-brown">
            Dieta
          </div>
        </div>
      </div>

      <button className="text-blueteal uppercase text-5xl mt-20">
        Avançar
      </button>
    </div>
  );
}
