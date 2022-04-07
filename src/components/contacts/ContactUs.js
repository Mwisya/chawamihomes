import { Call, Email, WhatsApp } from '@material-ui/icons'
import React from 'react'
// import { useRef } from 'react'

import './contacts.css'

//  EMAIL

// import emailjs from '@emailjs/browser';

const ContactUs = () => {

  // const form = useRef();


  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_s1quspb', 'template_qvm9lxn', form.current, 'WvAo25w9UmFc7HYWn')
  
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });

  //     e.target.reset()
  // };



  return (
    <main>
        <h5>get in touch</h5>
        <h2>Contact Us</h2>

         <div className=" container contact_container">
            <div className="contact-options">
            <article className="contact_option">
                <Call/>
                <h4>Call Us</h4>
                <h5>0722799775</h5>
                <a href="tel:+254722799775">Give us a call</a>
              </article>
              <article className="contact_option">
                <Email/>
                <h4>Email</h4>
                <h5 className='contact_option-link'>info@chawamisuppliesltd.com</h5>
                <a href="mailto:info@chawamisuppliesltd.com">Send a message</a>
              </article>
              <article  className="contact_option">
                <WhatsApp/>
                <h4>WhatsApp</h4>
                <h5>+254722799775</h5>
                <a href="https://api.whatsapp.com/send?phone=+25422799775">send a mesaage</a>
              </article>
            </div>
           
           <form >
          
            <input type="text" autoComplete='false' name="name" placeholder='Entre your name' required/>

            
            <input type="email" name="email"  id="email" placeholder='Entre your email'  required/>

          
            <textarea  id=""  name="message" rows="7" placeholder='Message' required></textarea>

            <button type='submit' className='btn'>Send Email</button>
          </form>
       </div>


    </main>
  )
}

export default ContactUs