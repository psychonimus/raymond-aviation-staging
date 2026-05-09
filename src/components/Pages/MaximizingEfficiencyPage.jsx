import React from 'react';
import { Helmet } from 'react-helmet-async';
import MaximizingEfficiency from '../FullBlogs/MaximizingEfficiency';
import Footer from '../Footer/Footer';

const MaximizingEfficiencyPage = () => {
  return (
    <>
      <Helmet>
        <title>Maximizing Efficiency: Helicopter Charter Benefits | Raymond Aviation Blog</title>
        <meta name="description" content="Discover how point-to-point helicopter charters can save you valuable time and redefine your travel efficiency." />
      </Helmet>
      <MaximizingEfficiency />
      <Footer 
        FooterHeader="OPTIMIZE YOUR TRAVEL TIME TODAY"
        FooterTaglineOne="Point-to-Point"
        FooterTaglineTwo="Bypass Congestion"
        FooterTaglineThree="Maximum Efficiency"
        btnTxt="Enquire Now"
      />
    </>
  );
};

export default MaximizingEfficiencyPage;
