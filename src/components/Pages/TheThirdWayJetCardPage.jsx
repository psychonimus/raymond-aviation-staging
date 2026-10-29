import React from 'react';
import SEO from '../SEO/SEO';
import TheThirdWayJetCard from '../FullBlogs/TheThirdWayJetCard';
import Footer from '../Footer/Footer';

const TheThirdWayJetCardPage = () => {
  return (
    <>
      <SEO
        title="The Third Way: Why Our Jet Card is the Smartest Option | Raymond Aviation Blog"
        description="Discover why Raymond Aviation’s Jet Card bridges the gap between on-demand charter and full ownership for frequent flyers."
        path="/blogs/the-third-way-jet-card"
        image="/assets/images/banner-blog-5.png"
        type="article"
      />
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
