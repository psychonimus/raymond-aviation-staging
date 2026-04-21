import React from 'react'
import HeroBanner from '../Herobanner/HeroBanner'
import Footer from '../Footer/Footer'
import EmptyLegFlightsContent from '../EmptyLegFlightsContent/EmptyLegFlightsContent'


const EmptyLegFligts = () => {
    return (
        <>
            <HeroBanner
                headlineUp="Empty Leg Flights"
                headlineDown="Private Aviation, Simplified"
                bgImage="./assets/images/empty-leg-banner.webp"
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
                                <h2 className="charter-on-demand-about-title">Luxury at the Speed of Opportunity.</h2>
                                <p className="charter-on-demand-about-description mt-3">An empty leg is one of private aviation's best-kept secrets. When a chartered aircraft completes a one-way journey, it must reposition to its base or its next assignment, empty. Rather than flying with no revenue, Raymond Aviation offers these repositioning sectors at significantly discounted rates. The aircraft is identical. The crew is identical. The experience is identical. Only the price is different.
                                <h5 className="charter-on-demand-about-tagline">Private aviation at exceptional value, because the aircraft is travelling anyway.</h5>
                                <p className="charter-on-demand-about-description">Experience the world of private aviation for up to 75% less. Access our live inventory of empty leg flights and turn a repositioning mission into your next spontaneous getaway. Discounted flights on repositioning aircraft — the plane needs to travel anyway, so seats are offered at reduced rates.</p>
                                </p>

                                <h5 className="charter-on-demand-about-tagline mt-3">How Empty Legs Work</h5>
                                <p className="charter-on-demand-about-description mt-3">▪ A client charters an aircraft from Mumbai to Delhi — one way <br />
                                    ▪ The aircraft must return to Mumbai (or proceed to another location)<br />
                                    ▪ Raymond Aviation offers this repositioning sector as an empty leg to eligible clients<br />
                                    ▪ The client accesses a private jet flight at 30–60% below standard charter rates<br />
                                    ▪ Booking is subject to the primary charter proceeding as planned<br />
                                </p>

                                <h5 className="charter-on-demand-about-tagline mt-3">Who Empty Legs Are Best Suited For</h5>
                                <p className="charter-on-demand-about-description mt-3">
                                    ▪ <b>Flexible Travellers:</b> Clients with adaptable departure dates and times who can align to available sectors<br />
                                    ▪ <b>Jet Card & Fractional Owners:</b> Priority empty leg notifications for existing Raymond Aviation clients<br />
                                    ▪ <b>First-Time Private Flyers:</b> An outstanding introduction to private aviation at an accessible price point<br />
                                    ▪ <b>Corporate Teams:</b> Groups travelling one-way to conferences, off-sites, or events who can benefit from discounted rates<br />
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <EmptyLegFlightsContent />

            <Footer />
        </>
    )
}

export default EmptyLegFligts