import React, { useState } from 'react';
import Tooltip from '../components/Tooltip';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators } from '../store/ducks/Path';

const groupBy = function(xs = [], key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const pages = ({ loadPaths, challenges, user }) => {
  useState(()=>{
    loadPaths();
  }, []);
  
  const grouped = groupBy(challenges, 'affinity')[user.affinity];
  const groupedLvl = groupBy(grouped, 'level') || [];
  return (
    <div className="mb-64">
      <h2 className="text-5xl mb-10 text-brown font-bold">
        Aproveite a Viagem!
      </h2>
      
      <div className="flex flex-wrap justify-center">
        {Object.keys(groupedLvl).map(lvl => {
          return(
            <div className="level-holder" key={lvl}>
              <span className="level-name">Level</span>
              <div className="holder flex">
                {groupedLvl[lvl].map(challange => {
                  console.log(challange)
                  return(
                    <div className="challenge">
                      <Tooltip placement="right" trigger="hover" tooltip="Hi there!">
                        <img src="/images/monitor.png" />
                      </Tooltip>
                    </div>
                  )
                })}
              </div>
              
              
            </div>
        )})}
        
{/*         
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
        </div> */}
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
