import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';

export default function Interests({
  name,
  options,
  ...rest
}) {
  const ref = useRef([]);
  const { fieldName, registerField, defaultValue, error, } = useField(name);
  const [items, setItems] = useState([]);
  
  function setValue(itemSelected) {
    console.log(itemSelected);
    return [];
    if(!itemSelected) return;
    
    const cbFilter = item => item.value === itemSelected.value;
    const index = items.findIndex(cbFilter);
    
    const newItems = index > -1 ? items.filter(cbFilter) : items.concat(itemSelected)
    
    setItems(newItems);
    console.log(itemSelected, items);
    return [];
  }


  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: '',
      defaultValue: [],
    });
  }, [ref.current, fieldName]); // eslint-disable-line


  return (
    <div>
      {
        options.map((option, idx) => {
          return (
            <div className="w-3/12 px-4 mb-6 block">
              <button               
              ref={el => {
                ref.current[idx] = el;
              }} value={option.value} onClick={() => setValue(option)} className="shadow bg-white rounded-lg p-6 text-2xl text-brown w-full">
                {option.text}
              </button>
            </div>
          );
        })
      }

      {error && <span>{error}</span>}
    </div>
  );
}
