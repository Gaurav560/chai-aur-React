import React from 'react'
import './App.css'
const App = () => {

  const name='Gaurav';
  const image1="https://picsum.photos/200/300";
  const image2="https://picsum.photos/250/300";
  const image3="https://picsum.photos/255/300";
  const image4="https://picsum.photos/260/300";

 

  const link='https://telusko.com/';
  return (
    <>
      <h1 className='name'>My name is:{name} and I am learning React </h1>
      <div className='he'>

      <img src={image1} alt="Image not found" className='k1' />
      <img src={image3} alt="Image not found" className='k1' />
      <img src={image4} alt="Image not found" className='k1'/>
 
      <a href={link}>

      <img src={image2} alt="Image not found" className='k1' />
      </a>
      </div>
      
    
    </>
  )
}

export default App