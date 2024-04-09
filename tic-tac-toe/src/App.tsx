import React, { useState } from 'react';
import './App.css'

export default function Board() {
  return (
    <>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square() {
  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    setValue('X');
  }
  
  return (
    <button className="square" onClick={handleClick}>{value}</button>
  );
}
