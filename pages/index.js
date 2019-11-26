import '../styles/index.css';
import { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import Input from '../components/Input';
import Select from '../components/Select';
import RocketSvg from '../components/icons/Rocket';
import MountainsSvg from '../components/icons/Mountains';

import posed from 'react-pose';

const Rocket = posed.div({
  visible: { 
    x: -200, 
    y: -460,
    transition: {
      duration: 300,
      ease: 'linear'
    } 
  },
  hidden: { x: 0, y: '100%' },
});

const Mountains = posed.div({
  visible: { 
    x: -50, 
    y: '110%',
    z: 10,
    transition: {
      duration: 300,
      ease: 'linear'
    } 
  },
  hidden: { x: 0, y: '220%' }
});

function Home() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignup, setModalSignup] = useState(false);
  const [logged, setLogged] = useState(false);
  const [toggled, setToggled] = useState(false);

  const loginUser = () => {
    setModalLogin(false);
    setLogged(true);
  };

  const signupUser = () => {
    setModalSignup(false);
    setLogged(true);
  };

  useEffect(() => {
    setToggled(true);
  }, []);

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
              <button onClick={() => setModalLogin(true)} className="text-xl color-brown">Entrar</button>
              <button onClick={() => setModalSignup(true)} className="text-xl color-brown ml-12">Cadastrar</button>
            </div>
          )
        }
      </nav>

      <div className="content z-10 relative flex flex-wrap justify-center text-center items-center color-brown h-full w-full">
        <div className="pb-64 text-center">
          <p className="text-4xl font-medium w-full">
            Descubra e evolua<br/><span className="font-light">seu caminho</span> tech.
          </p>

          <button onClick={() => setModalLogin(true)} className="uppercase text-2xl bg-transparent hover:bg-blueteal text-blueteal font-medium hover:text-white py-2 px-16 mt-8 border-4 border-blueteal hover:border-transparent">
            Vamos lá
          </button>
        </div>
      </div>

      <Rocket className="rocket absolute" pose={toggled ? 'visible' : 'hidden'}>
        <RocketSvg />
      </Rocket>
      <Mountains className="rocket absolute" pose={toggled ? 'visible' : 'hidden'}>
        <MountainsSvg />
      </Mountains>
      {/* <div className="mountains"></div> */}
        
      {modalLogin && (
        <Modal onClose={() => setModalLogin(false)}>
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
                  Entrar
                </button>
              </div>
            </div>
          </h4>
        </Modal>
      )}

      {modalSignup && (
        <Modal onClose={() => setModalSignup(false)}>
          <h4 className="color-brown">
            <span className="text-3xl leading-none mb-2 block">Ei o/</span>
            <span className="text-xl leading-none">
              Falta pouco para descobrir <br/> o seu caminho!
            </span>

            <div className="mt-10 sign-in m-auto">
              <Input placeholder="NOME" />
              <br/>
              <Input placeholder="EMAIL" />
              <br/>
              <Select options={[
                { value: 'EnsinoFundamental', text: 'Ensino Fundamental' },
                { value: 'EnsinoMedio', text: 'Ensino Médio' },
                { value: 'EnsinoSuperior', text: 'Ensino Superior' },
              ]} />
              <br/>
              <Input placeholder="SENHA" />
              <div className="mt-8 text-center">
                <button type="button" onClick={signupUser} className="uppercase text-lg bg-blueteal hover:bg-blueteal-ligter text-white font-medium hover:text-white py-1 px-12 mb-8 mt-4 border-4 border-blueteal hover:border-transparent">
                  Cadastrar
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
