import '../styles/index.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import posed from 'react-pose';
import Header from '../components/Header';
import RocketSvg from '../components/icons/Rocket';
import MountainsSvg from '../components/icons/Mountains';

import SingupModal from '../components/SingupModal';
import LoginModal from '../components/LoginModal';

const Rocket = posed.div({
  visible: { 
    x: 2400, 
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
        <Header />
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
        
      {loginModal && <LoginModal/>}

      {signupModal && <SingupModal/>}
    </>
  )
}

export default Layout;
