import React from 'react'
import Card from './Card'
import Sdata from './Sdata'
const Amazon = () => {
  return (
    <div>

<Card 
        key={Sdata[4].key}
          img_src={Sdata[4].img_src}
          title={Sdata[4].title}
          sname={Sdata[4].sname}
          link={Sdata[4].link}
        />

    </div>
  )
}

export default Amazon