import React from 'react';
import Card from './Card';
import './App.css';
import Sdata from './Sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favStreamingPlatform="netflix";

const App = () => {
  return (
    <>
      <h1 className='h11'>Netflix's Best</h1>
      {/* rendering a jsx page like Netflix or Amazon */}
   
{favStreamingPlatform==='netflix'?<Netflix/>:<Amazon/>}
    </>
  )
}

export default App;
