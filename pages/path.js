import React, { useState } from 'react';
import Tooltip from '../components/Tooltip';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators } from '../store/ducks/Path';
import Link from 'next/link';

const groupBy = function(xs = [], key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const pages = ({ loadPaths, challenges, user }) => {
  useState(()=> {
    loadPaths();
  }, []);

  
  const userChallengesId = (user.userChallenges || []).map(item => item.id);
  const grouped = groupBy(challenges, 'affinity')[user.affinity];
  const groupedLvl = groupBy(grouped, 'level') || [];
  return (
    <div className="mb-64">
      <h2 className="text-5xl mb-10 text-brown font-bold">
        Aproveite a Viagem!
      </h2>
      
      <div className="flex flex-wrap justify-center overflow-y-scroll">
        {Object.keys(groupedLvl).map(lvl => {
          return(
            <div className="w-full border-2 p-5 mb-10 border-dashed relative border-gray-400 level-group" key={lvl}>
              <div className="mb-10 block text-xl text-blueteal font-semibold">Level {lvl}</div>
              <div className="flex justify-center -mx-4">
                {groupedLvl[lvl].map(challenge => {
                  return(
                    <Link href={!userChallengesId.includes(challenge.id) ? `/challenge/${challenge.id}` : '/#'}>
                      <a className={`flex justify-center flex-wrap ${userChallengesId.includes(challenge.id) ? `text-green-500`: `hover:text-yellowOption`}`}>
                        <div className={`challenge ${userChallengesId.includes(challenge.id) ? `bg-green-500` : `bg-blueteal hover:bg-yellowOption`} p-6 mx-4 rounded-full`}>
                              <img src="/images/monitor.png" />
                        </div>
                        <p className="mt-4 w-full">{challenge.title}</p>
                      </a>
                    </Link>
                  )
                })}
              </div>
              
              
            </div>
        )})}
        
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
