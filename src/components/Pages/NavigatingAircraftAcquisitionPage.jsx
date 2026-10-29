import React from 'react';
import SEO from '../SEO/SEO';
import NavigatingAircraftAcquisition from '../FullBlogs/NavigatingAircraftAcquisition';
import Footer from '../Footer/Footer';

const NavigatingAircraftAcquisitionPage = () => {
  return (
    <>
      <SEO
        title="Navigating Aircraft Acquisition: Buyer's Guide | Raymond Aviation Blog"
        description="Expert tips on selecting the right private aircraft, from pre-owned vs new to maintenance and financing options."
        path="/blogs/navigating-aircraft-acquisition"
        image="/assets/images/aircraft-blog-3.jpg"
        type="article"
      />
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
