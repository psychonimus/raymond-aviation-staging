import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import "./HeroBanner.css";
import { FlowButton } from "../FlowButton/FlowButton";




export default function HeroBanner({ headlineUp, headlineDown, bgImage, bgImages, bgVideo }) {
    const images = bgImages || (bgImage ? [bgImage] : []);

    return (
        <>

            <div className="HeroBanner-hero-wrapper">
                <div className="HeroBanner-swiper-container">
                    {bgVideo ? (
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="ac-hero-bg HeroBanner-bg-slide"
                            style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
                        >
                            <source src={bgVideo} type="video/webm" />
                        </video>
                    ) : (
                        <Swiper
                            modules={[Autoplay, Navigation, EffectFade]}
                            effect="fade"
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            allowTouchMove={false}
                            className="HeroBanner-swiper"
                        >
                            {images.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="ac-hero-bg HeroBanner-bg-slide" style={{ backgroundImage: `url("${img}")`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
                <div className="ac-hero-content">

                    <div className="container-fluid d-flex align-items-end justify-content-between h-100 pb-5">
                        {/* Headline */}
                        <div className="ac-hero-text ">
                            {/* <p className="ac-hero-overline">Our Expert Services</p> */}
                            <h1 className="HeroBanner-hero-headline mt-2 text-start">{headlineUp} <br /> {headlineDown}</h1>
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