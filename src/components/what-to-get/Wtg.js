import { Kitchen, Pool, WorkOutlined } from '@material-ui/icons'

import React from 'react'
import './wtg.css'

const Wtg = () => {
  return (
    <div className='wtg__container'>
      <h6>Come and Enjoy</h6>
      <h2>Savour Rooftop;</h2>

      <div className="cards">
        <div className="card">
          <Kitchen/>
          <h3>Berbaque</h3>
        </div>
        <div className="card">
          <Pool/>
          <h3>Swimming pool</h3>
        </div>
        <div className="card">
          <Kitchen/>
          <h3>Pure Luxury</h3>
        </div>
        <div className="card">
          <WorkOutlined/>
          <h3>Modern GYM</h3>
        </div>
      </div>
    </div>
  )
}

export default Wtg