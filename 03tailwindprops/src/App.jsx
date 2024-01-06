import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/card'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
let someObj={
  name:"Gaurav",
  age:25

}
let newArray=[1,2,34]
  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl mb-4'>Tailwind Test</h1>
  <Card username="chai aur code" btnText="clickMe"/>
  <h1 className='mb-5'></h1>
  <Card username="gauravSharma"  />
    </>
  )
}

export default App
