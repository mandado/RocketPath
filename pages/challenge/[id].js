import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators } from '../../store/ducks/Challenge';
import Router, { useRouter } from 'next/router';

function Question({ saveChallenge, readChallenge, challenge, reading }) {
  const [blocks, setBlocks] = useState([]);
  const router = useRouter();

  const removeBlock = (block) => {
    setBlocks(
      blocks.filter(item => block !== item)
    );
  };

  const addBlock = (block) => {
    setBlocks(
      blocks.concat(block)
    );
  };

  const isSelected = (block) => blocks.includes(block);
  const clearAllSelected = () => setBlocks([]);

  const answerChallenge = () => {
    saveChallenge({
      id: challenge.id,
      answer: blocks.join(' ')
    });
    Router.push('/path');
  };

  useEffect(() => {
    readChallenge(router.query.id);
  }, [router.query.id]);

  if (reading) {
    return (
      <div>Carregando...</div>
    );
  }

  return (
    <div className="mb-64 flex -mr-4 flex-wrap w-full">
      <div className="w-4/12 pr-4 pl-20 mt-24">
        <div className="bg-white shadow p-10 flex flex-wrap justify-center">
          <p className="uppercase text-lg font-medium mb-10 w-full">Ferramentas</p>

          <div className="w-full mb-4 h-64 overflow-y-scroll">
            {
              challenge.answers.data.map(question => {
                return (
                  <div className="w-full mb-4">
                    <button disabled={isSelected(question)} onClick={() => addBlock(question)} className={`border-2 ${isSelected(question) ? 'disabled:border-gray-300 text-gray-300' : 'border-yellowOption hover:bg-yellowOption hover:text-white text-yellowOption'} lg:w-64 px-4 py-2`}>
                      {question}
                    </button>
                  </div>
                );
              })
            }
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
          {challenge.title}
        </h2>
        <p className="text-xl text-brown mb-10">
          {challenge.description}
        </p>

        <div className="p-12 h-64 border-2 border-dashed bg-white flex flex-wrap items-center overflow-y-scroll">
          {
            blocks.map(block => {
              return (
                <div className="w-full flow relative">
                  <div className="flex justify-between items-center mt-5 mb-5 border-2 w-64 border-yellowOption text-yellowOption px-4 py-2">
                    <button className="text-xl items-center flex px-2" onClick={() => removeBlock(block )}>
                      &times;
                    </button>
                    {block}
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="text-right mt-4">
          <button onClick={clearAllSelected} className="uppercase text-xl text-gray-400 font-medium">Limpar tudo</button>
        </div>

        <button onClick={answerChallenge} className="text-blueteal uppercase text-5xl mt-10">
          Avançar
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  challenge: state.Challenge.challenge,
  reading: state.Challenge.reading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Question);
