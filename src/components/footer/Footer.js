import { Call, Email, WhatsApp } from '@material-ui/icons'
import React from 'react'
import { useRef } from 'react'
import './footer.css'

//  EMAIL

import emailjs from '@emailjs/browser';

const Footer = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s1quspb', 'template_qvm9lxn', form.current, 'WvAo25w9UmFc7HYWn')
  
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };



  return (
    <footer>
          <h3 className='title'>Contact Us</h3>
        <div className="footer-wrapper">
      
          <form onSubmit={sendEmail} ref={form} >
            <label htmlFor="name">Name:</label>
            <input type="text"  name="name" placeholder='entre your name'/>

            <label htmlFor="email">Email:</label>
            <input type="email" name="email"  id="email" placeholder='entre your email' />

            <label htmlFor="message">Message:</label>
            <textarea  id="" cols="30" name="message" rows="7" placeholder='message'></textarea>

            <button type='submit' className='btn'>Send Email</button>
          </form>
          
          <div className="contact-details">
            <p className='contact-detail'> <Call className='contact-icon'/> <a href="tel:0722799775">Customer Care</a> </p>
            <p className='contact-detail'> <WhatsApp className='contact-icon'/> <a href="http://api.whatsapp.com/send?phone=+0722799775">WhatsApp</a> </p>
            <p className='contact-detail's> <Email className='contact-icon'/> <a href= "mailto:info@chawamisuppliesltd.com">Email</a> </p>
          </div>
        </div>

          <p className='copyright'> Copyright 2022</p>
    </footer>
  )
}


export default Footer