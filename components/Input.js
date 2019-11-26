import React from 'react';

export default function Input({
  placeholder,
  type,
}) {
  return (
    <div class="flex items-center border-b border-b-2 border-blueteal py-2">
      <input 
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type={type} 
        placeholder={placeholder} 
      />
    </div>
  );
}
