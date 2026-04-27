import React from 'react'
import ContactSection from '../ContactSection/ContactSection'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <>
        <ContactSection />
        <Footer 
          FooterHeader="CONNECT WITH OUR AVIATION EXPERTS"
          FooterTaglineOne="Personalized Assistance"
          FooterTaglineTwo="Trusted Advice"
          FooterTaglineThree="Quick Turnaround"
        />
    </>
  )
}

export default Contact