import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

const Header = ({ token ='123' }) => {
  const [tok,setToken] = useState(token);

  return(
    <>
      {
        tok ? (
          <div className="flex items-center">
            <a href="#" className="text-xl mr-8 color-brown">Rank</a>
            <img src="/images/avatar.png" className="w-20" />
            <div className="color-brown ml-2">
              <p className="text-xl font-medium leading-none mb-1">Felipe Ramos</p>
              <p className="text-md font-light leading-none">
                Descobrindo...
              </p>
              <button onClick={() => setToken(undefined)} type="button" className="text-sm text-blueteal mt-1 font-light leading-none">
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
    </>
  );
};

export default Header;
