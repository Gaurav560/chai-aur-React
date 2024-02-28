import React, { useState } from 'react';



const App = () => {
let[count,setCount]=useState(5);
  const incNum=()=>{
  setCount(prevCount=>prevCount+1);
 
  }
  const decNum=()=>{
    setCount(prevCount=>prevCount-5);
  }




  return (
<div>
<h1>{count}</h1>
<button onClick={incNum} onDoubleClick={decNum}>Click</button>
</div>
  )
}

export default App