import React, { useState } from 'react'

const App = () => {

  const [name,setName]=useState('');
  const [lastName,setLastName]=useState('');
  const[fullName,setFullName]=useState();
  const[lastFullName,setLastFullName]=useState();

const inputEvent=(event)=>{
  setName(event.target.value)

}


const inputEventTwo=(event)=>{
  setLastName(event.target.value)

}
const onSubmits=(event)=>{
  event.preventDefault();
setFullName(name);
setLastFullName(lastName);
}



  return (
<>
<div>
<form onSubmit={onSubmits}>
<div>
  <h1>Hello {fullName} {lastFullName}</h1>
  <input type="text" placeholder='Enter your FirstName' onChange={inputEvent} value={name}/>
  <input type="text" placeholder='Enter your LastName' onChange={inputEventTwo} value={lastName}/>
  <button type='submit'>Click Me</button>
</div>
</form>
</div>
</>
  )
}

export default App