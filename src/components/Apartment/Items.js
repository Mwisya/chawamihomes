import React from 'react'
import './items.css'

const Items = ({data}) => {
  return (
    <div className='items_container'>
        <a href={data.img} target= '_blank' rel="noreferrer">
          <img src={data.img} alt="" className='items_container-image'/>
        </a>
        <p className='comments'>{data.tittle}</p>
    </div>
  )
}

export default Items