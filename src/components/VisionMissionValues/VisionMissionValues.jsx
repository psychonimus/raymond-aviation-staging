import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./VisionMissionValues.css";

gsap.registerPlugin(ScrollTrigger);

const VisionMissionValues = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const gridRef = useRef(null);
    const valuesRef = useRef(null);

    const titleLinesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.from(".vmv-eyebrow", {
                y: 20,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 85%",
                }
            });

            // Title split line animation
            const titleInners = titleLinesRef.current.map(el => el?.querySelector('.title-line-inner')).filter(Boolean);
            gsap.from(titleInners, {
                yPercent: 100,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%",
                }
            });

            // Vision & Mission Cards staggered reveal
            const cards = gsap.utils.toArray(".vmv-card");
            gsap.from(cards, {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 75%",
                }
            });

            // Values Section reveal
            gsap.from(".values-title-group", {
                opacity: 0,
                y: 30,
                duration: 1,
                scrollTrigger: {
                    trigger: valuesRef.current,
                    start: "top 80%",
                }
            });

            const valueItems = gsap.utils.toArray(".value-item");
            gsap.from(valueItems, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".values-grid",
                    start: "top 85%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const values = [
        {
            name: "Integrity First",
            desc: "Driven by transparency, discretion, and integrity, we build lasting relationships.",
            icon: "/assets/images/accountability.svg"
        },
        {
            name: "Operational Excellence",
            desc: "We uphold precision and reliability with consistently high standards.",
            icon: "/assets/images/regulatory-compliance.svg"
        },
        {
            name: "Client-Centric Thinking",
            desc: "Tailored solutions that ensure seamless experiences across every touchpoint.",
            icon: "/assets/images/no-compromise.svg"
        },
        {
            name: "Progress with Purpose",
            desc: "We combine modern solutions with the strength of a trusted legacy.",
            icon: "/assets/images/aviation-experience.svg"
        }
    ];

    return (
        <section ref={sectionRef} className="vmv-section">
            <div className="vmv-container">
                {/* <div ref={headerRef} className="vmv-header">
                    <span className="vmv-eyebrow">Our North Star</span>
                    <h2 className="vmv-title">
                        {["Guided by Purpose,", "Driven by Excellence."].map((line, i) => (
                            <span key={i} className="title-line" ref={el => titleLinesRef.current[i] = el}>
                                <span className="title-line-inner">{line}</span>
                            </span>
                        ))}
                    </h2>
                </div> */}

                <div ref={gridRef} className="vmv-grid">
                    <div className="vmv-card">
                        {/* <span className="vmv-card-number">01</span> */}
                        <div>
                            <span className="vmv-card-label">Our Vision</span>
                            <h3 className="vmv-card-title">Shaping the Future <br />of Private Aviation</h3>
                        </div>
                        <p className="vmv-card-text">
                            To be the benchmark for excellence in private aviation, combining precision, safety, and bespoke service for a global clientele.
                        </p>
                    </div>

                    <div className="vmv-card">
                        {/* <span className="vmv-card-number">02</span> */}
                        <div>
                            <span className="vmv-card-label">Our Mission</span>
                            <h3 className="vmv-card-title">Crafting <br />Exceptional Journeys.</h3>
                        </div>
                        <p className="vmv-card-text">
                            To deliver uncompromising air travel experiences through operational excellence, a world-class fleet, and a legacy of trust built over decades.
                        </p>
                    </div>
                </div>

                <div ref={valuesRef} className="values-container">
                    <div className="values-title-group">
                        <h2 className="values-main-title">Core Values</h2>
                        {/* <span className="vmv-eyebrow">How we fly</span> */}
                    </div>

                    <div className="values-grid">
                        {values.map((val, idx) => (
                            <div key={idx} className="value-item">
                                <div className="value-icon">
                                    <img src={val.icon} alt={val.name} />
                                </div>
                                <h4 className="value-name">{val.name}</h4>
                                <p className="value-desc">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMissionValues;
