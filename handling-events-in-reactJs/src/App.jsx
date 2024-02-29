import React, { useState } from 'react'

const App = () => {

const purple='#8e44ad';
const initialName = 'Click Me to Change Color'; 
  const changedName = 'Oops! Color Changed.'; 

const[bg,setBg]=useState(purple);
const[name,setName]=useState(initialName);

const changeColor=()=>{
  setBg(prevColor => prevColor === purple ? '#ccbd1d' : purple);
  setName(prevName => prevName === initialName ? changedName: initialName);
}

  return (
    <>
    <div style={{backgroundColor:bg}}>
      <button onClick={changeColor}>{name}</button>
    </div>
    </>
  )
}

export default App