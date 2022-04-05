import React from 'react'
import './display.css'
import Flower from '../../assets/Flower.jpg'

const Display = () => {
    return (
        <div className="display-container">
            <img src={Flower} alt="" className="bg-image" />
            <div className="summary">
                <h2 className="slogan">Delight <span>Tranquility</span> Pleasure</h2>
                <article>Do you want visit the coast for a vacation, business trip or holiday.
                Look no further
                at CHAWAMIhomes we fullfill your stay with pure luxury Beach front  bedrooms, huge sitting rooms, clean and spacious kitchen with clean water, Balcony to view the ocean, rooftop swimming pool, Berbaque area and modern state gymnasium ...
                </article>
            </div>
        </div>
    )
}

export default Display
