import React from 'react';

export default function Select({
  placeholder,
  options = [],
}) {
  return (
    <div class="flex items-center border-b border-b-2 border-blueteal py-2">
      <select 
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        placeholder={placeholder} 
      >
        <option value="">Selecione sua escolaridade</option>
        {
          options.map(option => (
            <option value={option.value}>{option.text}</option>
            )
          )
        }
      </select>
    </div>
  );
}
