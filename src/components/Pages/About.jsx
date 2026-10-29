import React from 'react'
import SEO from '../SEO/SEO'
import AboutHero from '../AboutHero/AboutHero'
import AboutSection from '../AboutSection/AboutSection'

import Footer from '../Footer/Footer'

import VisionMissionValues from '../VisionMissionValues/VisionMissionValues'
import Testimonials from '../Testimonials/Testimonials'

const About = () => {
  return (
    <>
        <SEO
            title="About Us | Raymond Aviation"
            description="Learn about Raymond Aviation's vision, mission, and commitment to excellence in private aviation. Our legacy of trust and expertise makes us a leader in luxury air travel."
            keywords="about Raymond Aviation, private jet company, luxury aviation leader, business aviation India"
            path="/about"
        />
        <AboutSection />
        <VisionMissionValues />
        {/* <Testimonials /> */}

        
        <Footer 
          FooterHeader="ELEVATING PRIVATE AVIATION"
          FooterTaglineOne="Expertise"
          FooterTaglineTwo="Trust"
          FooterTaglineThree="End-to-End Solutions"
          btnTxt="Enquire Now"
        />
        
    </>
  )
}

export default About