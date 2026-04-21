import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import "./AboutHero.css";
import { FlowButton } from "../FlowButton/FlowButton";




export default function AboutHero() {
    return (
        <>

            <div className="about-hero-wrapper">

                <div className=" ac-hero-bg" />
                <div className="ac-hero-content">

                    <div className="container-fluid d-flex align-items-end justify-content-between h-100 pb-5">
                        {/* Headline */}
                        <div className="ac-hero-text ">
                            {/* <p className="ac-hero-overline">Our Expert Services</p> */}
                            <h1 className="about-hero-headline mt-2 text-start">Your Gateway to  <br /> Reliable Private Aviation.</h1>
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