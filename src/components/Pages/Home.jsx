import React from 'react'
import SEO from '../SEO/SEO'
import Hero from '../Hero/Hero'
import ParallaxEffect from '../ParallaxEffect/ParallaxEffect'
import AboutSection from '../AboutSection/AboutSection'
import ServicesSection from '../ServicesSection/ServicesSection'
import WhyChooseUsSection from '../WhyChooseUsSection/WhyChooseUs'

const Home = () => {
  return (
    <>
      <SEO
        title="Raymond Aviation | Luxury Private Jet Charter & Management"
        description="Raymond Aviation offers premium private jet charter, aircraft management, and sales services. Experience luxury, safety, and efficiency with our world-class aviation solutions."
        keywords="private jet charter, luxury aviation, aircraft management, private jet rental, jet card, Raymond Aviation"
        path="/"
      />
      <Hero />
      {/* <ParallaxEffect />
      <AboutSection />  
      <ServicesSection />
      <WhyChooseUsSection /> */}
    </>
  )
}

export default Home