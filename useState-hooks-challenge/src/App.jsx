import React, { useState } from 'react';



const App = () => {
let[date,setDate]=useState(new Date().toLocaleTimeString());
  const incNum=()=>{
  setDate(prevCounter=>new Date().toLocaleTimeString());
 
  }
 
  return (
<div>
<h1>{date}</h1>
<button onClick={incNum}>Get Current Time</button>
</div>
  )
}

export default App