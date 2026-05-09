import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavigatingAircraftAcquisition from '../FullBlogs/NavigatingAircraftAcquisition';
import Footer from '../Footer/Footer';

const NavigatingAircraftAcquisitionPage = () => {
  return (
    <>
      <Helmet>
        <title>Navigating Aircraft Acquisition: Buyer's Guide | Raymond Aviation Blog</title>
        <meta name="description" content="Expert tips on selecting the right private aircraft, from pre-owned vs new to maintenance and financing options." />
      </Helmet>
      <NavigatingAircraftAcquisition />
      <Footer 
        FooterHeader="PARTNER WITH EXPERTS FOR YOUR NEXT ACQUISITION"
        FooterTaglineOne="Strategic Advice"
        FooterTaglineTwo="Technical Due Diligence"
        FooterTaglineThree="Seamless Closing"
        btnTxt="Enquire Now"
      />
    </>
  );
};

export default NavigatingAircraftAcquisitionPage;
