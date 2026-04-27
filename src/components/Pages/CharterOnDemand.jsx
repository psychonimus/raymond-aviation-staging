import React from 'react';
import HeroBanner from '../Herobanner/HeroBanner';
import CharterOnDemandAbout from '../CharterOnDemandAbout/CharterOnDemandAbout';
import CharterContent from '../CharterContent/CharterContent';
import WhyChooseUsSection from '../WhyChooseUsSection/WhyChooseUs';
import Footer from '../Footer/Footer';

const CharterOnDemand = () => {
  return (
    <>
        <HeroBanner 
            headlineUp="Charter" 
            headlineDown="On-Demand" 
            bgVideo="/assets/videos/cod-bg-vid.mp4"
        />
        <CharterOnDemandAbout/>
        <CharterContent />
        <WhyChooseUsSection />
        <Footer 
          FooterHeader="EFFORTLESS PRIVATE FLYING"
          FooterTaglineOne="On-Demand Charter"
          FooterTaglineTwo="Flexible Scheduling"
          FooterTaglineThree="Total Convenience"
        />
        

    </>
  )
}

export default CharterOnDemand