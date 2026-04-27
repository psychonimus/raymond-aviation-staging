import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HelipadCommitment.css";

gsap.registerPlugin(ScrollTrigger);

const HelipadCommitment = () => {
    const sectionRef = useRef(null);
    const commitmentRef = useRef(null);
    const promiseRef = useRef(null);
    const ctaRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Our Commitment Section Animation
            gsap.fromTo(".commitment-title", 
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".commitment-title",
                        start: "top 90%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                }
            );

            const cards = gsap.utils.toArray(".commitment-item-card");
            if (cards.length > 0) {
                gsap.fromTo(cards, 
                    { y: 50, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: ".commitment-grid",
                            start: "top 85%",
                            toggleActions: "play none none none"
                        },
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power2.out",
                    }
                );
            }

            // The Raymond Promise Animation
            gsap.fromTo(".promise-text", 
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".promise-section",
                        start: "top 80%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                }
            );

            // Get in Touch Animation
            gsap.fromTo(".cta-content", 
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".cta-section",
                        start: "top 85%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                }
            );

            // Parallax for Promise Section
            gsap.to(".promise-section", {
                scrollTrigger: {
                    trigger: ".promise-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                },
                backgroundPositionY: "30%",
                ease: "none"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const commitments = [
        {
            title: "Transparent Management",
            desc: "Milestone-linked reporting for clarity on capital and time",
            icon: "01"
        },
        {
            title: "Dedicated Experts",
            desc: "Project management & regulatory liaison",
            icon: "02"
        },
        {
            title: "Weekly Updates",
            desc: "On-demand access to project updates",
            icon: "03"
        },
        {
            title: "Fixed-Price Contracts",
            desc: "Clearly defined scope & no hidden costs",
            icon: "04"
        },
        {
            title: "Post-Commissioning",
            desc: "12-month warranty on all civil works.(to be discussed)",
            icon: "05"
        },
        {
            title: "Ongoing Operations",
            desc: "Support to keep your helipad operational",
            icon: "06"
        }
    ];

    return (
        <div ref={sectionRef} className="helipad-commitment-wrapper">
            {/* --- COMMITMENT SECTION --- */}
            <section className="commitment-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="commitment-title section-title" style={{color:"var(--primary)"}}>
                            Our Commitment <span>to Clients</span>
                        </h2>
                        <p className="commitment-subtitle mx-auto">
                            Investing in helipad infrastructure is a significant commitment. 
                            Our promise is to simplify the complexity through excellence.
                        </p>
                    </div>

                    <div className="commitment-grid">
                        {commitments.map((item, index) => (
                            <div 
                                key={index} 
                                className="commitment-item-card"
                            >
                                <div className="commitment-card-bg-glow"></div>
                                <span className="commitment-card-number">{item.icon}</span>
                                <h4 className="commitment-card-title">{item.title}</h4>
                                <p className="commitment-card-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- THE RAYMOND PROMISE --- */}
            <section className="promise-section">
                <div className="promise-overlay"></div>
                <div className="container position-relative z-1">
                    <div className="promise-content text-center">
                        {/* <h5 className="promise-eyebrow">The Raymond Promise</h5> */}
                        <div className="promise-divider"></div>

                        <h2 className="promise-text">
                            "We do not build helipads. We build confidence.<br></br> in the air, on the ground, and in every authority that will ever inspect your facility."
                        </h2>
                        <div className="promise-divider"></div>
                        {/* <p className="promise-footer-text">
                            Every helipad we deliver is a reflection of 100 years of Raymond quality 
                            and 30 years of aviation expertise.
                        </p> */}
                    </div>
                </div>
            </section>

            {/* --- GET IN TOUCH --- */}
            
        </div>
    );
};

export default HelipadCommitment;
