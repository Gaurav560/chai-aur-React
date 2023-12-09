import Cricket from "./cricket.jsx"


function App() {
  

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
    <>
   <Cricket />
   <h1>gaurav</h1>
   <p>what is this</p>
   </>
  )
}

export default App
