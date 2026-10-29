import React from 'react';
import SEO from '../SEO/SEO';
import HeroBanner from '../Herobanner/HeroBanner';
import CharterOnDemandAbout from '../CharterOnDemandAbout/CharterOnDemandAbout';
import CharterContent from '../CharterContent/CharterContent';
import WhyChooseUsSection from '../WhyChooseUsSection/WhyChooseUs';
import Footer from '../Footer/Footer';

const CharterOnDemand = () => {
  return (
    <>
        <SEO
            title="Private Jet Charter on Demand | Raymond Aviation"
            description="Book your private jet with Raymond Aviation. Our on-demand charter service provides flexible, reliable, and luxurious travel tailored to your schedule."
            keywords="charter on demand, private jet booking, business jet charter, luxury private flights"
            path="/charter-on-demand"
        />
        <HeroBanner 
            headlineUp="Charter" 
            headlineDown="On-Demand" 
            bgVideo="/assets/videos/cod-bg-vid.webm"
            btnTxt="Request Charter Quote"
        />
        <CharterOnDemandAbout/>
        <CharterContent />
        <WhyChooseUsSection />
        <Footer 
          FooterHeader="EFFORTLESS PRIVATE FLYING"
          FooterTaglineOne="On-Demand Charter"
          FooterTaglineTwo="Flexible Scheduling"
          FooterTaglineThree="Total Convenience"
          btnTxt="Request Charter Quote"
        />
        

    </>
  )
}

export default CharterOnDemand