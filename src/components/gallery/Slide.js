import React from 'react'
import './slide.css'

const Slide = ({item}) => {
  return (
    <div className="slide">

      <a href={item.image} target="_blank"  rel="noreferrer">
         <img src={item.image} alt="" className='slide__image'/>
      </a>
    </div>
  )
}

export default Slide