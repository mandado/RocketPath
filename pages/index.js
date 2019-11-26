import '../styles/index.css';
import { useState } from 'react';
import Modal from '../components/Modal';
import Input from '../components/Input';

function Home() {
  const [modal, setModal] = useState(false);
  const [logged, setLogged] = useState(false);

  const loginUser = () => {
    setModal(false);
    setLogged(true);
  };

  return (
    <>
      {/* <img src="/images/mountains.svg" /> */}
      <nav className="flex navbar p-10 items-center justify-between w-full">
        <span className="flex w-48 flex-wrap color-brown">
          <h1 className="text-3xl w-full font-light leading-none">
            <span className="font-medium">Rocket</span>Path
          </h1>
          <h4 className="leading-none text-xl mt-1">
            <span className="font-light">O seu caminho </span>
            <span className="font-bold">tech</span> 
          </h4>
        </span>

        {
          logged ? (
            <div className="flex items-center">
              <img src="/images/avatar.png" className="w-20" />
              <div className="color-brown ml-2">
                <p className="text-xl font-medium leading-none mb-1">Felipe Ramos</p>
                <p className="text-md font-light leading-none">
                  14 challenges
                </p>
                <button onClick={() => setLogged(false)} type="button" className="text-sm text-blueteal mt-1 font-light leading-none">
                  Sair
                </button>
              </div>
            </div>
          ) : (
            <div className="flex">
              <button onClick={() => setModal(true)} className="text-xl color-brown">Entrar</button>
              <a href="#" className="text-xl color-brown ml-12">Cadastrar</a>
            </div>
          )
        }
      </nav>

      <div className="content z-10 relative flex flex-wrap justify-center items-center color-brown h-full w-full">
        <div className="pb-64">
          <p className="text-4xl font-medium w-full">
            Descubra e evolua<br/><span className="font-light">seu caminho</span> tech.
          </p>

          <button className="uppercase text-2xl bg-transparent hover:bg-blueteal text-blueteal font-medium hover:text-white py-2 px-16 mt-8 border-4 border-blueteal hover:border-transparent">
            Vamos lá
          </button>
        </div>
      </div>

      <div className="rocket"></div>
      <div className="mountains"></div>
        
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <h4 className="color-brown">
            <span className="text-3xl leading-none mb-2 block">Ei o/</span>
            <span className="text-xl leading-none">
              Falta pouco para descobrir <br/> o seu caminho!
            </span>

            <div className="mt-10 sign-in m-auto">
              <Input placeholder="EMAIL" />
              <br/>
              <Input placeholder="SENHA" />
              <div className="mt-8 text-center">
                <button type="button" onClick={loginUser} className="uppercase text-lg bg-blueteal hover:bg-blueteal-ligter text-white font-medium hover:text-white py-1 px-12 mb-8 mt-4 border-4 border-blueteal hover:border-transparent">
                  entrar
                </button>
              </div>
            </div>
          </h4>
        </Modal>
      )}
    </>
  )
}

export default Home;
