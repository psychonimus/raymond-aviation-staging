import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactSection from '../ContactSection/ContactSection'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <>
        <Helmet>
            <title>Contact Us | Raymond Aviation</title>
            <meta name="description" content="Get in touch with Raymond Aviation for private jet bookings, aircraft management consultations, and sales enquiries. We are available 24/7 to assist you." />
        </Helmet>
        <ContactSection />
        <Footer 
          FooterHeader="CONNECT WITH OUR AVIATION EXPERTS"
          FooterTaglineOne="Personalized Assistance"
          FooterTaglineTwo="Trusted Advice"
          FooterTaglineThree="Quick Turnaround"
          btnTxt="Enquire Now"
        />
    </>
  )
}

export default Contact