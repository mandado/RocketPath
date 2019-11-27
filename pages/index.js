
import React, { useEffect, useState} from 'react';
import posed from 'react-pose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators } from '../store/ducks/modal';

const TextWrapper = posed.div({
  visible: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 3000 }
    }
  },
  init: {
    y: 50,
    opacity: 0,
    transition: { duration: 1500 }
  }
});

const index = ({ token, toggleLoginModal }) => {
  const [visible, setVisible] = useState(false);
  useEffect(()=> {
    setVisible(true);
  }, []);

  const goToInterests = () => {
    if(!token)
      toggleLoginModal(true);
  }

  return (
    <TextWrapper className="pb-64 text-center" pose={visible && 'visible'}>
      <p className="text-5xl font-medium w-full">
        Descubra e evolua<br/><span className="font-light">seu caminho</span> tech.
      </p>

      <button 
        className="
          uppercase
          text-2xl
          bg-transparent
          hover:bg-blueteal
          text-blueteal font-medium
          hover:text-white
          py-2 px-16 mt-8
          border-4
          border-blueteal
          hover:border-transparent
        "
        onClick={goToInterests}
      >
        Vamos lá
      </button>
    </TextWrapper>
  );
};

const mapStateToProps = state => ({
  token: state.Login.token,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(index);