import React, { useState } from 'react';



const App = () => {
let[date,setDate]=useState(new Date().toLocaleTimeString());
  const incNum=()=>{
  setDate(prevCounter=>new Date().toLocaleTimeString());
 
  }

  setInterval(incNum,1000);
 
  return (
<div>
<h1>{date}</h1>
<button>Digitial Clock</button>
</div>
  )
}

export default App