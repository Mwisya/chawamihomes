import React from 'react'
import './about.css'
import Notification from '../../components/Announcement/Notification'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Sponsors from '../../components/sponsors/Sponsors'
import Details from '../../components/Details/Details'
import Prices from '../../components/prices/Prices'
import Wtg from '../../components/what-to-get/Wtg'
import ContactUs from '../../components/contacts/ContactUs'

const About = () => {
  return (
    <div>
        <Notification/>
        <Navbar/>
        <Details/>
        <Wtg/>
        <Prices/>
        <Sponsors/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default About