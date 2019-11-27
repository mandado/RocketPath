import React, { useState } from 'react';
import Tooltip from '../components/Tooltip';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators } from '../store/ducks/Path';

const groupBy = (list, keyGetter) => {
  const map = new Map();
  list.forEach((item) => {
       const key = keyGetter(item);
       const collection = map.get(key);
       if (!collection) {
           map.set(key, [item]);
       } else {
           collection.push(item);
       }
  });
  return map;
}

const pages = ({ loadPaths, challenges = [], user }) => {
  useState(()=>{
    loadPaths();
  }, []);
  
  const grouped = groupBy(challenges, chall => chall.affinity).get(user.affinity);
  console.log(grouped);
  return (
    <div className="mb-64">
      <h2 className="text-5xl mb-10 text-brown font-bold">
        Aproveite a Viagem!
      </h2>
      
      <div className="flex flex-wrap justify-center">

          <div className="point-path start-path relative w-20 bg-blueteal h-20 flex items-center justify-center rounded-full p-4">
            <Tooltip placement="right" trigger="click" tooltip="Hi there!">
              <img src="/images/monitor.png" />
            </Tooltip>
          </div>

        <div className="w-full justify-center flex">
          <button className="justify-center flex z-10 point-path relative start-button border-blueteal border-4 uppercase font-semibold text-lg text-blueteal px-4 py rounded-full">
            Começar
          </button>
        </div>

        <div className="fork-path relative">
          <div className="point-path left-branch relative w-20 h-20 flex items-center justify-center rounded-full p-4">
            <img src="/images/hospital-bedroom.png" />
          </div>
          <div className="point-path relative w-20 h-20 flex items-center justify-center rounded-full p-4">
            <img src="/images/insurance-expensive.png" />
          </div>
          <div className="point-path right-branch relative w-20 h-20 flex items-center justify-center rounded-full p-4">
            <img src="/images/blood-drop-type-positive.png" />
          </div>
        </div>
      </div>

      <button className="text-blueteal uppercase text-5xl mt-20">
        Avançar
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  challenges: state.Path.challenges,
  user: state.Login.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Creators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(pages)
