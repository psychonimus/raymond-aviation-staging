import React from 'react'
import AboutHero from '../AboutHero/AboutHero'
import AboutSection from '../AboutSection/AboutSection'

import Footer from '../Footer/Footer'

import VisionMissionValues from '../VisionMissionValues/VisionMissionValues'
import Testimonials from '../Testimonials/Testimonials'

const About = () => {
  return (
    <>
        {/* <AboutHero /> */}
        <div>
          <AboutSection />
          <VisionMissionValues />
          <Testimonials />
        </div>

        
        <Footer 
          FooterHeader="ELEVATING PRIVATE AVIATION"
          FooterTaglineOne="Expertise"
          FooterTaglineTwo="Trust"
          FooterTaglineThree="End-to-End Solutions"
        />
        
    </>
  )
}

export default About