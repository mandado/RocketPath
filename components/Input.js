import React from 'react';
import { Input } from '@rocketseat/unform';

export default function InputElement({
  placeholder,
  type,
  name,
}) {
  return (
    <div className="flex items-center border-b border-b-2 border-blueteal py-2 input-holder">
      <Input 
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type={type} 
        placeholder={placeholder}
        name={name} 
      />
    </div>
  );
}
