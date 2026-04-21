import React from 'react'
import WhyChooseUs from '../WhyChooseUsSection/WhyChooseUs'
import ContactSection from '../ContactSection/ContactSection'
import HeroBanner from '../Herobanner/HeroBanner'
import JetCardContent from '../JetCardContent/JetCardContent'
import Footer from '../Footer/Footer'

const JetCardProgram = () => {
  return (
    <>
        <HeroBanner
            headlineUp="Jet Card Program"
            headlineDown=""
            bgImage="./assets/images/jet-card-program-bg.webp"
        />

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
                                <h2 className="charter-on-demand-about-title" style={{color:"var(--primary)"}}>The Sky, Simplified.</h2>
                                <p className="charter-on-demand-about-description">Unlock guaranteed access to a global fleet with a single card. No long-term contracts, no hidden fees, just pure, seamless flight at your fingertips. For those having committed flying requirement from 25 to 100 hours per year, the Jet Card provides a "third way" that bridges the gap between on-demand chartering and full ownership. A prepaid block of flight hours loaded onto a card, offering private jet access with transparent, all-inclusive hourly pricing, ideal for moderate flyers.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5 className="charter-on-demand-about-tagline"><img src="./assets/images/prepaid-commitement.svg" className='me-2' style={{width:"45px"}} alt="" /> Prepaid commitment</h5>
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="charter-on-demand-about-tagline"><img src="./assets/images/aircraft-type.svg" className='me-2' style={{width:"45px"}} alt="" /> Flexibility in aircraft type</h5>
                                    </div>
                                    
                                   
                                    <div className="col-md-6">
                                        <h5 className="charter-on-demand-about-tagline"><img src="./assets/images/fixed-rate-of-utilization.svg" className='me-2' style={{width:"45px"}} alt="" /> Fixed rate of utilization</h5>
                                    </div>
                                     <div className="col-md-6">
                                        <h5 className="charter-on-demand-about-tagline"><img src="./assets/images/zero-surprises.svg" className='me-2' style={{width:"45px"}} alt="" /> Zero surprises</h5>
                                    </div>
                                </div>
                                
                                <p className="charter-on-demand-about-description mt-3">Raymond Aviation's Jet Card Programme is designed for travellers who want the convenience of on-demand charter with flexibility in the choice of aircraft at a pre-agreed rate and a guaranteed service standard, without the commitment of fractional ownership or the unpredictability of spot charter pricing.
                                </p>

                                <h5 className="charter-on-demand-about-tagline mt-3">What is a Jet Card?</h5>
                                <p className="charter-on-demand-about-description mt-3">A Jet Card is a prepaid block of flying hours loaded onto a single account. You purchase a defined number of hours upfront at a fixed, all-inclusive hourly rate. When you travel, you simply book, and the hours are deducted from your balance. Flexible access across aircraft categories, with a pre-defined conversion rate.</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <h5 className="charter-on-demand-about-tagline"><img src="./assets/images/one-call.svg" className='me-2' style={{width:"45px"}} alt="" /> One Call</h5>
                                    </div>
                                    <div className="col-md-4">
                                        <h5 className="charter-on-demand-about-tagline"><img src="./assets/images/one-rate.svg" className='me-2' style={{width:"45px"}} alt="" /> One Rate</h5>
                                    </div>
                                    
                                   
                                    <div className="col-md-4">
                                        <h5 className="charter-on-demand-about-tagline"><img src="./assets/images/one-departure.svg" className='me-2' style={{width:"45px"}} alt="" /> One Departure</h5>
                                    </div>
                                     
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <JetCardContent />
            <Footer />
        
    </>
  )
}

export default JetCardProgram