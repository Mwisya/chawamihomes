import React from 'react'
import './sponsors.css'

import Trendslogo from '../../assets/Trendslogo.png'

const Sponsors = () => {
  return (
    <div className="sponsors_container">
      <h1 >Visit</h1>

     <div className="sponsors_wrapper">

      <div className="image_container">

        <img src={Trendslogo} alt={Trendslogo} />

      </div>

        <div className='chawami'>
          <h1>CHAWAMI</h1>
          <p>General suppliers ltd</p>
        </div>
     </div>
    </div>
  )
}

export default Sponsors