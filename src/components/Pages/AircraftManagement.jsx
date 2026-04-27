import React from 'react'
import WhyChooseUs from '../WhyChooseUsSection/WhyChooseUs'
import ContactSection from '../ContactSection/ContactSection'
import HeroBanner from '../Herobanner/HeroBanner'
import AircraftMaintenanceContent from '../AircraftMaintenanceContent/AircraftMaintenanceContent'
import Footer from '../Footer/Footer'

const AircraftManagement = () => {
  return (
    <>
        <HeroBanner
            headlineUp="Aircraft Management"
            headlineDown=""
            bgImage="./assets/images/aircraft-management-banner.jpg"
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
                                <h2 className="charter-on-demand-about-title" style={{color:"var(--primary)"}}>Your Asset, Our Expertise, Seamless Performance.</h2>
                                <p className="charter-on-demand-about-description">Professional aircraft management for the modern owner. We handle the complexities of crew, compliance, and maintenance so you can focus on the journey. We manage the details, you enjoy the flight. Owners place their aircraft under professional management for operations, scheduling, crew, compliance, and revenue optimization.</p>
                                <h5 className="charter-on-demand-about-tagline">Your aircraft, perfectly operated. Every day. In every detail.</h5>
                                <p className="charter-on-demand-about-description mt-3">Owning a private aircraft is one thing. Operating it safely, efficiently, and in full regulatory compliance is another matter entirely. Raymond Aviation’s Aircraft Management Division is equipped to deliver institutional-grade aircraft management to India’s private aircraft owners, removing the complexity of ownership while maximising the value and availability of your asset.
                                </p>

                                <h5 className="charter-on-demand-about-tagline mt-3">What Does Aircraft Management Include?</h5>
                                <p className="charter-on-demand-about-description mt-3">Raymond Aviation's management mandate covers the entire lifecycle of aircraft operation — from crew recruitment and training to DGCA compliance, scheduling, maintenance oversight, and financial reporting. When you place your aircraft under Raymond Aviation management, you receive a single, accountable partner for everything.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <AircraftMaintenanceContent />
            <Footer 
              FooterHeader="MAXIMIZE YOUR AIRCRAFT’S POTENTIAL"
              FooterTaglineOne="Crew Management"
              FooterTaglineTwo="Maintenance Oversight"
              FooterTaglineThree="Charter Revenue"
            />
        
    </>
  )
}

export default AircraftManagement