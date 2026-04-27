import React from 'react'
import Footer from '../Footer/Footer'
import ServiceHero from '../ServiceHero/ServiceHero'
import ServicesSection from '../ServicesSection/ServicesSection'



const Services = () => {
  return (
    <>
    {/* <ServiceHero /> */}
    <ServicesSection />
    <Footer 
      FooterHeader="END-TO-END PRIVATE AVIATION"
      FooterTaglineOne="Charter Ownership"
      FooterTaglineTwo="Advisory"
      FooterTaglineThree="Operations"
    />
    </>
  )
}

export default Services