import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(<h1>Yo are going to win the world.</h1>)
}

//ye reactElement hm khud ke hisaab se banaye hain
const reactElement={
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'click me to visit google'
}
const anotherElement3="gaurav is my name .and gaurav is my game";

//naya reactElement hm react ke hisaab se banayenge
const reactElement1=React.createElement(
'a',
{href:"https://google.com",target:'_blank'},
"click me to visit goooogleeee",
anotherElement3



)



//jsx =javascript file mein html insert kar rahe hain
//normally html file mein js insert karte hain

const anotherElement=(
<a href="https://google.com" target='_blank'>visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
reactElement1


)
