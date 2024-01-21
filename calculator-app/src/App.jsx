import React from 'react'
import './Calculator.jsx'
import {Add,Subtract,Multiply,Divide} from './Calculator.jsx'
import  './App.css'
import './index.css'
const App = () => {
  return (
    <div className='hi'>
<h1>Sum of two numbers is : {Add(4,5)}</h1>
<h1>Multiply of two numbers is : {Multiply(4,5)}</h1>
<h1>Subtract of two numbers is : {Subtract(4,5)}</h1>
<h1>Divide of two numbers is : {Divide(13,5).toFixed(2)}</h1>

      
    </div>
  )
}

export default App