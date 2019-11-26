import React from 'react'

export default function index() {
  return (
    <div className="pb-64 text-center">
      <p className="text-4xl font-medium w-full">
        Descubra e evolua<br/><span className="font-light">seu caminho</span> tech.
      </p>

      <button onClick={() => setModalLogin(true)} className="uppercase text-2xl bg-transparent hover:bg-blueteal text-blueteal font-medium hover:text-white py-2 px-16 mt-8 border-4 border-blueteal hover:border-transparent">
        Vamos lá
      </button>
    </div>
  )
}


