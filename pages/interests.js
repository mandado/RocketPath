import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators } from '../store/ducks/Interests';
import Router from 'next/router';

const SelectInterests = ({ onSubmit, setInterests, interests }) => {
  const [nextAvailable, setNextAvailable] = useState(true);

  const onOptionClick = (interest) => {
    const index = interests.findIndex(e => (e.id === interest.id));
    const checkedInterests = interests.filter(e => e.checked);
    const interest_draft = interests.slice();
    if( checkedInterests.length <5 && !interest_draft[index].checked){
      interest_draft[index].checked = !interest_draft[index].checked;
    } else {
      interest_draft[index].checked = false;
    }
    const updatedCheckedInterests = interest_draft.filter(e => e.checked);
    if(updatedCheckedInterests.length === 5){
      setNextAvailable(false);
    } else {
      setNextAvailable(true);
    }
    setInterests({interests: interest_draft});
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
              {interest.title}
            </button>
          </div>
        ))}
      </div>
      {!nextAvailable && (
        <button disabled={nextAvailable} onClick={() => onSubmit(interests)} className="text-blueteal uppercase text-5xl mt-20">
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

const pages = ({saveInterests, readInterests, resetInterests, setInterests, interests, loginChecked, user = {}, saved}) => {  
  useEffect(()=>{
    readInterests();
  },[]);
  useEffect(()=> {
    // loginChecked && !saved && Router.push('/path');
  },[loginChecked, saved]);

  if (!loginChecked) {
    return <div>Carregando....</div>;
  }
  
  return (
    <div className="mb-64">
      {!saved ?
        <SelectInterests
          onSubmit={saveInterests}
          setInterests={setInterests}
          interests={interests}
        /> : 
        <ConfirmPathInterest affinity={user.affinity} onCancel={resetInterests} />}
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.Login.user,
  loginChecked: state.Login.checked,
  saved: state.Interests.saved,
  interests: state.Interests.interests,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(pages);
