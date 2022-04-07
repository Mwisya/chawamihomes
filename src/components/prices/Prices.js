import { KingBedOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import './prices.css'

const Prices = () => {
  return (
    <div className="prices-container">
      <h2>Amenities</h2>

      <div className="items">


      <ul>
        <li><StarBorderOutlined className='list-icons'/> 3 Bedrooms plus sq</li>
        <li><StarBorderOutlined className='list-icons'/>5 Beds in total </li>
        <li><StarBorderOutlined className='list-icons'/> All room en-suite</li>
        <li><StarBorderOutlined className='list-icons'/>Accomodate upto 6 guests </li>
        <li><StarBorderOutlined className='list-icons'/>Fully equiped kitchen </li>
        <li><StarBorderOutlined className='list-icons'/>Smart TV and  free wi-fi </li>
        <li><StarBorderOutlined className='list-icons'/>Elevator </li>
        <li><StarBorderOutlined className='list-icons'/>Ocean view </li>
        <li><StarBorderOutlined className='list-icons'/>Rooftop swimming pool </li>
        <li><StarBorderOutlined className='list-icons'/>Ample parking space </li>
        <li><StarBorderOutlined className='list-icons'/>Max security 24/7 </li>
        <li><StarBorderOutlined className='list-icons'/>Gymnasium </li>
      </ul>

        <div className="price-wrapper">
          
        <div className='price-info'>
          <p> <KingBedOutlined className='price-icons'/>  1 Bedroom</p>
          <h5>Price : <small className='price'>Ksh 15,000</small></h5>
        </div>
        <div className='price-info'>
          <p> <KingBedOutlined className='price-icons'/>   2 Bedroom</p>
          <h5>Price : <small className='price'>Ksh 25,000</small></h5>
        </div>

        <div className='price-info'>
          <p> <KingBedOutlined className='price-icons'/>  3 Bedrooms</p>
          <h5>Price : <small className='price'>Ksh 20,000</small></h5>
        </div>

        <div className='price-info'>
          <p> <KingBedOutlined className='price-icons'/>  family 5 Bedrooms</p>
          <h5>Price : <small className='price'>Ksh 50,000</small></h5>
        </div>
        </div>

      </div>

      <p className='customer_care'>For more information call us now on:</p>
      <a href="tel:0722799775" className='customer_care-link'>0722799775</a>
    </div>
  )
}

export default Prices