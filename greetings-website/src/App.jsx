import React from 'react'
import './App.css';
const App = () => {
const cssStyle={}

  let currDate=new Date(2024,1,20,20);
let currentTimeInHour=currDate.getHours();
let greeting='';
 if(currentTimeInHour>=0&&currentTimeInHour<=12){
greeting =' Good Morning';
cssStyle.color='green';
 }else if(currentTimeInHour>=12&&currentTimeInHour<19){
greeting=' Good Evening';
cssStyle.color='Orange';
 }
 else{greeting=' Good Night'
cssStyle.color='Black';

};

  return (
    <>
<div className='t1' >
<button className='t2'>

<h1>Hello Gaurav,
<span style={cssStyle}>{ greeting}</span>

</h1>

</button>


</div>






    </>
  )
}

export default App