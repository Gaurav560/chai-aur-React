import React, { useState } from 'react'

const App = () => {
  const purple="yellow";
  const [bgColor,setBgColor] =useState(purple);
  const [name,setName]=useState("Click Me");



const bgChanges=()=>{
let newBgColor="pink";
setBgColor(newBgColor);
setName("Oouch! :wolf");

}

const bgBack=()=>{

  setBgColor(purple);
}

  return (
 <>
 <div style={{backgroundColor:bgColor}}>
<button onClick={bgChanges} onDoubleClick={bgBack}>{name}</button>
 </div>
 </>
  )
}

export default App