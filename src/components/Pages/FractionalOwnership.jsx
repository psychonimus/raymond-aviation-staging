import React from 'react'

import Footer from '../Footer/Footer'
import HeroBanner from '../Herobanner/HeroBanner'
import FractionalOwnershipContent from '../FractionalOwnershipContent/FractionalOwnershipContent'

const FractionalOwnership = () => {
    return (
        <>
            <HeroBanner headlineUp="Fractional" headlineDown="Ownership" bgImage="/assets/images/fractional-ownership-bg.webp" />

            <section className="charter-on-demand-about bg-white py-5">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-3">
                            <div className="charter-on-demand-about-image">
                                <img src="./assets/images/raymond-aviation-logo.svg" style={{ width: "200px" }} alt="Charter On-Demand" />
                            </div>
                        </div> */}

                        <div className="col-md-12">
                            <div className="charter-on-demand-about-content">
                                <h2 className="charter-on-demand-about-title" style={{ color:"var(--primary)"}}>The Power of Ownership.</h2>
                                <p className="charter-on-demand-about-description">Why own just one jet or one helicopter when you can have access to the world's most advanced fleet. Benefits of full ownership with none of the operational burden at a fraction of a cost.</p>
                                <h5 className="charter-on-demand-about-tagline">The privileges of aircraft ownership — without the full weight of sole ownership.</h5>
                                <p className="charter-on-demand-about-description mt-3">Raymond Aviation's Fractional Ownership Programme is designed for India's most active private travellers — HNI's, corporate houses, celebrities & dignitaries — who require regular private aviation access but prefer not to carry the capital burden and operational responsibility of full ownership.
                                </p>

                                <h5 className="charter-on-demand-about-tagline mt-3">What is Fractional Ownership?</h5>
                                <p className="charter-on-demand-about-description mt-3">Fractional ownership means purchasing a defined share in a professionally operated aircraft. Your share corresponds to a guaranteed number of flight hours per year — typically ranging from 50 to 400 hours annually, depending on the share size you acquire. All operations, maintenance, crew management, scheduling, and regulatory compliance are handled entirely by Raymond Aviation.</p>
                                <p className="charter-on-demand-about-description mt-3">The result: you enjoy all the operational benefits of owning a private aircraft — without the full purchase price, without the complexity, and without the administrative burden that comes with it.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <FractionalOwnershipContent />

            <Footer />
        </>
    )
}

export default FractionalOwnership