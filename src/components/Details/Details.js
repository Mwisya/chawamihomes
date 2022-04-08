import {Call, LocationOn } from '@material-ui/icons'
import React from 'react'
import './details.css'

const Details = () => {
  return (
    <div className="details__container">
        <div className='info__container'>
            <h4>We savour your stay with</h4>
            <h2>Delight<span className='line__color'>|</span>Tranquility<span className='line__color'>|</span>Pleasure</h2>

              <p>Do you want visit the coast for a vacation, business trip or holiday.
                Look no further
                at CHAWAMIhomes we fullfill your stay with pure luxury Beach front  bedrooms, huge sitting rooms, clean and spacious kitchen with clean water, Balcony to view the ocean, rooftop swimming pool, Berbaque area and modern state gymnasium
            </p>
        </div>
        <div className="contact__details-container">
          <div className="contacts">
            <LocationOn className='contact__icon'/>
            <h4 >Location:  Nyali</h4>
          </div>
          <div className="contacts">
            <Call className='contact__icon'/>
            <h4><a href="tel:+254722799775
            ">Customer Care</a></h4>
          </div>y
        </div>
    </div>
  )
}

export default Details