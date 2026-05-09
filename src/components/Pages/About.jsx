import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutHero from '../AboutHero/AboutHero'
import AboutSection from '../AboutSection/AboutSection'

import Footer from '../Footer/Footer'

import VisionMissionValues from '../VisionMissionValues/VisionMissionValues'
import Testimonials from '../Testimonials/Testimonials'

const About = () => {
  return (
    <>
        <Helmet>
            <title>About Us | Raymond Aviation</title>
            <meta name="description" content="Learn about Raymond Aviation's vision, mission, and commitment to excellence in private aviation. Our legacy of trust and expertise makes us a leader in luxury air travel." />
        </Helmet>
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