import React from 'react'
import HeroBanner from '../Herobanner/HeroBanner'
import Footer from '../Footer/Footer'
import AircraftSalesContent from '../AircraftSalesContent/AircraftSalesContent'

const AircraftSalesAndAquisition = () => {
  return (
    <>
        <HeroBanner
            headlineUp="Aircraft Sales & Acquisition"
            headlineDown="The Right Aircraft. The Right Price."
            bgImage="./assets/images/aircraft-sales-banner.webp"
        />

        <section className="charter-on-demand-about bg-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="charter-on-demand-about-image">
                                <img src="./assets/images/raymond-aviation-logo.svg" style={{ width: "200px" }} alt="Charter On-Demand" />
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="charter-on-demand-about-content">
                                <h2 className="charter-on-demand-about-title">Navigate the Global Skies with Certainty.</h2>
                                <p className="charter-on-demand-about-description"> Expertise in the acquisition and sale of world-class aircraft. We combine deep technical knowledge with market analytics to ensure your transaction is seamless, transparent and optimized for value. Assistance in buying, selling, of private aircraft, covering market valuation, negotiations, inspections, and closing.</p>
                                <h5 className="charter-on-demand-about-tagline">The right aircraft. Found, valued, and delivered with full institutional rigour.</h5>
                                <p className="charter-on-demand-about-description mt-3">Buying or selling a private aircraft in India is among the most complex commercial transactions in the country — combining international asset law, DGCA regulatory requirements, customs and import duty frameworks, GST structuring, and the nuances of a thinly traded global market. Raymond Aviation's transaction advisory team has navigated every category of this complexity since 1996.
                                </p>

                                </div>
                        </div>

                    </div>
                </div>
            </section>

            <AircraftSalesContent />

        <Footer />
    </>
  )
}

export default AircraftSalesAndAquisition