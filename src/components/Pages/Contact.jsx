import React from 'react'
import SEO from '../SEO/SEO'
import ContactSection from '../ContactSection/ContactSection'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <>
        <SEO
            title="Contact Us | Raymond Aviation"
            description="Get in touch with Raymond Aviation for private jet bookings, aircraft management consultations, and sales enquiries. We are available 24/7 to assist you."
            keywords="contact Raymond Aviation, private jet booking contact, aircraft charter enquiry, 24/7 aviation concierge"
            path="/contact"
        />
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