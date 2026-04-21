import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import "./ServiceHero.css";
import { FlowButton } from "../FlowButton/FlowButton";




export default function ServiceHero() {
    return (
        <>

            <div className="service-hero-wrapper" style={{ backgroundImage: `url("/assets/images/Services-bg.webp")` }}>

                <div className=" ac-hero-bg" />
                <div className="ac-hero-content">

                    <div className="container-fluid d-flex align-items-end justify-content-between h-100 pb-5">
                        {/* Headline */}
                        <div className="ac-hero-text ">
                            {/* <p className="ac-hero-overline">Our Expert Services</p> */}
                            <h1 className="about-hero-headline mt-2 text-start">ELEVATING YOUR JOURNEY WITH <br /> EXPERT AVIATION SOLUTIONS.</h1>
                            <FlowButton text="Request Charter Quote" />
                        </div>
                        <div>
                            {/* Services */}


                            {/* CTA */}
                            
                        </div>
                    </div>







                </div>
            </div>




        </>
    );
}