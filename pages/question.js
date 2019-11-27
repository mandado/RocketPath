import React, { useState } from 'react';
import Link from 'next/link';

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
    <div className="mb-64 flex -mr-4 flex-wrap w-full">
      <div className="w-4/12 pr-4 pl-20 mt-24">
        <div className="bg-white shadow p-10 flex flex-wrap justify-center">
          <p className="uppercase text-lg font-medium mb-10 w-full">Ferramentas</p>

          <div className="w-full mb-4">
            <button className="border-2 w-64 border-yellowOption hover:bg-yellowOption hover:text-white text-yellowOption px-4 py-2">
              “Imprimir uma cópia”
            </button>
          </div>

          <div className="w-full mb-4">
            <button className="border-2 w-64 border-yellowOption hover:bg-yellowOption hover:text-white text-yellowOption px-4 py-2">
              “Perguntar Sintomas”
            </button>
          </div>

          <div className="w-full mb-4">
            <button className="border-2 w-64 border-yellowOption hover:bg-yellowOption hover:text-white text-yellowOption px-4 py-2">
              “Perguntar Dados Pessoais"
            </button>
          </div>

          <div className="w-full mb-4">
            <button className="border-2 w-64 border-yellowOption hover:bg-yellowOption hover:text-white text-yellowOption px-4 py-2">
              “Guardar Sintomas“
            </button>
          </div>
        </div>

        <Link href="/path">
          <a className="text-blueteal uppercase text-xl block mt-4">
            Voltar
          </a>
        </Link>
      </div>
      <div className="w-8/12 p-20">
        <h2 className="text-5xl text-brown font-bold">
          Prontuario de Paciente
        </h2>
        <p className="text-xl text-brown mb-10">
          Ei, um paciente acabou de chegar em sua clinica, como cadastrá-lo de maneira lógica?
        </p>

        <div className="p-24 border-2 border-dashed bg-white"></div>
        <div className="text-right mt-4">
          <a href="#" className="uppercase text-xl text-gray-400 font-medium">Limpar tudo</a>
        </div>

        <button className="text-blueteal uppercase text-5xl mt-10">
          Avançar
        </button>
      </div>
    </div>
  );
}
