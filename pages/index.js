import React, { useEffect, useState} from 'react'
import posed, { PoseGroup } from 'react-pose';

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

export default function index() {
  const [visible, setVisible]= useState(false);
  useEffect(()=>{
    setVisible(true)
  }, [])
  return (
    <TextWrapper className="pb-64 text-center" pose={visible && 'visible'}>
      <p className="text-5xl font-medium w-full">
        Descubra e evolua<br/><span className="font-light">seu caminho</span> tech.
      </p>

      <button onClick={() => setModalLogin(true)} className="uppercase text-2xl bg-transparent hover:bg-blueteal text-blueteal font-medium hover:text-white py-2 px-16 mt-8 border-4 border-blueteal hover:border-transparent">
        Vamos lá
      </button>
    </TextWrapper>
  )
}


