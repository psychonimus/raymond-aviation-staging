import React from 'react';
import SEO from '../SEO/SEO';
import TheFutureOfPrivateAviation from '../FullBlogs/TheFutureOfPrivateAviation';
import Footer from '../Footer/Footer';

const TheFutureOfPrivateAviationPage = () => {
  return (
    <>
      <SEO
        title="The Future of Private Aviation: Trends for 2026 | Raymond Aviation Blog"
        description="Explore the latest innovations shaping luxury air travel, from sustainable aviation fuels to revolutionary cabin designs."
        path="/blogs/the-future-of-private-aviation"
        image="/assets/images/charter-on-demand-banner.jpg"
        type="article"
      />
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
