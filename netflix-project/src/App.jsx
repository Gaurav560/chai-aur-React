import React from 'react';
import Card from './Card';
import './App.css';
import Sdata from './Sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favStreamingPlatform="";
const CheckFavStreamingPlatform=()=>{
if(favStreamingPlatform==='Netflix'){
  return <Netflix/>
}else{
  return <Amazon/>
}
}
const App = () => {
  return (
    <>
      <h1 className='h11'>Netflix's Best</h1>
      {/* rendering a function */}
      <CheckFavStreamingPlatform/>

    </>
  )
}

export default App;
