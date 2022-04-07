import { Call, Copyright, Email, WhatsApp } from '@material-ui/icons'
import React from 'react'
import './footer.css'



const Footer = () => {

  return (
    <footer>

      <div className="logo"> <h1>CHAWAMI<span>homes</span></h1> </div>

      <small>savour every moment with pure luxury</small>
      <div className="social-media">
      <a href="tel:+254722799775"> <Call/> </a>

      <a href="mailto:info@chawamisuppliesltd.com"> <Email/> </a>
      <a href="https://api.whatsapp.com/send?phone=+25422799775"> <WhatsApp/> </a>
      </div>

      <p>Copyright <Copyright className='copyright-icon'/> 2022</p>
    </footer>
  )
}


export default Footer