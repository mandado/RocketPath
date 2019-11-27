import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators } from '../../store/ducks/Login';
import { Creators as ModalCreators} from '../../store/ducks/modal';

const Header = ({ token, toggleLoginModal, toggleSignupModal, logout }) => {
  return(
    <>
      {
        token ? (
          <div className="flex items-center">
            <a href="#" className="text-xl mr-8 color-brown">Rank</a>
            <img src="/images/avatar.png" className="w-20" />
            <div className="color-brown ml-2">
              <p className="text-xl font-medium leading-none mb-1">Felipe Ramos</p>
              <p className="text-md font-light leading-none">
                Descobrindo...
              </p>
              <button onClick={logout} type="button" className="text-sm text-blueteal mt-1 font-light leading-none">
                Sair
              </button>
            </div>
          </div>
        ) : (
          <div className="flex">
            <button onClick={() => toggleLoginModal(true)} className="text-xl color-brown">Entrar</button>
            <button onClick={() => toggleSignupModal(true)} className="text-xl color-brown ml-12">Cadastrar</button>
          </div>
        )
      }
    </>
  );
};

const mapStateToProps = state => ({
  token: state.Login.token,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({...Creators, ...ModalCreators}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
