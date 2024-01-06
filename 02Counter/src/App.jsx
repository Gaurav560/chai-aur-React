import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(7);

  //let counter=7;

  const addValue= ()=>{
    if(counter<20)
    {  
      //prevCounter ya koi bhi value de skate hai arrow fn mein
      //aur usko paas kar denge setCounter fn ke parameter mein 
      //ye counter ke previous state ko remember kar ke rakhta hai .
      setCounter(preVCounter=>preVCounter+1);
      setCounter(preVCounter=>preVCounter+1);
      setCounter(preVCounter=>preVCounter+1);
      setCounter(preVCounter=>preVCounter+1);
      setCounter(preVCounter=>preVCounter+1);
    
    }
  

  }

  const decreaseValue= ()=>{
    if(counter>0){ 
      
      setCounter(counter=>counter-1);
      setCounter(counter=>counter-1);
      setCounter(counter=>counter-1);
      setCounter(counter=>counter-1);
      setCounter(counter=>counter-1);
    
    }
   

  }
  return (
    <>
      
    <h1>Chai Aur React</h1>

    <h2>Counter Value:{counter}</h2>

    <button onClick={addValue}>Add Value:{counter}</button>

    <br/>
    <button onClick={decreaseValue}>Decrease Value:{counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
