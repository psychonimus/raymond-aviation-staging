import { useEffect, useState } from "react";
import "./Hero.css";
import { FlowButton } from "../FlowButton/FlowButton";
import { Link } from "react-router-dom";



// Icon SVGs for services
const icons = {
    charter: (
        <img src="../assets/images/aircraft.svg" alt="" style={{ width: "50px" }} />


    ),
    sales: (
        <img src="../assets/images/aircraft-2.svg" alt="" style={{ width: "45px" }} />

    ),
    design: (
        <img src="../assets/images/Concierge-services.svg" alt="" style={{ width: "45px" }} />

    ),
    mgmt1: (
        <img src="../assets/images/aircraft-management.svg" alt="" style={{ width: "50px" }} />

    ),
    mgmt2: (
        <img src="../assets/images/aviation-consultancy.svg" alt="" style={{ width: "50px" }} />
    ),
    design2: (
        <img src="../assets/images/plane-design.svg" alt="" style={{ width: "50px" }} />
    ),
    partnership: (
        <img src="../assets/images/empty-leg.svg" alt="" style={{ width: "50px" }} />
    ),
};

const services = [
    { icon: "charter", title: "Charter \n On-Demand", desc: "Bespoke charter services and expert brokerage connecting clients to the finest aircraft worldwide.", path: "/charter-on-demand" },
    { icon: "sales", title: "Fractional \n Ownership", desc: "Expert guidance through every stage of aircraft acquisition and remarketing with full market access.", path: "/fractional-ownership" },
    { icon: "design", title: "Jet Card \n Programs", desc: "Tailored interior design and completion management for the most discerning aviation clients.", path: "/jet-card-program" },
    { icon: "mgmt1", title: "Aircraft \n Management", desc: "Comprehensive aircraft management ensuring safety, compliance, and operational excellence.", path: "/aircraft-management" },
    { icon: "mgmt2", title: "Aircraft sales \n & Acquisitions", desc: "Premium crew management and operational support for private and corporate fleet owners.", path: "/aircraft-sales-and-aquisition" },
    { icon: "partnership", title: "Helipad \n Infrastructure", desc: "Tailored interior design and completion management for the most discerning aviation clients.", path: "/empty-leg-flights" },
];



export default function Hero() {
    return (
        <>

            <div className="ac-hero-wrapper">
                <video
                    className="ac-hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/assets/videos/bg-vid-2.webm" type="video/webm" />
                </video>
                <div className="ac-hero-bg" />
                <div className="ac-hero-content">

                    <div className="d-flex flex-column justify-content-between h-100">
                        {/* Headline */}
                        <div className="ac-hero-text ">
                            {/* <p className="ac-hero-overline">Our Expert Services</p> */}
                            <h1 className="ac-hero-headline mt-2">Your Gateway to <br /> Reliable Charter Services</h1>
                        </div>
                        <div>
                            {/* Services */}
                            <div className="ac-services">
                                <div className="ac-services-grid">
                                    {services.map((svc, i) => (
                                        <div className="ac-service-item-wrapper" key={svc.title + i}>
                                            <Link style={{textDecoration:"none"}} to={svc.path}>
                                            <div className="ac-service-item">
                                                <div className="ac-service-icon">{icons[svc.icon]}</div>
                                                <div className="ac-service-title">
                                                    {svc.title.split("\n").map((line, j) => (
                                                        <span key={j}>
                                                            {line}
                                                            {j === 0 && svc.title.includes("\n") ? <br /> : ""}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="ac-cta-wrap d-flex flex-column align-items-center justify-content-center">

                                <FlowButton text="Request Charter Quote" />

                                {/* <div className="ac-scroll-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <h6 className="text-white mt-3">Scroll Down</h6>
                                </div> */}
                            </div>
                        </div>
                    </div>







                </div>
            </div>




        </>
    );
}