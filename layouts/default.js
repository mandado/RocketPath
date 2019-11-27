import '../styles/index.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import posed from 'react-pose';
import Modal from '../components/Modal';
import Input from '../components/Input';
import Select from '../components/Select';
import RocketSvg from '../components/icons/Rocket';
import MountainsSvg from '../components/icons/Mountains';
import { Actions } from '../store/ducks/modal/index';

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
  path: { 
    x: '170%', 
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
  path: { 
    x: '55%', 
    y: 100,
    z: 10,
    transition: {
      duration: 300,
      ease: 'linear'
    } 
  },
});

const routeEffectsState = {
  '/': 'visible',
  '/path': 'path',
  '/question': 'path',
};

function Layout({ children }) {
  const [logged, setLogged] = useState(false);
  const [toggled, setToggled] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const loginModal = useSelector(state => state.modal.loginModal);
  const signupModal = useSelector(state => state.modal.signupModal);
  const { toggleLoginModal, toggleSignupModal } = Actions;

  const poseClass = toggled ? (routeEffectsState[router.pathname] || 'content') : 'hidden';

  const loginUser = () => {
    dispatch(toggleLoginModal(false));
    setLogged(true);
  };

  const signupUser = () => {
    dispatch(toggleSignupModal(false));
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

        {
          logged ? (
            <div className="flex items-center">
              <a href="#" className="text-xl mr-4 color-brown">Rank</a>
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
              <button onClick={() => dispatch(toggleLoginModal(true))} className="text-xl color-brown">Entrar</button>
              <button onClick={() => dispatch(toggleSignupModal(true))} className="text-xl color-brown ml-12">Cadastrar</button>
            </div>
          )
        }
      </nav>

      <div className="content z-10 relative flex flex-wrap justify-center text-center items-center color-brown h-full w-full">
        {children}
      </div>

      <Rocket className="rocket absolute" pose={poseClass}>
        <RocketSvg />
      </Rocket>
      <Mountains className="mountains absolute" pose={poseClass}>
        <MountainsSvg />
      </Mountains>
        
      {loginModal && (
        <Modal onClose={() => dispatch(toggleLoginModal(false))}>
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

      {signupModal && (
        <Modal onClose={() => dispatch(toggleSignupModal(false))}>
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
