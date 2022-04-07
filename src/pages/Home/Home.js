import React from 'react'
import Inside from '../../components/Apartment/Inside'
import Display from '../../components/Display/Display'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Notification from '../../components/Announcement/Notification'
import Sponsors from '../../components/sponsors/Sponsors'
import Gallery from '../../components/gallery/Gallery'
import Wtg from '../../components/what-to-get/Wtg'
import Prices from '../../components/prices/Prices'
import ContactUs from '../../components/contacts/ContactUs'


const Home = () => {
  return (
    <div>
        <Notification/>
        <Navbar/>
        <Display/>
        <Inside/>
        <Gallery/>
        <Wtg/>
        <Prices/>
        <Sponsors/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Home