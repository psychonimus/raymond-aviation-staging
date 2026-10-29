import React from 'react';
import SEO from '../SEO/SEO';
import PowerOfOwnershipContent from '../FullBlogs/PowerOfOwnershipContent';
import Footer from '../Footer/Footer';

const PowerOfOwnershipPage = () => {
  return (
    <>
      <SEO
        title="The Power of Ownership: Fractional Ownership Explained | Raymond Aviation Blog"
        description="Discover how fractional ownership gives you the privileges of private jet ownership without the operational burden or full capital outlay."
        path="/blogs/power-of-ownership"
        image="/assets/images/banner-blog-4.png"
        type="article"
      />
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