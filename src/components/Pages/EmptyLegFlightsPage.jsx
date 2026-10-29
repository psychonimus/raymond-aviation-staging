import React from 'react';
import SEO from '../SEO/SEO';
import EmptyLegFlights from '../FullBlogs/EmptyLegFlights';
import Footer from '../Footer/Footer';

const EmptyLegFlightsPage = () => {
  return (
    <>
      <SEO
        title="Empty Leg Flights: What You Need to Know | Raymond Aviation Blog"
        description="Unlock incredible value in private aviation by taking advantage of empty leg flights. Understand how to find the best deals."
        path="/blogs/empty-leg-flights"
        image="/assets/images/banner-blog-6.jpg"
        type="article"
      />
      <EmptyLegFlights />
      <Footer 
        FooterHeader="UNLOCK EXTRAORDINARY VALUE"
        FooterTaglineOne="Spontaneous Luxury"
        FooterTaglineTwo="Repositioning Deals"
        FooterTaglineThree="Smart Aviation"
        btnTxt="Enquire Now"
      />
    </>
  );
};

export default EmptyLegFlightsPage;
