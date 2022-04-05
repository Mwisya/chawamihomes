import React from 'react'
import './gallery.css'
import Slide from './Slide'
import {sliderData} from '../../data'

const Gallery = () => {
  return (
    <div >
         <h3 className='gallery-heading'>Gallery</h3>
    <div className="gallery-container wrapper">

        {
            sliderData.map((item)=> (
                <Slide item={item} key={item.id}/>

            ))
        }

    </div>
    </div>
  )
}

export default Gallery