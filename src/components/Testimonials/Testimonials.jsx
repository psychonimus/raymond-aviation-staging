import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".testimonials-eyebrow", {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                }
            });

            gsap.from(".testimonials-title", {
                y: 30,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%",
                }
            });

            gsap.from(".testimonials-slider-wrapper", {
                opacity: 0,
                y: 40,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".testimonials-slider-wrapper",
                    start: "top 75%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const reviews = [
        {
            text: "The attention to detail and commitment to safety at Raymond Aviation is unparalleled. From the ground support to the inflight experience, every journey feels personalized and seamless.",
            name: "Rajesh Khanna",
            role: "Entrepreneur & Luxury Traveler"
        },
        {
            text: "Managing an aircraft can be a complex endeavor, but Raymond Aviation makes it look easy. Their transparent reporting and expert crew management have been invaluable to our operations.",
            name: "Sanjay Mehta",
            role: "Private Jet Owner"
        },
        {
            text: "For our time-critical corporate missions, Raymond Aviation has consistently been a reliable partner. Their quick turnaround and professional handling are truly world-class.",
            name: "Vikram Singh",
            role: "Chief Logistics Officer"
        }
    ];

    return (
        <section ref={sectionRef} className="testimonials-section">
            {/* <div className="testimonials-bg-text">TRUST</div> */}
            <div className="testimonials-container">
                <div ref={headerRef} className="testimonials-header">
                    <span className="testimonials-eyebrow">Client Voices</span>
                    <h2 className="testimonials-title">TRUSTED ACROSS EVERY JOURNEY</h2>
                </div>

                <div className="testimonials-slider-wrapper">
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation, EffectFade]}
                        effect="fade"
                        fadeEffect={{ crossFade: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop={true}
                        speed={1000}
                        className="testimonials-slider"
                    >
                        {reviews.map((review, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="testimonial-slide">
                                    <div className="testimonial-quote-icon">“</div>
                                    <p className="testimonial-content">
                                        {review.text}
                                    </p>
                                    <div className="testimonial-author">
                                        <h4 className="testimonial-name">{review.name}</h4>
                                        <span className="testimonial-role">{review.role}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
