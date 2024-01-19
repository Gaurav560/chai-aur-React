import React from 'react'

const App = () => {
  const name="Gaurav";
  const currDate=new Date().toLocaleDateString();
  const currTime=new Date().toLocaleTimeString();
  return (
    <>
      <h1>Hello, My name is: {name}</h1>
      
      <p>
      
      date is :{currDate}
   
      </p>
      <p>
      
      time is :{currTime}
   
      </p>
    </>
  )
}

export default App