import React, { useState } from 'react'

const App = () => {
  const [student,setStudent]=useState({
    fName:'',
    lName:'',
    email:'',
    pNumber:'',
    address:''
  });


const inputEvent=(event)=>{
  //array destructing
const{value, name}=event.target;
setStudent((prevValue)=>{
  
  //using spread operator
  return{
    ...prevValue,

   // The square brackets allow you to use the value of a variable as the property name.
   //we are fetching the value of name such as fName, lName, etc
    [name]:value,
  }
})
}


const onSubmits=(event)=>{
  event.preventDefault();
  alert('form submitted');
}



  return (
<>
<div>
<form onSubmit={onSubmits}>
<div>
  <h1>Hello {student.fName} {student.lName} {student.email} {student.pNumber}</h1>
  <input type="text" placeholder='Enter your FirstName' name='fName' onChange={inputEvent} 
  value={student.fName}
  />
  <input type="text" placeholder='Enter your LastName'name='lName' onChange={inputEvent} value={student.lName}/>
  <input type="email" placeholder='Enter your Email'name='email' onChange={inputEvent} value={student.email}/>
  <input type="number" placeholder='Enter your PhoneNumber'name='pNumber' onChange={inputEvent} value={student.pNumber}/>
  <input type="text" placeholder='Enter your Address'name='address' onChange={inputEvent} value={student.address}/>
  <button type='submit'>Click Me</button>
</div>
</form>
</div>
</>
  )
}

export default App