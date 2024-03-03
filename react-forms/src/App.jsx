import React, { useState } from 'react'

const App = () => {

  const [name,setName]=useState('');
  const[fullName,setFullName]=useState();

const inputEvent=(event)=>{
  setName(event.target.value)

}
const onSubmit=(event)=>{
  event.preventDefault();
setFullName(name);
}



  return (
<>
<div className='main-div'>
<form onSubmit={onSubmit}>
<div>
  <h1>Hello {fullName}</h1>
  <input type="text" placeholder='Enter your Name' onChange={inputEvent} value={name}/>
  <button type='submit'>Click Me</button>
</div>
</form>
</div>
</>
  )
}

export default App