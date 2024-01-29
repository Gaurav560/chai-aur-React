import React from 'react'
import './Card'
import Card from './Card.jsx'
import './App.css'
const App = () => {
  return (
    <>
    <h1 className='h11'>Netflix's Best</h1>
<Card img_src="https://wallpaperset.com/w/full/4/1/c/40991.jpg"
  title="A Neflix Original Series"
  sname="Narcos"
  link="https://www.netflix.com/in/title/80025172"
/>
<Card img_src="https://rb.gy/kepvlx"
  title="A Neflix Original Series"
  sname="Breaking Bad"
  link="https://www.netflix.com/in/title/70143836"
/>
<Card img_src="https://rb.gy/3jgqgq"
  title="A Neflix Original Series"
  sname="Better Call Saul"
  link="https://www.netflix.com/in/title/80021955"
/>

<Card img_src="https://images.immediate.co.uk/production/volatile/sites/3/2019/09/18563804-low_res-peaky-blinders-v-9255587.jpg?quality=90&webp=true&resize=1500,1001"
  title="A Neflix Original Series"
  sname="Peaky Blinders"
  link="https://www.netflix.com/in/title/80002479"
/>



<Card img_src="https://wallpaperset.com/w/full/9/b/f/33895.jpg"
  title="A Neflix Original Series"
  sname="GoodFellas"
  link="https://www.netflix.com/be-en/title/70002022"
/>
    </>
  )
}

export default App