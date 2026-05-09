import React from 'react';
import { Helmet } from 'react-helmet-async';
import TheFutureOfPrivateAviation from '../FullBlogs/TheFutureOfPrivateAviation';
import Footer from '../Footer/Footer';

const TheFutureOfPrivateAviationPage = () => {
  return (
    <>
      <Helmet>
        <title>The Future of Private Aviation: Trends for 2026 | Raymond Aviation Blog</title>
        <meta name="description" content="Explore the latest innovations shaping luxury air travel, from sustainable aviation fuels to revolutionary cabin designs." />
      </Helmet>
      <TheFutureOfPrivateAviation />
      <Footer 
        FooterHeader="EXPLORE THE FUTURE OF AVIATION WITH US"
        FooterTaglineOne="Sustainable Travel"
        FooterTaglineTwo="AI-Powered Solutions"
        FooterTaglineThree="Next-Gen Fleet"
        btnTxt="Enquire Now"
      />
    </>
  );
};

export default TheFutureOfPrivateAviationPage;
