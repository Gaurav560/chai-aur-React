import React from 'react'

const Images = (props) => {
  return (
    <div>
         <img src={props.img_src} alt="myPic" className='card_img' />
    </div>
  )
}

export default Images