import React from 'react';
import Card from './Card';
import './App.css';
import Sdata from './Sdata';

const App = () => {
  return (
    <>
      <h1 className='h11'>Netflix's Best</h1>
      {Sdata.map((val) => (
        <Card 
          img_src={val.img_src}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      ))}
    </>
  )
}

export default App;
