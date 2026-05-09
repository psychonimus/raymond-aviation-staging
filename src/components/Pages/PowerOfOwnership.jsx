import React from 'react';
import { Helmet } from 'react-helmet-async';
import PowerOfOwnershipContent from '../FullBlogs/PowerOfOwnershipContent';
import Footer from '../Footer/Footer';

const PowerOfOwnershipPage = () => {
  return (
    <>
      <Helmet>
        <title>The Power of Ownership: Fractional Ownership Explained | Raymond Aviation Blog</title>
        <meta name="description" content="Discover how fractional ownership gives you the privileges of private jet ownership without the operational burden or full capital outlay." />
      </Helmet>
      <PowerOfOwnershipContent />
      <Footer 
        FooterHeader="OWN THE SKY, WITHOUT THE WEIGHT"
        FooterTaglineOne="Fractional Ownership"
        FooterTaglineTwo="Guaranteed Access"
        FooterTaglineThree="Professional Management"
        btnTxt="Enquire Now"
      />
    </>
  );
};

export default PowerOfOwnershipPage;