import React from 'react';
import { Helmet } from 'react-helmet-async';
import EmptyLegFlights from '../FullBlogs/EmptyLegFlights';
import Footer from '../Footer/Footer';

const EmptyLegFlightsPage = () => {
  return (
    <>
      <Helmet>
        <title>Empty Leg Flights: What You Need to Know | Raymond Aviation Blog</title>
        <meta name="description" content="Unlock incredible value in private aviation by taking advantage of empty leg flights. Understand how to find the best deals." />
      </Helmet>
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
