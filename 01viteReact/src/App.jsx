import Cricket from "./cricket.jsx"


function App() {
  



  const username="gauri,keep learning js and react.do not fear .keeep going";

  return (
    //you can return only one tag 
    //so we use fragment to enclose multiple tag in one tag
    //component fn ko blote hai jo hm return kar wa rahe hain 
    //file ka naam .jsx se khatm hoga -best practice
    //normal react app mein .js bhi hota hai,par vite mein 
    //.jsx hi rakhte hain.
    //best practice-file ka naam capital letter se shuru hota hai 
    //aur jab kisi fn ko export kar wate hain to usi fn ko component bolte hain
    //fn ka naam hamesa capital letter mein hoga
    //vite library mein js page directly script tag ke through inserted kiya jaata hai  html page mein.
    //jo aapka browser dom banata hai usi ke parallel ek reactdom bhi banta hai .
    //saare method react and react dom dependencies mein hote hain
    //browser mein react dom use karte hain
    //mobile mein react native use karte hain 

//how to use variables  of js file inside a html tag




// {expression} -> isko bolte hain js ka evaluated expression
//html tag ke andar exprssion ka final outcome likha hoga.
//jo bhi evaluation karna hai ,wo html tag ke bahar kar ke aao.
//aur html tag mein final outcome use karo 

    <>
   <Cricket />
   <h1>{username}</h1>
   <p>what is this</p>
   </>
  )
}

export default App
