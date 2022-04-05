import { KingBedOutlined } from '@material-ui/icons'
import React from 'react'
import './prices.css'

const Prices = () => {
  return (
    <div className="prices-container">
      <h3>Cost per Night</h3>

      <div className="price-wrapper">
      <div className='price-info'>
        <p> <KingBedOutlined className='price-icons'/>  Two Bedrooms</p>
        <h5>Price : <small className='price'>Ksh 15,000</small></h5>
      </div>

      <div className='price-info'>
        <p> <KingBedOutlined className='price-icons'/>  0ne Bedrooms</p>
        <h5>Price : <small className='price'>Ksh 10,000</small></h5>
      </div>
      </div>
      <p className='customer_care'>For more information call us now on:</p>
      <a href="tel:0722799775" className='customer_care-link'>0722799775</a>
    </div>
  )
}

export default Prices