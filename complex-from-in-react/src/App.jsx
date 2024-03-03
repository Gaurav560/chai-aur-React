import React, { useState } from 'react'

const App = () => {
  const [student,setStudent]=useState({
    fName:'',
    lName:'',
    email:'',
    pNumber:'',
  });


const inputEvent=(event)=>{
// const value=event.target.value;
// const name=event.target.name;

//doing the same with the help of array destructuring
const{value, name}=event.target;



setStudent((prevValue)=>{
  if(name==='fName'){
    return{
      fName:value,
      lName:prevValue.lName,
      email:prevValue.email,
      pNumber:prevValue.pNumber
    };
  }else if(name==='lName'){
    return{
      fName:prevValue.fName,
      lName:value,
      email:prevValue.email,
      pNumber:prevValue.pNumber

    };
  }else if(name==='email'){
    return{
      fName:prevValue.fName,
      lName:prevValue.lName,
      email:value,
      pNumber:prevValue.pNumber
    };
  }else{
    return{
      fName:prevValue.fName,
      lName:prevValue.lName,
      email:prevValue.email,
      pNumber:value
    };
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
  //value={student.fName}
  />
  <input type="text" placeholder='Enter your LastName'name='lName' onChange={inputEvent} value={student.lName}/>
  <input type="email" placeholder='Enter your Email'name='email' onChange={inputEvent} value={student.email}/>
  <input type="number" placeholder='Enter your PhoneNumber'name='pNumber' onChange={inputEvent} value={student.pNumber}/>
  <button type='submit'>Click Me</button>
</div>
</form>
</div>
</>
  )
}

export default App