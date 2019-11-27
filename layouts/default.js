import '../styles/index.css';
import { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import Input from '../components/Input';
import Select from '../components/Select';
import Header from '../components/Header';
import RocketSvg from '../components/icons/Rocket';
import MountainsSvg from '../components/icons/Mountains';
import { useRouter } from 'next/router';

import posed from 'react-pose';


const Rocket = posed.div({
  visible: { 
    x: '120%', 
    y: -760,
    transition: {
      duration: 350,
      ease: 'linear'
    } 
  },
  hidden: { y: '100%' },
  content: { 
    x: '140%', 
    y: -760,
    transition: {
      duration: 350,
      ease: 'linear'
    } 
  }, 
});

const Mountains = posed.div({
  visible: { 
    x: -50, 
    y: 100,
    z: 10,
    transition: {
      duration: 300,
      ease: 'linear'
    } 
  },
  hidden: { x: 0, y: '160%' },
  content: { 
    x: 300, 
    y: 100,
    z: 10,
    transition: {
      duration: 300,
      ease: 'linear'
    } 
  }, 
});


function Layout({ children }) {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignup, setModalSignup] = useState(false);
  const [logged, setLogged] = useState(false);
  const [toggled, setToggled] = useState(false);
  const router = useRouter();

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
        <Header />
      </nav>

      <div className="content z-10 relative flex flex-wrap justify-center text-center items-center color-brown h-full w-full">
        {children}
      </div>

      <Rocket className="rocket absolute" pose={toggled ? (router.pathname !== '/' ? 'content' : 'visible') : 'hidden'}>
        <RocketSvg />
      </Rocket>
      <Mountains className="mountains absolute" pose={toggled ? (router.pathname !== '/' ? 'content' : 'visible') : 'hidden'}>
        <MountainsSvg />
      </Mountains>
        
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

export default Layout;
