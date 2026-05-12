import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroBanner from '../Herobanner/HeroBanner';
import CharterOnDemandAbout from '../CharterOnDemandAbout/CharterOnDemandAbout';
import CharterContent from '../CharterContent/CharterContent';
import WhyChooseUsSection from '../WhyChooseUsSection/WhyChooseUs';
import Footer from '../Footer/Footer';

const CharterOnDemand = () => {
  return (
    <>
        <Helmet>
            <title>Private Jet Charter on Demand | Raymond Aviation</title>
            <meta name="description" content="Book your private jet with Raymond Aviation. Our on-demand charter service provides flexible, reliable, and luxurious travel tailored to your schedule." />
        </Helmet>
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