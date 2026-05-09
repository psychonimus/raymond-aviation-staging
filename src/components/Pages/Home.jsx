import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../Hero/Hero'
import ParallaxEffect from '../ParallaxEffect/ParallaxEffect'
import AboutSection from '../AboutSection/AboutSection'
import ServicesSection from '../ServicesSection/ServicesSection'
import WhyChooseUsSection from '../WhyChooseUsSection/WhyChooseUs'

const Home = () => {
  return (
    <>
        <Helmet>
            <title>Raymond Aviation | Luxury Private Jet Charter & Management</title>
            <meta name="description" content="Raymond Aviation offers premium private jet charter, aircraft management, and sales services. Experience luxury, safety, and efficiency with our world-class aviation solutions." />
        </Helmet>
        <Hero />
        {/* <ParallaxEffect />
        <AboutSection />  
        <ServicesSection />
        <WhyChooseUsSection /> */}
    </>
  )
}

export default Home