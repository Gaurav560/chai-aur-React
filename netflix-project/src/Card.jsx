import React from 'react'

const Card = (props) => {
  return (
    
    <div className='cards'>
    <div className="card">

      <img src={props.img_src} alt="myPic" className='card_img' />
      <div className="cardInfo">
        <span className="card_cateogry">{props.title}</span>
        <h2 className="card_title">{props.sname}</h2>
        <a href={props.link} target='_blank'>
          <button className='btn'>Watch Now</button>
        </a>
      </div>
    </div>
    </div>

  )
}

export default Card