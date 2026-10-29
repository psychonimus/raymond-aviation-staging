import React from 'react'
import SEO from '../SEO/SEO'
import Footer from '../Footer/Footer'
import ServiceHero from '../ServiceHero/ServiceHero'
import ServicesSection from '../ServicesSection/ServicesSection'

const Services = () => {
  return (
    <>
    <SEO
        title="Aviation Services | Raymond Aviation"
        description="Explore our comprehensive suite of aviation services, including on-demand charter, aircraft management, fractional ownership, and more."
        keywords="aviation services, luxury jet charter, aircraft fleet management, jet card program, aircraft acquisition"
        path="/services"
    />
    {/* <ServiceHero /> */}
    <ServicesSection />
    <Footer 
      FooterHeader="END-TO-END SOLUTIONS"
      FooterTaglineOne="Charter Ownership"
      FooterTaglineTwo="Advisory"
      FooterTaglineThree="Operations"
      btnTxt="Enquire Now"
    />
    </>
  )
}

export default Services