import React,{useState} from 'react';
import './App.css';

const App = () => {
  const[myName,setMyName]=useState('Gaurav');
  
  const changeName=()=>{

    
//     if(myName==='Gaurav'){
// setMyName('sharma');}else{
//   setMyName('Gaurav');
// }
  

let val=myName;
(val==='Gaurav')?setMyName('gaurav'):setMyName('Gaurav');

  }

  return (
    <div>
<h1>{myName}</h1>
<button className="btn" onClick={changeName}>Click me please</button>

    </div>
  )
}

export default App