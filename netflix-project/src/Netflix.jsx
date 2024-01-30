import React from 'react'
import Sdata from './Sdata'
import Card from './Card'

const Netflix = () => {
  return (
    <>
  <Card 
        key={Sdata[1].key}
          img_src={Sdata[1].img_src}
          title={Sdata[1].title}
          sname={Sdata[1].sname}
          link={Sdata[1].link}
        />

    </>
  )
}

export default Netflix