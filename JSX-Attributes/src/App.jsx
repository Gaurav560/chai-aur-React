import React from 'react'

const App = () => {

  const name='Gaurav';
  const image1="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  
  const image2="https://images.pexels.com/photos/2519833/pexels-photo-2519833.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
 

  const link='https://telusko.com/';
  return (
    <>
      <h1 contentEditable="true">My name is:{name} </h1>
      <img src={image1} alt="Image not found" />
      <a href={link}>

      <img src={image2} alt="Image not found" />
      </a>
    
    </>
  )
}

export default App