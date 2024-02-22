import React from 'react'
import SlotM from './SlotM'
import True from './True'
import False from './False'



const App = () => {
  return (
    <div>
<h1 className='heading_style'>🎰 Welcome to the <span style={{fontWeight:"bold"}}>Slot Machine Game</span> 🎰 </h1>

<div className='slotmachine'> 

<SlotM x='🍎' y='🍌' z='🥉'/>
<hr />
<SlotM x='🦘' y='♾️' z='😽'/>
<hr />
<SlotM x='🥼' y='🅰️' z='🍰' />

</div>
     
    </div>
  )
}

export default App