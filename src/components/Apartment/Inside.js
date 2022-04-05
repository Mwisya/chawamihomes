import React from 'react'
import './inside.css'
import Items from './Items'
import { data } from '../../data'


const Inside = () => {
  return (
    <section className='section-modifier'>
      {
        data.map(data =>(
          <Items data={data} key={data.id}/>
        ))
      }
    </section>
  )
}

export default Inside