import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators } from '../store/ducks/Interests';
import Router from 'next/router';

const SelectInterests = ({ onSubmit }) => {
  const [nextAvailable, setNextAvailable] = useState(true);

  const [interests, setInterests] = useState([
    {id: '1', name: 'Quadrinhos'},
    {id: '2', name: 'Jogos'},
    {id: '3', name: 'Biologia'},
    {id: '4', name: 'Saúde'},
    {id: '5', name: 'Lógica'},
    {id: '7', name: 'Grays-Anatomy'},
    {id: '8', name: 'Quebra-Cabeças'},
    {id: '9', name: 'Dieta'},
  ]);


  const onOptionClick = (interest) => {
    const index = interests.findIndex(e => (e.id === interest.id));
    const checkedInterests = interests.filter(e => e.checked);
    const interest_draft = interests.slice();
    if( checkedInterests.length <4 && !interest_draft[index].checked){
      interest_draft[index].checked = !interest_draft[index].checked;
    } else {
      interest_draft[index].checked = false;
    }
    const updatedCheckedInterests = interest_draft.filter(e => e.checked);
    if(updatedCheckedInterests.length === 4){
      setNextAvailable(false);
    } else {
      setNextAvailable(true);
    }
    setInterests(interest_draft);
  }

  return (
    <>
      <h2 className="text-5xl mb-10 text-brown font-bold">
        Quais desses assuntos te<br/> 
        Interessam mais ?
      </h2>

      <div className="flex flex-wrap -mb-6 -mx-4">
        {interests.map( (interest) => (
          <div className="w-3/12 px-4 mb-6 block" key={interest.id}>
            <button onClick={() => onOptionClick(interest)} className={`shadow ${ !interest.checked ? 'bg-white text-brown' : 'bg-blueteal text-white'}  rounded-lg p-6 text-2xl w-full`}>
              {interest.name}
            </button>
          </div>
        ))}
      </div>
      {!nextAvailable && (
        <button disabled={nextAvailable} onClick={onSubmit} className="text-blueteal uppercase text-5xl mt-20">
          Avançar
        </button>
      )}
      
    </>
  )
};

const ConfirmPathInterest = ({ onCancel, affinity }) => (
  <>
    <h2 className="text-5xl mb-24 text-brown font-bold">
      Hm… Que tal seguir o<br/> caminho {affinity}?
    </h2>


    <div className="flex block -mx-4">
      <div className="w-1/2 px-4">
        <button onClick={() => Router.push('/path')} className="shadow bg-blueteal rounded-lg p-4 text-2xl text-white w-full">
          Sim
        </button>
      </div>
      <div className="w-1/2 px-4">
        <button onClick={onCancel} className="shadow bg-white rounded-lg p-4 text-2xl text-brown w-full">
          Tente Novamente
        </button>
      </div>
    </div>
  </>
)

const pages = ({saveInterests, resetInterests, loginChecked, user = {}, saved}) => {  
  useEffect(()=> {
    loginChecked && !saved && user.affinity !== null && Router.push('/path');
  },[loginChecked, saved]);

  if (!loginChecked) {
    return <div>Carregando....</div>;
  }
  
  return (
    <div className="mb-64">
      {!saved ? <SelectInterests onSubmit={saveInterests}/> : <ConfirmPathInterest affinity={user.affinity} onCancel={resetInterests} />}
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.Login.user,
  loginChecked: state.Login.checked,
  saved: state.Interests.saved
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(pages);
