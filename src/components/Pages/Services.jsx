import React from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from '../Footer/Footer'
import ServiceHero from '../ServiceHero/ServiceHero'
import ServicesSection from '../ServicesSection/ServicesSection'



const Services = () => {
  return (
    <>
    <Helmet>
        <title>Aviation Services | Raymond Aviation</title>
        <meta name="description" content="Explore our comprehensive suite of aviation services, including on-demand charter, aircraft management, fractional ownership, and more." />
    </Helmet>
    {/* <ServiceHero /> */}
    <ServicesSection />
    <Footer 
      FooterHeader="END-TO-END SOLUTIONS"
      FooterTaglineOne="Charter Ownership"
      FooterTaglineTwo="Advisory"
      FooterTaglineThree="Operations"
    />
    </>
  )
}

export default Services