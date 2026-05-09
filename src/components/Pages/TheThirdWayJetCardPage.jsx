import React from 'react';
import { Helmet } from 'react-helmet-async';
import TheThirdWayJetCard from '../FullBlogs/TheThirdWayJetCard';
import Footer from '../Footer/Footer';

const TheThirdWayJetCardPage = () => {
  return (
    <>
      <Helmet>
        <title>The Third Way: Why Our Jet Card is the Smartest Option | Raymond Aviation Blog</title>
        <meta name="description" content="Discover why Raymond Aviation’s Jet Card bridges the gap between on-demand charter and full ownership for frequent flyers." />
      </Helmet>
      <TheThirdWayJetCard />
      <Footer 
        FooterHeader="UPGRADE TO THE JET CARD EXPERIENCE"
        FooterTaglineOne="Fixed Rates"
        FooterTaglineTwo="Guaranteed Access"
        FooterTaglineThree="Zero Surprises"
        btnTxt="Enquire Now"
      />
    </>
  );
};

export default TheThirdWayJetCardPage;
