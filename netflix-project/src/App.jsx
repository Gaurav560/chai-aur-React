import React from 'react'
import './Card'
import Card from './Card.jsx'
import './App.css'
import Sdata from './Sdata.jsx'


console.log(Sdata[0]);

const App = () => {
  return (
    <>
    <h1 className='h11'>Netflix's Best</h1>
<Card img_src={Sdata[0].img_src}
  title={Sdata[0].title}
  sname={Sdata[0].sname}
  link={Sdata[0].link}
/>
<Card img_src={Sdata[1].img_src}
  title={Sdata[1].title}
  sname={Sdata[1].sname}
  link={Sdata[1].link}

/>

<Card img_src={Sdata[2].img_src}
  title={Sdata[2].title}
  sname={Sdata[2].sname}
  link={Sdata[2].link}
/>

<Card img_src={Sdata[3].img_src}
  title={Sdata[3].title}
  sname={Sdata[3].sname}
  link={Sdata[3].link}
/>

<Card img_src={Sdata[4].img_src}
  title={Sdata[4].title}
  sname={Sdata[4].sname}
  link={Sdata[4].link}
/>

    </>
  )
}

export default App