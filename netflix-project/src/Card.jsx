import React from 'react'
import Images from './images'
const Card = (props) => {
  return (
    
    <div className='cards'>
    <div className="card">

     <Images img_src={props.img_src}/>
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