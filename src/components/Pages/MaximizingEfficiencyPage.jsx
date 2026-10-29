import React from 'react';
import SEO from '../SEO/SEO';
import MaximizingEfficiency from '../FullBlogs/MaximizingEfficiency';
import Footer from '../Footer/Footer';

const MaximizingEfficiencyPage = () => {
  return (
    <>
      <SEO
        title="Maximizing Efficiency: Helicopter Charter Benefits | Raymond Aviation Blog"
        description="Discover how point-to-point helicopter charters can save you valuable time and redefine your travel efficiency."
        path="/blogs/maximizing-efficiency"
        image="/assets/images/cod-helicopter.jpg"
        type="article"
      />
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
