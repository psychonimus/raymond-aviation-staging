import React from 'react'
import HeroBanner from '../Herobanner/HeroBanner'
import Footer from '../Footer/Footer'
import HelipadInfrastructureContent from '../HelipadInfrastructureContent/HelipadInfrastructureContent'
import VerticalSlides from '../VerticleSlides/VerticleSlides'
import WhyChooseUsHelipad from '../WhyChooseUsSection/WhyChooseUsHelipad'
import HelipadCommitment from '../HelipadCommitment/HelipadCommitment'

const HelipadInfrastructure = () => {
  return (
    <>
        <HeroBanner
            headlineUp="Helipad Infrastructure"
            headlineDown=""
           bgImages={[
                    "/assets/images/helipad-banner-1.jpg",
                    "/assets/images/helipad-banner-2.jpg",
                    "/assets/images/helipad-banner-3.jpg",
                    "/assets/images/helipad-banner-4.jpg",
                    "/assets/images/helipad-banner-5.jpg"
                ]} 
        />

        <section className="charter-on-demand-about bg-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="charter-on-demand-about-content">
                            <h2 className="charter-on-demand-about-title" style={{color:"var(--primary)"}}>Helipad Consultancy, Design, Construction & Management</h2>
                            <p className="charter-on-demand-about-description">
                                Raymond Limited has been awarded the prestigious tender for the construction of a helipad on the Coastal Road in Worli, Mumbai, by the Mumbai Metropolitan Region Development Authority (MMRDA). This landmark project underscores Raymond's deep-rooted capability in delivering world-class aviation infrastructure in complex urban environments.(to be discussed)
                            </p>
                            {/* <h5 className="charter-on-demand-about-tagline">We do not build helipads. We build confidence — in the air, on the ground, and in every authority that will ever inspect your facility.</h5> */}
                            <p className="charter-on-demand-about-description mt-3">
                                Raymond Aviation offers a comprehensive, single-window solution for helipad development — from the first drawing board to the final commissioning flight. Clients benefit from unified accountability, seamless coordination, and the peace of mind that comes with engaging a 100-year-old institution.    
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <HelipadInfrastructureContent />
        {/* <VerticalSlides /> */}
        {/* <WhyChooseUsHelipad /> */}

        <HelipadCommitment />

        <Footer 
          FooterHeader="FROM CONCEPT TO OPERATION"
          FooterTaglineOne="Design"
          FooterTaglineTwo="Consultancy"
          FooterTaglineThree="Construction & Management"
        />
    </>
  )
}











export default HelipadInfrastructure
